# Blog Publishing Workflow

## Branches

| Branch | Purpose | Deploys to |
|--------|---------|------------|
| `main` | Source of truth for blog content. Admin page commits here. | `empowerandlink.vercel.app` |
| `wordpress` | Static export config. Used only for deployment. | GitHub Pages (`gh-pages` branch) |

## 1. Write or Edit a Post

**Via Vercel (recommended):**
- Go to **`empowerandlink.vercel.app/admin`**
- Login with the admin password
- Click **新規記事作成** or **編集** on an existing post
- Use the WYSIWYG editor (TipTap) — no Markdown knowledge needed
- Click **保存する**
- ✅ The `.md` file is committed to the `main` branch on GitHub

## 2. Deploy to GitHub Pages

Run these three commands:

```bash
git checkout wordpress
npm run deploy
git checkout main
```

Or as a one-liner:

```bash
git checkout wordpress && npm run deploy && git checkout main
```

### What `npm run deploy` does:
1. **`predeploy`** — fetches the latest `content/blog/` and `public/images/blog/` from `main` (deletes stale files), builds the static site, adds `.nojekyll`
2. **`deploy`** — pushes the `out/` folder to the `gh-pages` branch via `gh-pages -d out -t`

## 3. Wait

GitHub Pages cache takes **5–10 minutes** to update. After that, the WordPress iframe shows the updated content.

## Troubleshooting

| Problem | Cause | Fix |
|---------|-------|-----|
| Post saved but not showing | Deploy not run yet | Run `npm run deploy` |
| Old posts still visible | GitHub Actions overwrote manual deploy | Already fixed — workflow removed |
| Images not loading in preview (local dev) | File exists on GitHub but not locally | Run `git pull` then rebuild |
| Image upload fails | GitHub token expired | Generate new classic PAT in GitHub Settings → Developer settings |

## Notes

- **Never edit `content/blog/*.md` files locally** — always use the admin page on Vercel to keep the source of truth correct
- If you must edit locally, commit & push to `main` first, then deploy
- The `wordpress` branch should only be used for `npm run deploy` — don't work on it
- The GitHub Actions workflow was removed because it conflicted with manual deploys
