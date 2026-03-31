# justintime.ai

Personal academic and professional website for Justin D. Norman — PhD Candidate at UC Berkeley, ML/AI engineering leader.

**Live site:** [https://justintime.ai](https://justintime.ai)

## Stack

- [Hugo](https://gohugo.io/) 0.110.0 with [Wowchemy Academic](https://wowchemy.com/) v5
- Deployed via [Netlify](https://www.netlify.com/) (auto-deploy on push to `master`)
- Blog hosted on [Ghost](https://ghost.org/) at [blog.justintime.ai](https://blog.justintime.ai)

## Local Development

```bash
hugo server --disableFastRender
```

## Structure

```
config/_default/     Site configuration (config.yaml, params.yaml, menus.yaml)
content/
  ├── home/          Homepage widget sections
  ├── publication/   Research papers
  ├── project/       Project portfolio
  ├── post/          Blog posts (published via Ghost)
  ├── authors/admin/ Author profile
  └── event/         Talks/events
assets/media/        Images, logos, icons
static/uploads/      Resume, static files
```

## Research

- Computer Vision and Deepfake Detection
- Facial Recognition Evaluation
- LLM Hallucination Benchmarking
- ML Systems Design
