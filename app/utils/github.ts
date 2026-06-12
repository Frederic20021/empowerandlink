const OWNER = 'frederic20021';
const REPO = 'empowerandlink';
const BRANCH = 'main';
const BLOG_DIR = 'content/blog';
const IMAGES_DIR = 'public/images/blog';

function getToken(): string {
  return process.env.NEXT_PUBLIC_GITHUB_TOKEN || '';
}

function btoaUTF8(str: string): string {
  return btoa(Array.from(new TextEncoder().encode(str), b => String.fromCharCode(b)).join(''));
}

function atobUTF8(base64: string): string {
  return new TextDecoder().decode(new Uint8Array(Array.from(atob(base64.replace(/\n/g, '')), c => c.charCodeAt(0))));
}

function headers() {
  return {
    Authorization: `Bearer ${getToken()}`,
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  };
}

export type GitHubFile = {
  name: string;
  path: string;
  sha: string;
  download_url: string | null;
};

export type GitHubContent = {
  content: string;
  sha: string;
};

export async function listPosts(): Promise<GitHubFile[]> {
  const res = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${BLOG_DIR}?ref=${BRANCH}`,
    { headers: headers() }
  );
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data.filter((f: { name: string }) => f.name.endsWith('.md')) : [];
}

export async function getPostContent(path: string): Promise<GitHubContent | null> {
  const res = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}?ref=${BRANCH}`,
    { headers: headers() }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return {
    content: atobUTF8(data.content),
    sha: data.sha,
  };
}

export async function commitFile(
  path: string,
  content: string,
  message: string,
  sha?: string,
  alreadyEncoded?: boolean
): Promise<boolean> {
  const body: Record<string, unknown> = {
    message,
    content: alreadyEncoded ? content : btoaUTF8(content),
    branch: BRANCH,
  };
  if (sha) body.sha = sha;

  const res = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`,
    {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify(body),
    }
  );
  return res.ok;
}

export async function deleteFile(path: string, sha: string): Promise<boolean> {
  const res = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`,
    {
      method: 'DELETE',
      headers: headers(),
      body: JSON.stringify({ message: `Delete ${path}`, sha, branch: BRANCH }),
    }
  );
  return res.ok;
}

export async function uploadImage(
  filename: string,
  base64Content: string
): Promise<string | null> {
  const path = `${IMAGES_DIR}/${filename}`;
  const ok = await commitFile(path, base64Content, `Upload image ${filename}`, undefined, true);
  if (!ok) return null;
  return `/images/blog/${filename}`;
}

export function getSlug(path: string): string {
  return path.replace(/\.md$/, '').split('/').pop() || '';
}
