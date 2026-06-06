---
title: "When 95% Accuracy Isn't Good Enough: Bridging the Gap Between Forensic Biometric Facial Recognition Benchmarks and Real-World Human Impact"

# Authors
authors:
- admin

date: "2026-06-04T00:00:00Z"
doi: ""


# Schedule page publish date (NOT publication's date).
publishDate: "2026-06-05T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Humans of Generative AI Workshop"
publication_short: (CVPRW HuG 2026)

abstract: "Biometric facial recognition systems are increasingly deployed in high-stakes forensic contexts, yet their reported accuracies, often exceeding 95%, are derived from evaluations conducted under favorable laboratory conditions that fail to represent the complexity of real-world use cases. This disconnect between lab performance and reality has serious consequences for civil liberties, as institutions and the public increasingly place confidence in systems whose capabilities in applied settings remain poorly characterized. I present a body of work that addresses this gap. First, I introduce a publicly available, model-agnostic forensic evaluation framework modeled on eyewitness identification procedures, in which probe images are matched against perceptually similar decoys rather than easily distinguishable alternatives. Evaluating leading architectures (FaceNet, ArcFace) across more than 200,000 images under controlled forensic conditions, I find that previously reported accuracies drop by 10-30 percentage points relative to standard benchmarks. Second, I investigate how generative AI interacts with forensic biometric systems at multiple points in the recognition pipeline. I evaluate whether neural super-resolution, deblurring, and head pose correction can improve recognition of degraded forensic images, and find that generative models frequently hallucinate facial features, producing visually convincing but identity-altered outputs that degrade rather than improve recognition. I additionally examine the growing use of synthetic face datasets in FRT model training and evaluation, identifying the risks of diversity washing, in which statistical diversity in generated faces creates false confidence in system fairness, and consent circumvention, in which synthetic data decouples biometric information from the individuals it represents, complicating regulatory enforcement. Drawing on these findings, I propose a governance framework for responsible biometric deployment that addresses institutional oversight, deployment-readiness criteria, safeguards for ethical implementation, and investment in the multidisciplinary expertise required to navigate these technical, legal, and ethical challenges."

# Summary. An optional shortened abstract.
summary: Lightning talk and poster at the CVPR 2026 Humans of Generative AI workshop, synthesizing a body of work on the gap between reported facial recognition accuracy and real-world forensic performance.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
- name: Workshop
  url: 'https://humansofgenerativeai.github.io/'

url_pdf: '/uploads/Norman_CVPR_HuG_Poster.pdf'
url_code: ''
url_dataset: ''
url_poster: '/uploads/Norman_CVPR_HuG_Poster.pdf'
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
projects:

# Slides (optional).
slides:
---
