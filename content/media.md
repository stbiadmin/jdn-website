---
title: Media
date: "2026-07-09T00:00:00Z"
share: false
commentable: false
editable: false

header:
  caption: ""
  image: ""
---

<style>
/* Constrain the theme's article container to a wide (but centered) max-width
   so the page title aligns with our content instead of hugging the left edge. */
body.media-full-width .universal-wrapper,
body.media-full-width .article-container,
body.media-full-width main .container,
body.media-full-width main > article,
body.media-full-width main article {
  max-width: 1400px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  overflow: visible !important;
}
body.media-full-width .col-12,
body.media-full-width .col-lg-8,
body.media-full-width .col-md-8,
body.media-full-width .col-lg-9,
body.media-full-width .col-md-9,
body.media-full-width .col-lg-10,
body.media-full-width .col-md-10 {
  max-width: 100% !important;
  width: 100% !important;
  flex: 0 0 100% !important;
  overflow: visible !important;
}

.media-page {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(0.5rem, 2vw, 1.5rem);
  box-sizing: border-box;
}
.media-intro {
  max-width: none;
  margin: 0 auto 2.5rem;
  padding: 0 1rem;
  font-size: 1rem;
  line-height: 1.55;
  color: #555;
  text-align: center;
  white-space: nowrap;
  overflow-x: auto;
  scrollbar-width: none;
}
.media-intro::-webkit-scrollbar { display: none; }
@media (max-width: 900px) {
  .media-intro { white-space: normal; }
}
.media-h2 {
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #888;
  margin: 2.5rem 0 1.25rem;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 0.6rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.media-h2-hint {
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  color: #aaa;
  font-weight: 400;
  text-transform: none;
  font-style: italic;
}

/* -------- CAROUSEL -------- */
.media-featured-carousel {
  position: relative;
  overflow: hidden;
  padding: 0.75rem 0;
  margin: 0 0 2rem;
  -webkit-mask-image: linear-gradient(to right, transparent 0, #000 4%, #000 96%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0, #000 4%, #000 96%, transparent 100%);
}
.media-featured-track {
  display: flex;
  gap: 1.5rem;
  width: max-content;
  padding: 0 1rem;
  will-change: transform;
}

/* Arrows */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255,255,255,0.92);
  border: 1px solid rgba(0,0,0,0.08);
  box-shadow: 0 3px 10px rgba(0,0,0,0.12);
  cursor: pointer;
  font-size: 1.35rem;
  line-height: 1;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: background 0.15s, box-shadow 0.15s, transform 0.15s;
  font-family: inherit;
}
.carousel-arrow-left { left: 0.65rem; }
.carousel-arrow-right { right: 0.65rem; }
.carousel-arrow:hover {
  background: #fff;
  box-shadow: 0 6px 18px rgba(0,0,0,0.18);
  transform: translateY(-50%) scale(1.08);
  color: #2d7a4d;
}
.carousel-arrow:active {
  transform: translateY(-50%) scale(0.98);
}
.carousel-arrow svg { width: 20px; height: 20px; }
@media (prefers-reduced-motion: reduce) {
  .media-featured-carousel { overflow-x: auto; -webkit-mask-image: none; mask-image: none; }
  .media-featured-track { transform: none !important; }
}

/* Cards */
.media-featured-card {
  flex: 0 0 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  text-decoration: none !important;
  color: inherit !important;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  border: 1px solid rgba(0,0,0,0.05);
}
.media-featured-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.14);
  color: inherit !important;
}
.media-featured-thumb {
  position: relative;
  aspect-ratio: 16/9;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 1.4rem;
  text-align: center;
}
.tile-inner { line-height: 1.15; }

/* Small brand badge in the top-right of each featured tile */
.tile-corner-logo {
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  z-index: 2;
  background: rgba(255,255,255,0.96);
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  padding: 5px 9px;
  height: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
}
.tile-corner-logo img {
  height: 100%;
  width: auto;
  display: block;
  max-width: 90px;
}

/* Outlet tiles */
.outlet-oreilly { background: #d84924; }
.oreilly-mark { font-family: Georgia, 'Times New Roman', serif; font-weight: 700; font-size: 1.7rem; letter-spacing: 0.01em; color: #fff; }
.oreilly-mark sup { font-size: 0.55rem; margin-left: 0.1rem; }
.oreilly-sub { font-size: 0.68rem; letter-spacing: 0.22em; text-transform: uppercase; margin-top: 0.55rem; opacity: 0.9; color: #fff; }
.outlet-cnn { background: #000; }
.cnn-mark { width: 100px; height: auto; display: block; margin: 0 auto 0.5rem; }
.cnn-sub { font-family: 'Helvetica Neue', Arial, sans-serif; font-weight: 300; font-size: 1.05rem; letter-spacing: 0.02em; color: #fff; }
.outlet-vb { background: #131313; }
.vb-mark { font-family: 'Helvetica Neue', Arial, sans-serif; font-weight: 800; font-size: 1.5rem; letter-spacing: -0.02em; color: #fff; }
.vb-mark span { color: #ff5233; }
.vb-sub { font-size: 0.68rem; letter-spacing: 0.22em; text-transform: uppercase; margin-top: 0.55rem; opacity: 0.85; color: #fff; }

.media-featured-body { padding: 1.15rem 1.3rem 1.4rem; }
.media-featured-kicker { font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase; color: #999; margin-bottom: 0.5rem; }
.media-featured-body h3 { font-size: 1.02rem; line-height: 1.35; margin: 0 0 0.5rem 0; color: #222; font-weight: 600; }
.media-featured-body p { font-size: 0.88rem; line-height: 1.55; color: #666; margin: 0; }

/* -------- TABS -------- */
.media-tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  border-bottom: 1px solid #e5e5e5;
  margin: 3rem 0 1.75rem;
  padding: 0;
  flex-wrap: wrap;
  row-gap: 0.4rem;
}
.media-tab-btn {
  background: none;
  border: none;
  padding: 0.7rem 1.1rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: #777;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  white-space: nowrap;
  transition: color 0.15s, border-color 0.15s;
  font-family: inherit;
  letter-spacing: 0.02em;
}
.media-tab-btn:hover { color: #222; }
.media-tab-btn.active { color: #2d7a4d; border-bottom-color: #2d7a4d; font-weight: 600; }
.tab-sep {
  display: inline-block;
  width: 3px;
  height: 3px;
  background: #ccc;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: -1px;
  align-self: center;
}

.media-archive-note {
  font-size: 0.78rem;
  color: #888;
  margin: 0 0 1.2rem;
  font-style: italic;
}
.media-archive-note::before {
  content: "↓ ";
  color: #2d7a4d;
  font-style: normal;
  font-weight: 600;
  margin-right: 0.15rem;
}

.media-section { display: none; margin-bottom: 2rem; }
.media-section.active { display: block; }
.media-section-title { font-size: 0.72rem; letter-spacing: 0.16em; text-transform: uppercase; color: #999; margin: 1.4rem 0 0.9rem; font-weight: 600; }
.media-section:first-of-type .media-section-title { margin-top: 0.5rem; }

.media-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; }
.media-item {
  flex: 1 1 310px;
  max-width: 400px;
  padding: 1rem 1.2rem;
  background: #fafafa;
  border-left: 3px solid #2d7a4d;
  border-radius: 4px;
  text-decoration: none !important;
  color: inherit !important;
  display: block;
  transition: background 0.15s, border-color 0.15s, transform 0.15s;
  box-sizing: border-box;
}
.media-item:hover { background: rgba(45,122,77,0.06); border-left-color: #1a5c3d; color: inherit !important; transform: translateX(2px); }
.media-item-kicker { font-size: 0.66rem; letter-spacing: 0.14em; text-transform: uppercase; color: #888; margin-bottom: 0.35rem; }
.media-item h4 { font-size: 0.98rem; line-height: 1.35; margin: 0 0 0.35rem 0; font-weight: 600; color: #222; }
.media-item p { font-size: 0.85rem; line-height: 1.5; color: #666; margin: 0; }
.media-item { position: relative; }
.media-item-logo {
  position: absolute;
  top: 0.85rem;
  right: 0.95rem;
  height: 18px;
  width: auto;
  max-width: 90px;
  opacity: 0.62;
  transition: opacity 0.15s;
  pointer-events: none;
}
.media-item:hover .media-item-logo { opacity: 1; }
.media-item.has-logo { padding-right: 110px; }
@media (max-width: 640px) {
  .media-item { max-width: none; }
  .carousel-arrow { width: 36px; height: 36px; }
}
</style>

<div class="media-page">

<div class="media-intro">
A selection of interviews, talks, essays, and press covering over a decade of my work in ML and AI.
</div>

<div class="media-h2"><span>Featured</span><span class="media-h2-hint">Hover to pause · arrows to steer · click to open</span></div>

<div class="media-featured-carousel" aria-label="Featured media carousel">

<button class="carousel-arrow carousel-arrow-left" aria-label="Scroll left" type="button">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
</button>

<div class="media-featured-track">

<a class="media-featured-card" href="https://www.oreilly.com/radar/podcast/generative-ai-in-the-real-world-competing-in-a-generative-world-with-justin-norman/" target="_blank" rel="noopener">
  <div class="media-featured-thumb outlet-oreilly">
    <div class="tile-inner">
      <div class="oreilly-mark">O'REILLY<sup>®</sup></div>
      <div class="oreilly-sub">Radar Podcast</div>
    </div>
  </div>
  <div class="media-featured-body">
    <div class="media-featured-kicker">Podcast · 2024</div>
    <h3>Competing in a Generative World</h3>
    <p>Long-form conversation with Ben Lorica on how PM, evaluation, and moats have shifted since generative AI became the substrate.</p>
  </div>
</a>

<a class="media-featured-card" href="https://youtu.be/-sB12gk9ESA?t=2320" target="_blank" rel="noopener">
  <div class="media-featured-thumb" style="background-image: url('/media-thumbnails/pbs-nova.jpg');"></div>
  <div class="media-featured-body">
    <div class="media-featured-kicker">PBS NOVA · 2024</div>
    <h3>A.I. Revolution</h3>
    <p>Featured on the PBS NOVA prime-time science documentary on AI, alongside Hany Farid, on detecting and defending against deepfakes.</p>
  </div>
</a>

<a class="media-featured-card" href="https://twitter.com/jchatterleyCNN/status/1288195360951803907" target="_blank" rel="noopener">
  <div class="media-featured-thumb outlet-cnn">
    <div class="tile-inner">
      <img src="/media-thumbnails/cnn.svg" alt="CNN" class="cnn-mark">
      <div class="cnn-sub">First Move with Julia Chatterley</div>
    </div>
  </div>
  <div class="media-featured-body">
    <div class="media-featured-kicker">Live TV · 2020</div>
    <h3>Yelp economic data on CNN's global markets show</h3>
    <p>Live interview on Yelp's business-closure and reopening data during the pandemic, as part of CNN International's live markets coverage.</p>
  </div>
</a>

<a class="media-featured-card" href="https://twimlai.com/twiml-talk-185-federated-ml-for-edge-applications-with-justin-norman/" target="_blank" rel="noopener">
  <div class="media-featured-thumb" style="background-image: url('/media-thumbnails/twiml.jpg');"></div>
  <div class="media-featured-body">
    <div class="media-featured-kicker">TWIML AI Podcast · 2018</div>
    <h3>Federated ML for Edge Applications</h3>
    <p>Early practical framing of federated learning at Cloudera Fast Forward Labs — a technique that has since become mainstream.</p>
  </div>
</a>

<a class="media-featured-card" href="https://venturebeat.com/transform-2020-video-hub/#/channel/technology-and-automation/ifme4v3rozcu2rtshfxgon3gmrxem6bx" target="_blank" rel="noopener">
  <div class="media-featured-thumb outlet-vb">
    <div class="tile-inner">
      <div class="vb-mark">Venture<span>Beat</span></div>
      <div class="vb-sub">Transform 2020</div>
    </div>
  </div>
  <div class="media-featured-body">
    <div class="media-featured-kicker">Keynote · 2020</div>
    <h3>Rewards and challenges of building and scaling a custom AI system</h3>
    <p>Keynote on running an in-house ML platform at scale, drawn from Yelp's Bunsen experimentation stack.</p>
  </div>
</a>

<!-- Duplicated for seamless infinite scroll -->

<a class="media-featured-card" href="https://www.oreilly.com/radar/podcast/generative-ai-in-the-real-world-competing-in-a-generative-world-with-justin-norman/" target="_blank" rel="noopener" aria-hidden="true" tabindex="-1">
  <div class="media-featured-thumb outlet-oreilly">
    <div class="tile-inner">
      <div class="oreilly-mark">O'REILLY<sup>®</sup></div>
      <div class="oreilly-sub">Radar Podcast</div>
    </div>
  </div>
  <div class="media-featured-body">
    <div class="media-featured-kicker">Podcast · 2024</div>
    <h3>Competing in a Generative World</h3>
    <p>Long-form conversation with Ben Lorica on how PM, evaluation, and moats have shifted since generative AI became the substrate.</p>
  </div>
</a>

<a class="media-featured-card" href="https://youtu.be/-sB12gk9ESA?t=2320" target="_blank" rel="noopener" aria-hidden="true" tabindex="-1">
  <div class="media-featured-thumb" style="background-image: url('/media-thumbnails/pbs-nova.jpg');"></div>
  <div class="media-featured-body">
    <div class="media-featured-kicker">PBS NOVA · 2024</div>
    <h3>A.I. Revolution</h3>
    <p>Featured on the PBS NOVA prime-time science documentary on AI, alongside Hany Farid, on detecting and defending against deepfakes.</p>
  </div>
</a>

<a class="media-featured-card" href="https://twitter.com/jchatterleyCNN/status/1288195360951803907" target="_blank" rel="noopener" aria-hidden="true" tabindex="-1">
  <div class="media-featured-thumb outlet-cnn">
    <div class="tile-inner">
      <img src="/media-thumbnails/cnn.svg" alt="CNN" class="cnn-mark">
      <div class="cnn-sub">First Move with Julia Chatterley</div>
    </div>
  </div>
  <div class="media-featured-body">
    <div class="media-featured-kicker">Live TV · 2020</div>
    <h3>Yelp economic data on CNN's global markets show</h3>
    <p>Live interview on Yelp's business-closure and reopening data during the pandemic, as part of CNN International's live markets coverage.</p>
  </div>
</a>

<a class="media-featured-card" href="https://twimlai.com/twiml-talk-185-federated-ml-for-edge-applications-with-justin-norman/" target="_blank" rel="noopener" aria-hidden="true" tabindex="-1">
  <div class="media-featured-thumb" style="background-image: url('/media-thumbnails/twiml.jpg');"></div>
  <div class="media-featured-body">
    <div class="media-featured-kicker">TWIML AI Podcast · 2018</div>
    <h3>Federated ML for Edge Applications</h3>
    <p>Early practical framing of federated learning at Cloudera Fast Forward Labs — a technique that has since become mainstream.</p>
  </div>
</a>

<a class="media-featured-card" href="https://venturebeat.com/transform-2020-video-hub/#/channel/technology-and-automation/ifme4v3rozcu2rtshfxgon3gmrxem6bx" target="_blank" rel="noopener" aria-hidden="true" tabindex="-1">
  <div class="media-featured-thumb outlet-vb">
    <div class="tile-inner">
      <div class="vb-mark">Venture<span>Beat</span></div>
      <div class="vb-sub">Transform 2020</div>
    </div>
  </div>
  <div class="media-featured-body">
    <div class="media-featured-kicker">Keynote · 2020</div>
    <h3>Rewards and challenges of building and scaling a custom AI system</h3>
    <p>Keynote on running an in-house ML platform at scale, drawn from Yelp's Bunsen experimentation stack.</p>
  </div>
</a>

</div>

<button class="carousel-arrow carousel-arrow-right" aria-label="Scroll right" type="button">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
</button>

</div>

<div class="media-tabs">
  <button class="media-tab-btn" data-tab="all">All</button>
  <span class="tab-sep"></span>
  <button class="media-tab-btn" data-tab="podcasts">Podcasts &amp; Conversations</button>
  <span class="tab-sep"></span>
  <button class="media-tab-btn" data-tab="talks">Talks &amp; Lectures</button>
  <span class="tab-sep"></span>
  <button class="media-tab-btn active" data-tab="press">Press &amp; Commentary</button>
  <span class="tab-sep"></span>
  <button class="media-tab-btn" data-tab="writing">Writing</button>
</div>

<p class="media-archive-note">Click any item to open in a new tab.</p>

<div class="media-section" data-section="podcasts">
<div class="media-section-title">Podcasts &amp; Conversations</div>
<div class="media-grid">

<a class="media-item" href="https://www.oreilly.com/radar/podcast/generative-ai-in-the-real-world-competing-in-a-generative-world-with-justin-norman/" target="_blank" rel="noopener">
  <div class="media-item-kicker">O'Reilly Radar · 2024</div>
  <h4>Generative AI in the Real World: Competing in a Generative World</h4>
  <p>With Ben Lorica on how the moats and workflows around AI products have shifted.</p>
</a>

<a class="media-item" href="https://twimlai.com/twiml-talk-185-federated-ml-for-edge-applications-with-justin-norman/" target="_blank" rel="noopener">
  <div class="media-item-kicker">TWIML AI Podcast · 2018</div>
  <h4>Federated ML for Edge Applications</h4>
  <p>With Sam Charrington on federated learning at Cloudera Fast Forward Labs.</p>
</a>

<a class="media-item" href="https://designingforanalytics.com/resources/episodes/047-how-yelp-integrates-data-science-engineering-ux-and-product-management-when-creating-ai-products-with-yelps-justin-norman/" target="_blank" rel="noopener">
  <div class="media-item-kicker">Experiencing Data · 2020</div>
  <h4>How Yelp Integrates DS, Engineering, UX, and PM to Ship AI Products</h4>
  <p>With Brian T. O'Neill on cross-functional AI product delivery.</p>
</a>

<a class="media-item" href="https://builders.intel.com/ai/social-hub/podcast/cloudera-data-science-workbench-machine-learning" target="_blank" rel="noopener">
  <div class="media-item-kicker">Intel Builders</div>
  <h4>Cloudera Data Science Workbench and ML Services</h4>
  <p>On the tooling gaps that hold enterprise ML back.</p>
</a>

<a class="media-item" href="https://www.youtube.com/watch?v=R3sltl5fQKU" target="_blank" rel="noopener">
  <div class="media-item-kicker">Real Good AI</div>
  <h4>Interview with Dr. Justin Norman</h4>
  <p>Career arc across defense, big tech, research, and startups.</p>
</a>

</div>
</div>

<div class="media-section" data-section="talks">
<div class="media-section-title">Talks &amp; Lectures</div>
<div class="media-grid">

<a class="media-item" href="https://www.ischool.berkeley.edu/events/2025/computational-forensics-age-ai" target="_blank" rel="noopener">
  <div class="media-item-kicker">UC Berkeley School of Information · 2025</div>
  <h4>Computational Forensics in the Age of AI</h4>
  <p>Doctoral research lecture on forensic ML and generative-AI risk.</p>
</a>

<a class="media-item" href="https://www.youtube.com/watch?v=qQZj9EI3HDU" target="_blank" rel="noopener">
  <div class="media-item-kicker">UC Berkeley PhD Reception</div>
  <h4>Evaluating Deep Facial Recognition Technologies</h4>
  <p>Overview of forensic evaluation methodology for facial recognition systems.</p>
</a>

<a class="media-item" href="https://venturebeat.com/transform-2020-video-hub/#/channel/technology-and-automation/ifme4v3rozcu2rtshfxgon3gmrxem6bx" target="_blank" rel="noopener">
  <div class="media-item-kicker">VentureBeat Transform · 2020</div>
  <h4>Building and Scaling a Custom AI System</h4>
  <p>Rewards, challenges, and org-design lessons from running Yelp's ML platform.</p>
</a>

<a class="media-item" href="https://www.youtube.com/watch?v=xEG8u62TB2Q" target="_blank" rel="noopener">
  <div class="media-item-kicker">DataWorks Summit</div>
  <h4>Machine Learning Model Deployment: Strategy to Implementation</h4>
  <p>Practical roadmap for shipping models to production.</p>
</a>

<a class="media-item" href="https://vimeo.com/387450359" target="_blank" rel="noopener">
  <div class="media-item-kicker">Products That Count</div>
  <h4>Product Management for Data Science</h4>
  <p>On the DS-PM interface at Yelp.</p>
</a>

<a class="media-item" href="https://ieondemand.com/presentations/navigating-the-road-to-production" target="_blank" rel="noopener">
  <div class="media-item-kicker">Innovation Enterprise</div>
  <h4>Navigating the Road to Production</h4>
  <p>Deployment, monitoring, and the maintenance load of production ML.</p>
</a>

</div>
</div>

<div class="media-section active" data-section="press">
<div class="media-section-title">Press &amp; Commentary</div>
<div class="media-grid">

<a class="media-item has-logo" href="https://ccst.us/ccst-launches-california-ai-science-residency/" target="_blank" rel="noopener">
  <img class="media-item-logo" src="/media-thumbnails/logo-ccst.svg" alt="">
  <div class="media-item-kicker">CCST · 2025</div>
  <h4>California AI Science Residency Program on Frontier AI Safety</h4>
  <p>Appointment as an inaugural AI Science Advisor to CalOES and CDT.</p>
</a>

<a class="media-item has-logo" href="https://vcresearch.berkeley.edu/news/hany-farid-and-i-school-phd-students-featured-pbs-nova" target="_blank" rel="noopener">
  <img class="media-item-logo" src="/media-thumbnails/logo-pbs-nova.svg" alt="">
  <div class="media-item-kicker">PBS NOVA · 2024</div>
  <h4>Berkeley featured on PBS NOVA's A.I. Revolution</h4>
  <p>Deepfake detection research with Hany Farid on PBS's flagship science documentary.</p>
</a>

<a class="media-item has-logo" href="https://techcrunch.com/2023/08/30/betaworks-goes-all-in-on-augmentative-ai-in-latest-camp-cohort-were-rabidly-interested/" target="_blank" rel="noopener">
  <img class="media-item-logo" src="/media-thumbnails/logo-techcrunch.svg" alt="">
  <div class="media-item-kicker">TechCrunch · 2023</div>
  <h4>Betaworks goes all in on augmentative AI in latest Camp cohort</h4>
  <p>Coverage of the Vera AI cohort.</p>
</a>

<a class="media-item has-logo" href="https://www.bloomberg.com/news/articles/2021-01-26/u-s-restaurant-openings-picked-up-pace-in-fourth-quarter-2020" target="_blank" rel="noopener">
  <img class="media-item-logo" src="/media-thumbnails/logo-bloomberg.svg" alt="">
  <div class="media-item-kicker">Bloomberg · 2021</div>
  <h4>U.S. Restaurant Openings Quicken, Hinting at Rebound</h4>
  <p>Yelp reopening trends as an early recovery signal.</p>
</a>

<a class="media-item has-logo" href="https://venturebeat.com/2020/07/18/ai-needs-systemic-solutions-to-systemic-bias-injustice-and-inequality/" target="_blank" rel="noopener">
  <img class="media-item-logo" src="/media-thumbnails/logo-venturebeat.svg" alt="">
  <div class="media-item-kicker">VentureBeat · 2020</div>
  <h4>AI needs systemic solutions to systemic bias, injustice, and inequality</h4>
  <p>Op-ed on structural fixes vs. patchwork mitigations in AI systems.</p>
</a>

<a class="media-item has-logo" href="https://www.cnbc.com/2020/09/16/yelp-data-shows-60percent-of-business-closures-due-to-the-coronavirus-pandemic-are-now-permanent.html" target="_blank" rel="noopener">
  <img class="media-item-logo" src="/media-thumbnails/logo-cnbc.svg" alt="">
  <div class="media-item-kicker">CNBC · 2020</div>
  <h4>60% of pandemic business closures are now permanent</h4>
  <p>Coverage of Yelp economic recovery data.</p>
</a>

<a class="media-item has-logo" href="https://www.nytimes.com/2020/07/13/business/small-businesses-coronavirus.html" target="_blank" rel="noopener">
  <img class="media-item-logo" src="/media-thumbnails/logo-nyt.svg" alt="">
  <div class="media-item-kicker">The New York Times · 2020</div>
  <h4>Small businesses in the pandemic</h4>
  <p>Quoted analysis of Yelp closure trends.</p>
</a>

<a class="media-item has-logo" href="https://www.wsj.com/articles/140-000-businesses-listed-on-yelp-are-still-closed-because-of-covid-19-pandemic-11593057601" target="_blank" rel="noopener">
  <img class="media-item-logo" src="/media-thumbnails/logo-wsj.svg" alt="">
  <div class="media-item-kicker">The Wall Street Journal · 2020</div>
  <h4>140,000 businesses listed on Yelp still closed because of COVID-19</h4>
  <p>Yelp closure data as a leading indicator for the small-business economy.</p>
</a>

<a class="media-item has-logo" href="https://www.marketplace.org/2020/09/15/pandemic-recovery-for-restaurants-slowing-down/" target="_blank" rel="noopener">
  <img class="media-item-logo" src="/media-thumbnails/logo-marketplace.svg" alt="">
  <div class="media-item-kicker">Marketplace · 2020</div>
  <h4>Pandemic recovery for restaurants is slowing down</h4>
  <p>National radio segment on Yelp-observed recovery trajectories.</p>
</a>

</div>
</div>

<div class="media-section" data-section="writing">
<div class="media-section-title">Writing</div>
<div class="media-grid">

<a class="media-item" href="https://www.oreilly.com/radar/bringing-an-ai-product-to-market/" target="_blank" rel="noopener">
  <div class="media-item-kicker">O'Reilly Radar</div>
  <h4>Bringing an AI Product to Market</h4>
  <p>What the "last mile" of shipping an AI product actually involves.</p>
</a>

<a class="media-item" href="https://www.oreilly.com/radar/practical-skills-for-the-ai-product-manager/" target="_blank" rel="noopener">
  <div class="media-item-kicker">O'Reilly Radar</div>
  <h4>Practical Skills for the AI Product Manager</h4>
  <p>The AI PM role as it exists in practice, not as it's described.</p>
</a>

<a class="media-item" href="https://www.oreilly.com/radar/ai-product-management-after-deployment/" target="_blank" rel="noopener">
  <div class="media-item-kicker">O'Reilly Radar</div>
  <h4>AI Product Management After Deployment</h4>
  <p>Ongoing monitoring, retraining, and the maintenance load of production ML.</p>
</a>

<a class="media-item" href="https://blog.fastforwardlabs.com/2019/05/29/rise-of-the-low-code-ml-toolboxes.html" target="_blank" rel="noopener">
  <div class="media-item-kicker">Cloudera Fast Forward Labs · 2019</div>
  <h4>Rise of the Low-Code ML Toolboxes</h4>
  <p>Snapshot of the tooling shift toward higher-level abstractions in ML.</p>
</a>

<a class="media-item" href="https://blog.fastforwardlabs.com/2018/09/28/the-true-competitive-advantage-in-ml.html" target="_blank" rel="noopener">
  <div class="media-item-kicker">Cloudera Fast Forward Labs · 2018</div>
  <h4>The True Competitive Advantage in ML</h4>
  <p>Why data plus feedback loops beat model choice, most of the time.</p>
</a>

</div>
</div>

</div>

<script>
(function () {
  document.body.classList.add('media-full-width');

  // Belt-and-suspenders: ensure ancestor columns don't cap width
  var page = document.querySelector('.media-page');
  if (page) {
    var el = page.parentElement;
    while (el && el.tagName && el.tagName.toLowerCase() !== 'body') {
      if (el.classList) {
        for (var i = 0; i < el.classList.length; i++) {
          var cls = el.classList[i];
          if (cls.indexOf('col-') === 0) {
            el.style.maxWidth = '100%';
            el.style.flex = '0 0 100%';
            el.style.width = '100%';
            break;
          }
        }
      }
      el.style.overflow = 'visible';
      el = el.parentElement;
    }
  }

  // ---------- Carousel ----------
  var carousel = document.querySelector('.media-featured-carousel');
  var track    = carousel && carousel.querySelector('.media-featured-track');
  var leftBtn  = carousel && carousel.querySelector('.carousel-arrow-left');
  var rightBtn = carousel && carousel.querySelector('.carousel-arrow-right');

  if (carousel && track && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var offset = 0;
    var baseSpeed = 0.55;  // px/frame ≈ 33 px/sec — gentle default
    var currentSpeed = baseSpeed;
    var half = 0;

    function measure() {
      // Track width equals two copies of the card set; scroll wraps at half.
      half = track.scrollWidth / 2;
    }
    measure();
    window.addEventListener('resize', measure);
    window.addEventListener('load', measure);
    setTimeout(measure, 300);
    setTimeout(measure, 1200);

    function tick() {
      // Pause when a card is hovered (but not when only an arrow is hovered)
      var hoveredCard = track.querySelector('.media-featured-card:hover');
      if (!hoveredCard && half > 0) {
        offset += currentSpeed;
        if (offset >= half) offset -= half;
        if (offset < 0) offset += half;
        track.style.transform = 'translateX(' + (-offset) + 'px)';
      }
      requestAnimationFrame(tick);
    }
    tick();

    function set(dir) { currentSpeed = dir * 3.5; }
    function reset()  { currentSpeed = baseSpeed; }

    // NOTE: arrows are anchored to the direction the *carousel* moves visually.
    // Left arrow => carousel content shifts leftward.
    // Right arrow => carousel content shifts rightward.
    if (leftBtn) {
      leftBtn.addEventListener('mouseenter', function () { set(1); });
      leftBtn.addEventListener('mouseleave', reset);
      leftBtn.addEventListener('mousedown',  function () { set(1); });
      leftBtn.addEventListener('mouseup',    reset);
      leftBtn.addEventListener('touchstart', function (e) { e.preventDefault(); set(1); }, {passive:false});
      leftBtn.addEventListener('touchend',   reset);
      leftBtn.addEventListener('click', function (e) {
        e.preventDefault();
        offset += 340;
        if (offset >= half) offset -= half;
      });
    }
    if (rightBtn) {
      rightBtn.addEventListener('mouseenter', function () { set(-1); });
      rightBtn.addEventListener('mouseleave', reset);
      rightBtn.addEventListener('mousedown',  function () { set(-1); });
      rightBtn.addEventListener('mouseup',    reset);
      rightBtn.addEventListener('touchstart', function (e) { e.preventDefault(); set(-1); }, {passive:false});
      rightBtn.addEventListener('touchend',   reset);
      rightBtn.addEventListener('click', function (e) {
        e.preventDefault();
        offset -= 340;
        if (offset < 0) offset += half;
      });
    }
  }

  // ---------- Tabs ----------
  var buttons = document.querySelectorAll('.media-tab-btn');
  var sections = document.querySelectorAll('.media-section');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-tab');
      buttons.forEach(function (b) { b.classList.toggle('active', b === btn); });
      sections.forEach(function (s) {
        var section = s.getAttribute('data-section');
        var show = (target === 'all') || (section === target);
        s.classList.toggle('active', show);
      });
    });
  });
})();
</script>
