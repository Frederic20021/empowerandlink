/**
 * OAuth proxy for Decap CMS — deploy to Cloudflare Workers.
 *
 * 1. Create a GitHub OAuth App: https://github.com/settings/developers
 *    - Homepage URL:  https://<your-username>.github.io/empowerandlink
 *    - Callback URL:  https://<your-worker>.<subdomain>.workers.dev/api/cb
 *
 * 2. Set these environment variables in your Cloudflare Worker:
 *    - GITHUB_CLIENT_ID     (from your OAuth App)
 *    - GITHUB_CLIENT_SECRET (from your OAuth App)
 *
 * 3. Update base_url in public/admin/config.yml to point to this worker
 */

const GITHUB_OAUTH = 'https://github.com/login/oauth';

export default {
  async fetch(request, env) {
    const CLIENT_ID = env.GITHUB_CLIENT_ID;
    const CLIENT_SECRET = env.GITHUB_CLIENT_SECRET;
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/api/auth') {
      const redirectUri = new URL('/api/cb', url.origin).toString();
      const authUrl = `${GITHUB_OAUTH}/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo,user`;
      return Response.redirect(authUrl, 302);
    }

    if (path === '/api/cb') {
      const code = url.searchParams.get('code');
      if (!code) {
        return new Response('Missing code parameter', { status: 400 });
      }

      const tokenRes = await fetch(`${GITHUB_OAUTH}/access_token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code,
        }),
      });

      const data = await tokenRes.json();

      if (data.error) {
        return new Response(`GitHub OAuth error: ${data.error_description || data.error}`, { status: 400 });
      }

      const script = `
        <html><body><script>
          (function() {
            const authResult = ${JSON.stringify(data)};
            if (window.opener) {
              window.opener.postMessage('authorization:${data.access_token}:${Object.keys(data)}', '*');
              window.close();
            }
          })();
        </script></body></html>
      `;

      return new Response(script, {
        headers: { 'Content-Type': 'text/html;charset=UTF-8' },
      });
    }

    return new Response('Not found', { status: 404 });
  },
};
