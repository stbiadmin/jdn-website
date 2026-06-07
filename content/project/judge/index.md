---
title: LLM-as-a-Judge Reliability and Validity
summary: The largest systematic evaluation of LLM-as-a-Judge to date - 21 judges, three benchmarks, ~541,000 judgments - exposing kappa deflation, rank instability, and a consistency-bias paradox in production-deployed judges.
tags:
- LLM Evaluation
- NLP
- Benchmarking
- Machine Learning
date: "2026-06-07T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption:
  focal_point: Smart

links:
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
slides: ""
---

LLM-as-a-Judge has become the dominant evaluation paradigm for language models, yet judge validation in practice relies on exact-match agreement - a metric that does not correct for chance and systematically overstates discriminative ability. This project presents the largest systematic evaluation of LLM-as-a-Judge to date:

- **21 judges** from nine providers
- Three benchmarks: **MT-Bench, JudgeBench, RewardBench**
- Three protocols: **agreement, consistency, bias audit**
- **118 runs** and approximately **541,000 individual judgments**

Four findings emerge, consistent across the full cohort and including the April 2026 frontier:

- **Kappa deflation is universal** - 33-41 percentage points between exact match and Cohen's kappa on MT-Bench
- **Judge rankings shift by up to 14 positions** across benchmarks
- **A consistency-bias paradox** - high test-retest reliability (>0.95) coexists with severe position bias (>0.10) in two production-deployed judges
- **Verbosity bias is small** (<0.011) across the cohort under a single pairwise rubric

We distill these into a **Minimum Viable Validation Protocol** for practitioners deploying LLM judges.

*Currently under review.*
