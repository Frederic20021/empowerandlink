# Next Step: Add empowerandlink.com Domain from xserver to Vercel

## What to Do

1. **In Vercel Dashboard** → Project → Settings → Domains → Add `empowerandlink.com`
2. **Vercel will show DNS target records** (e.g., `cname.vercel-dns.com` or IP addresses)
3. **On xserver**, update the DNS settings:
   - Remove existing records pointing to GitHub Pages / WordPress
   - Add the Vercel-provided DNS records
4. **Wait for DNS propagation** (5–30 min, sometimes up to 48h)
5. **Test** `empowerandlink.com` serves the Vercel app

## Notes
- The `empwerandlink.vercel.app` preview already works with all blog posts and admin editor
- WordPress iframe is no longer needed once the domain points to Vercel
- Admin page is at `/admin`
