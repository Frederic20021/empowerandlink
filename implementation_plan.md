# Empower & Link — Vercel Migration Summary

## What We Did

### Architecture Change
- **Before**: WordPress site with Next.js app embedded via iframe on GitHub Pages
- **After**: Standalone Next.js 16 app deployed on Vercel at a custom domain

### Code Changes
- **next.config.ts**: Removed `output: 'export'`, `basePath`, `assetPrefix` — Vercel-native
- **paths.ts**: Simplified `getAssetPath` (no longer prepends `/empowerandlink` base path)
- **All components**: Converted `https://empowerandlink.com/...` external links to relative paths (`/recruitment`, `/english`, etc.)
- **CosmosNav.tsx**: Removed iframe detection logic (no longer embedded in WordPress)
- **Package**: Removed `gh-pages` dependency, `deploy`/`predeploy` scripts, `homepage` field
- **GitHub Actions**: Deleted `.github/workflows/deploy.yml` (Vercel handles deployments)
- **Next.js**: Upgraded 15.4.5 → 16.2.9 to pass Vercel's security scan

### Admin Page Fixes
- **github.ts**: Changed `BRANCH` from `'blog'` → `'main'` so admin commits go to the deployed branch
- **github.ts**: Added `btoaUTF8`/`atobUTF8` helpers for Unicode-safe base64 (Japanese text support)
- **github.ts**: Added `alreadyEncoded` parameter to prevent double-encoding image uploads
- **admin/page.tsx**: Added Vercel Deploy Hook trigger on save → auto-rebuilds the site
- **Merge conflict resolution**: Fixed pre-existing conflict markers in `CourseListing.tsx` and `TestimonialSection.tsx`; fixed `layout.tsx` imports

### How Admin Works Now
1. CEO visits `empowerandlink.com/admin`, logs in with password
2. Creates/edits post → commits `.md` file to `main` branch via GitHub API
3. Admin page calls Vercel Deploy Hook → triggers production rebuild
4. ~1-2 minutes later, the new post appears on the live site

---

## Markdown Workaround for CEO

The admin page currently has a raw `<textarea>` for the blog post body (Markdown format). For a non-technical user, replace it with a live preview pane using `react-markdown` (already installed):

### In `app/admin/page.tsx`:

**1. Add imports at top:**
```tsx
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
```

**2. Replace the textarea section (lines ~265-268):**
```tsx
<label>
  本文（マークダウン — 右側にプレビュー表示されます）
  <div className="admin-editor-split">
    <textarea
      value={form.content}
      onChange={e => setForm(p => ({ ...p, content: e.target.value }))}
      className="admin-input admin-textarea admin-content-area"
      rows={15}
    />
    <div className="admin-preview-pane">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {form.content || '*プレビュー*'}
      </ReactMarkdown>
    </div>
  </div>
</label>
```

**3. Add CSS to `app/globals.css`:**
```css
.admin-editor-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.admin-editor-split textarea {
  min-height: 400px;
}
.admin-preview-pane {
  border: 1px solid #3b4a6b;
  border-radius: 8px;
  padding: 1rem;
  overflow-y: auto;
  max-height: 500px;
  background: #0d1b36;
  color: #e0e7f0;
  font-size: 14px;
  line-height: 1.7;
}
.admin-preview-pane h1,
.admin-preview-pane h2,
.admin-preview-pane h3 {
  color: #ffffff;
  margin: 0.5em 0;
}
.admin-preview-pane p {
  margin: 0.5em 0;
}
.admin-preview-pane img {
  max-width: 100%;
  border-radius: 6px;
}
.admin-preview-pane code {
  background: #1a2d4a;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 13px;
}
.admin-preview-pane a {
  color: #60a5fa;
}
```

This gives a side-by-side editor + live preview — no new dependencies needed.

---

## Steps to Go Live on empowerandlink.com

### Already Done
1. ✅ Code migrated (static export → Vercel-native)
2. ✅ All external links → relative paths
3. ✅ Admin page commits to `main` + auto-triggers rebuild
4. ✅ Blog data migrated from `blog` branch
5. ✅ Merge conflict markers resolved
6. ✅ `main` branch pushed with all changes

### You Still Need to Do
1. **Vercel project setup** (if not done):
   - Import repo from GitHub
   - Add env vars: `NEXT_PUBLIC_ADMIN_PASSWORD`, `NEXT_PUBLIC_GITHUB_TOKEN`, `NEXT_PUBLIC_VERCEL_DEPLOY_HOOK`
2. **Custom domain** (in Vercel → Settings → Domains):
   - Add `empowerandlink.com`
   - Follow Vercel's DNS instructions
3. **DNS change** (at your domain registrar):
   - Replace WordPress DNS records with Vercel's target
   - Wait for propagation (5-30 min)
4. **Test everything** on the live domain
5. (Optional) Install `@uiw/react-md-editor` or add live preview for the CEO
