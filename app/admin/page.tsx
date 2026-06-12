'use client';

import { useState, useEffect, useCallback } from 'react';
import { listPosts, getPostContent, commitFile, deleteFile, uploadImage, getSlug, type GitHubFile } from '@/app/utils/github';

type PostForm = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: string;
};

const emptyForm: PostForm = {
  title: '',
  slug: '',
  date: new Date().toISOString().split('T')[0],
  excerpt: '',
  coverImage: '',
  content: '',
};

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState('');
  const [pwError, setPwError] = useState('');
  const [files, setFiles] = useState<GitHubFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<PostForm>(emptyForm);
  const [editPath, setEditPath] = useState('');
  const [editSha, setEditSha] = useState('');
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');
  const [imageUploading, setImageUploading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('admin_auth') === 'true') {
      setAuthed(true);
    }
  }, []);

  const loadPosts = useCallback(async () => {
    setLoading(true);
    const posts = await listPosts();
    setFiles(posts);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (authed) loadPosts();
  }, [authed, loadPosts]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setPwError('');
    const correct = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || '';
    if (!pw) { setPwError('パスワードを入力してください。'); return; }
    if (pw === correct) {
      sessionStorage.setItem('admin_auth', 'true');
      setAuthed(true);
    } else {
      setPwError('パスワードが正しくありません。');
    }
  }

  async function handleEdit(file: GitHubFile) {
    setMsg('');
    const data = await getPostContent(file.path);
    if (!data) { setMsg('Failed to load post'); return; }

    const frontmatter: Record<string, string> = {};
    const bodyMatch = data.content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    let body = data.content;
    if (bodyMatch) {
      const fmLines = bodyMatch[1].split('\n');
      for (const line of fmLines) {
        const m = line.match(/^(\w+):\s*(.+)$/);
        if (m) frontmatter[m[1]] = m[1] === 'published' ? m[2] : m[2].replace(/^["']|["']$/g, '');
      }
      body = bodyMatch[2].trim();
    }

    setForm({
      title: frontmatter.title || '',
      slug: getSlug(file.path),
      date: frontmatter.date || '',
      excerpt: frontmatter.excerpt || '',
      coverImage: frontmatter.coverImage || '',
      content: body,
    });
    setEditPath(file.path);
    setEditSha(data.sha);
    setEditing(true);
  }

  function handleNew() {
    setMsg('');
    setForm(emptyForm);
    setEditPath('');
    setEditSha('');
    setEditing(true);
  }

  function buildMarkdown(f: PostForm): string {
    const frontmatter = [
      '---',
      `title: "${f.title.replace(/"/g, '\\"')}"`,
      `slug: ${f.slug}`,
      `date: ${f.date}`,
      `excerpt: "${f.excerpt.replace(/"/g, '\\"')}"`,
      f.coverImage ? `coverImage: ${f.coverImage}` : '',
      'published: true',
      '---',
      '',
      f.content,
    ].filter(l => l).join('\n');
    return frontmatter;
  }

  async function handleSave() {
    setMsg('');
    if (!form.title || !form.slug || !form.date) {
      setMsg('タイトル、スラッグ、公開日は必須です。');
      return;
    }

    setSaving(true);
    const path = `${editPath || `content/blog/${form.slug}.md`}`;
    const content = buildMarkdown(form);
    const ok = await commitFile(path, content, editPath ? `Update ${form.slug}` : `Create ${form.slug}`, editSha || undefined);
    setSaving(false);

    if (ok) {
      setMsg('保存しました！サイトが再デプロイされるまで数分かかります。');
      setEditing(false);
      loadPosts();
    } else {
      setMsg('保存に失敗しました。GitHub Token が正しく設定されているか確認してください。');
    }
  }

  async function handleDelete(file: GitHubFile) {
    if (!confirm(`「${file.name}」を削除しますか？`)) return;
    setMsg('');
    const data = await getPostContent(file.path);
    if (!data) return;
    const ok = await deleteFile(file.path, data.sha);
    if (ok) {
      setMsg('削除しました。');
      loadPosts();
    } else {
      setMsg('削除に失敗しました。');
    }
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageUploading(true);
    setMsg('');

    const reader = new FileReader();
    reader.onload = async () => {
      const base64 = (reader.result as string).split(',')[1];
      const filename = `${Date.now()}-${file.name}`;
      const path = await uploadImage(filename, base64);
      setImageUploading(false);
      if (path) {
        setForm(prev => ({ ...prev, coverImage: path }));
        setMsg('画像をアップロードしました。記事を保存すると反映されます。');
      } else {
        setMsg('画像のアップロードに失敗しました。');
      }
    };
    reader.readAsDataURL(file);
  }

  function cancelEdit() {
    setEditing(false);
    setMsg('');
    setForm(emptyForm);
  }

  /* ── Login Screen ── */
  if (!authed) {
    return (
      <div className="admin-login">
        <div className="admin-login-card">
          <div className="admin-login-icon">
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h1>管理画面</h1>
          <p>パスワードを入力してください。</p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={pw}
              onChange={e => setPw(e.target.value)}
              placeholder="パスワード"
              autoFocus
              className="admin-input"
            />
            {pwError && <p className="admin-error">{pwError}</p>}
            <button type="submit" className="admin-btn admin-btn-primary">
              ログイン
            </button>
          </form>
        </div>
      </div>
    );
  }

  /* ── Editor Screen ── */
  if (editing) {
    return (
      <div className="admin-page">
        <div className="admin-header">
          <h1>{editPath ? '記事を編集' : '新規記事作成'}</h1>
          <button onClick={cancelEdit} className="admin-btn admin-btn-ghost">戻る</button>
        </div>

        <div className="admin-form">
          <label>
            タイトル <span className="admin-req">*</span>
            <input value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} className="admin-input" />
          </label>

          <label>
            スラッグ（URL識別子） <span className="admin-req">*</span>
            <input value={form.slug} onChange={e => setForm(p => ({ ...p, slug: e.target.value }))} className="admin-input" placeholder="例: hello-world" />
          </label>

          <label>
            公開日 <span className="admin-req">*</span>
            <input type="date" value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))} className="admin-input" />
          </label>

          <label>
            抜粋（一覧に表示される概要）
            <textarea value={form.excerpt} onChange={e => setForm(p => ({ ...p, excerpt: e.target.value }))} className="admin-input admin-textarea" rows={2} />
          </label>

          <label>
            カバー画像
            <div className="admin-image-row">
              <input value={form.coverImage} onChange={e => setForm(p => ({ ...p, coverImage: e.target.value }))} className="admin-input" placeholder="/images/blog/..." />
              <label className="admin-btn admin-btn-secondary admin-upload-btn">
                {imageUploading ? 'アップロード中...' : '画像をアップロード'}
                <input type="file" accept="image/*" onChange={handleImageUpload} hidden disabled={imageUploading} />
              </label>
            </div>
            {form.coverImage && (
              <img src={form.coverImage} alt="preview" className="admin-preview" />
            )}
          </label>

          <label>
            本文（Markdown形式）
            <textarea value={form.content} onChange={e => setForm(p => ({ ...p, content: e.target.value }))} className="admin-input admin-textarea admin-content-area" rows={15} />
          </label>

          {msg && <p className="admin-msg">{msg}</p>}

          <div className="admin-form-actions">
            <button onClick={cancelEdit} className="admin-btn admin-btn-ghost">キャンセル</button>
            <button onClick={handleSave} disabled={saving} className="admin-btn admin-btn-primary">
              {saving ? '保存中...' : '保存する'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── Post List ── */
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>ブログ管理</h1>
        <button onClick={handleNew} className="admin-btn admin-btn-primary">新規記事作成</button>
      </div>

      {msg && <p className="admin-msg">{msg}</p>}

      {loading ? (
        <p className="admin-loading">読み込み中...</p>
      ) : files.length === 0 ? (
        <p className="admin-empty">まだ記事がありません。「新規記事作成」から作成してください。</p>
      ) : (
        <div className="admin-list">
          {files.map(file => (
            <div key={file.sha} className="admin-list-item">
              <div className="admin-list-info">
                <span className="admin-list-name">{file.name}</span>
              </div>
              <div className="admin-list-actions">
                <button onClick={() => handleEdit(file)} className="admin-btn admin-btn-secondary">編集</button>
                <button onClick={() => handleDelete(file)} className="admin-btn admin-btn-danger">削除</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
