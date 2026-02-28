---
title: "Audio Deepfake Detection Using Temporal Coherence Analysis"

authors:
- admin
- "Sarah Barrington"

date: "2026-02-28T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2026-02-28T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: "Under Review"

abstract: The proliferation of AI-generated audio, so-called deepfake audio, poses significant threats to information integrity, from voice cloning fraud to synthetic music copyright disputes. We present a forensic approach to audio deepfake detection that analyzes temporal coherence anomalies in Contrastive Language-Audio Pretraining (CLAP) embeddings across a range of audio types; including speech, instrumental music, and music with vocals. By computing pairwise cosine similarities between audio segment embeddings and extracting statistical features from subsequently computed distributions, we train lightweight ensemble classifiers which are able to reliably distinguish authentic from synthetic audio. For speech deepfakes, this ensemble achieves F1 = 0.679 and AUC = 0.718 on completely unseen evaluation data, matching the performance of end-to-end neural approaches such as RawNet2, while utilizing computationally efficient, highly interpretable feature-based modeling. For music deepfakes, we achieve near-perfect in-distribution detection (F1 = 0.995) and introduce a domain-adaptive percentile classifier that retains this performance on out-of-distribution evaluation (SONICS/FMA), exceeding published cross-domain results. Our approach provides an interpretable, computationally expeditious alternative to common deep learning methods while still achieving competitive or state-of-the-art performance across speech and music domains.

# Summary. An optional shortened abstract.
summary:

tags: []

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Webpage
#   url: ''

url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Top discriminative features for single voice deepfake detection using MS-CLAP embeddings'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
projects:

# Slides (optional).
slides:
---
