---
title: Head Pose Correction for Facial Recognition
summary: Investigating whether AI-driven head-pose correction and image restoration can improve biometric facial recognition accuracy.
tags:
- Facial Recognition
- Computer Vision
- Deep Learning
date: "2025-12-02T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption:
  focal_point: Smart

links:
- icon: file-pdf
  icon_pack: fas
  name: Paper
  url: https://arxiv.org/abs/2512.03199
url_code: ""
url_pdf: "https://arxiv.org/pdf/2512.03199"
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---

Biometric facial recognition models often demonstrate significant decreases in accuracy when processing real-world images, often characterized by poor quality, non-frontal subject poses, and subject occlusions. We investigate whether targeted, AI-driven, head-pose correction and image restoration can improve recognition accuracy.

Using a model-agnostic, large-scale, forensic-evaluation pipeline, we assess the impact of three restoration approaches:

- **3D reconstruction** (NextFace)
- **2D frontalization** (CFR-GAN)
- **Feature enhancement** (CodeFormer)

We find that naive application of these techniques substantially degrades facial recognition accuracy. However, we also find that selective application of CFR-GAN combined with CodeFormer yields meaningful improvements.

Our findings have important implications for the forensic use of facial recognition systems, demonstrating that context-aware decisions about when and how to intervene on images are crucial for improving recognition performance.
