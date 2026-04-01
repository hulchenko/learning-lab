# mitmproxy Setup (n12f-vod)

1. Start Next.js on port 3000:

```bash
pnpm dev
```

2. Start mitmproxy in reverse mode on port 8080 (UI on 8081):

```bash
mitmweb --mode reverse:http://127.0.0.1:3000 --listen-port 8080 --web-port 8081
```

3. Open the app through mitmproxy:

```text
http://127.0.0.1:8080
```

4. Open mitmproxy UI to inspect requests/responses:

```text
http://127.0.0.1:8081
```
