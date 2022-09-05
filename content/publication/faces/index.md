---
title: "Assessing the feasibility of DNN-enabled photoforensic reidentification from downsampled images"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- admin
- Shruti Agarwal 
- Hany Farid


# Author notes (optional)
author_notes:
- "Equal contribution"
- "Equal contribution"
- ""

date: "2022-05-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["0"]

# Publication name and optional abbreviated publication name.
publication: 
publication_short: (In Progress)

abstract: Law enforcement agencies, corporations and non-Governmental organizations alike have begun to adopt Convolutional
Neural Network (CNN)-based approaches to confirming individual identities via facial recognition for a
variety of applications. However, the current state-of-the-art (SoTA) has been shown to be highly unreliable when
comparing images of inconsistent quality, as is typical in real-world applications. Though the demand for such
technology is strong, the current practical outcomes of its use, given these limitations, have also been quite harmful
for both the public and institutions involved. At worst, individuals are improperly implicated in crimes, financial
and identity fraud goes undetected and humanitarian aid is poorly distributed.

I propose a research project that improves upon the principles demonstrated in H.Farid et al. Forensic Reconstruction
of Severely Degraded License Plates in order to both properly assess, and also develop mitigations for,
many of the technical limitations present in the current state of forensic re-identification from digital images of
faces. The research progression will be to first assess the SoTA of photoforensic identification under real-world conditions.

From there, I will enumerate any technical limitations discovered. I will then build upon existing research
to suggest appropriate alternative technical approaches, such as CNN Fine-tuning. Finally, I will demonstrate the
efficacy, reliability and practical costs of these alternatives by developing and systematically testing an improved
end-to-end machine-learning-enabled forensic technique which seeks to confirm the identity of a person from at
least two separate images:one downsampled, distorted and noisy and the other a high-resolution control sample.

  I propose to improve upon previous approaches by - 

  1. Curating a large dataset consisting of both fully synthetic and augmented real-world images

  2. Randomly applying various degradations to the synthetic images for training, while also preserving the high-quality images for ground-truth

  3. Developing a neural network architecture which takes as an input a high quality image from a single source identity, identifies the most mathematically similar images in the dataset to that image, then compares a progressively degraded second image from the source identity to all of the n most similar images and outputs a yes/no answer to the question "which of these images contain the source identity?"

  4. Assessing the performance of this end-to-end system and the feasibility of reliable and ethical non-expert employment 


# Summary. An optional shortened abstract.
summary: 

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

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
  caption: 'Image credit: [**theverge.com**](https://cdn.vox-cdn.com/thumbor/K8ICW_XV6RI6EioRxKRiBBQPFek=/55x85:768x536/1200x800/filters:focal(336x236:464x364)/cdn.vox-cdn.com/uploads/chorus_image/image/66972412/face_depixelizer_obama.0.jpg)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: 
---


