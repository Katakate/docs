# Katakate documentation

Mintlify site for **Katakate** org projects: **K7** docs live under [`k7/`](./k7/), **K7d** under [`k7d/`](./k7d/). Configuration is at the repo root: [`docs.json`](./docs.json).

## Local preview

Mintlify does not ship a static “deploy to disk” flow in the usual sense; you run their **dev server** to preview the site locally.

**Prerequisites:** [Node.js](https://nodejs.org/) (includes `npm`).

From the **repository root** (this directory, where `docs.json` lives):

```bash
npm i -g mint
mint dev
```

Open the URL the CLI prints (usually `http://localhost:3000`). Edit `*.mdx`/`docs.json` and reload; changes hot-reload.

If the CLI is outdated or something looks broken:

```bash
mint update
```

There is nothing to “deploy” locally for production—**`mint dev` is only a preview**. When you are ready, connect the hosted Mintlify project to this repo and push the default branch.

## Publishing

Connect the [Mintlify GitHub app](https://dashboard.mintlify.com/settings/organization/github-app) so pushes to the default branch deploy the site.

## Layout

| Path | Contents |
|------|----------|
| `index.mdx` | Org landing |
| `k7/` | K7 (sandbox CLI, API, SDK) |
| `k7d/` | K7d (Rust VMM: VM & cluster fork, snapshot trees) |
