---
title: "Reliability without Validity: A Systematic, Large-Scale Evaluation of LLM-as-a-Judge Models Across Agreement, Consistency, and Bias"

# Authors
authors:
- admin
- Michael U. Rivera
- D. Alex Hughes

date: "2026-06-07T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2026-06-07T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: (Under Review)

abstract: "LLM-as-a-Judge has become the dominant evaluation paradigm for language models, yet judge validation in practice relies on exact-match agreement, a metric that does not correct for chance and systematically overstates discriminative ability. We present the largest systematic evaluation of LLM-as-a-Judge to date: 21 judges from nine providers across MT-Bench, JudgeBench, and RewardBench, evaluated under three protocols (agreement, consistency, bias audit) over 118 runs and approximately 541,000 individual judgments. Four findings emerge, consistent across the full cohort, including the April 2026 frontier: kappa deflation between exact match and Cohen's kappa is universal (33-41 pp on MT-Bench), judge rankings shift by up to 14 positions across benchmarks, high test-retest reliability (>0.95) coexists with severe position bias (>0.10) in two production-deployed judges, instantiating a consistency-bias paradox, and verbosity bias is small (<0.011) across our cohort under a single pairwise rubric. We distill these into a Minimum Viable Validation Protocol."

# Summary. An optional shortened abstract.
summary:

tags: []

# Display this page in the Featured widget?
featured: true

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
  caption: 'Kappa deflation and the consistency-bias paradox in LLM-as-a-Judge evaluation'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
projects:

# Slides (optional).
slides:
---
