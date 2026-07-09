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
/* Break out of the theme's narrow content column and use full page width */
.media-page {
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  padding: 0 clamp(1rem, 5vw, 3.5rem);
  box-sizing: border-box;
  max-width: none;
}
.media-inner {
  max-width: 1240px;
  margin: 0 auto;
}
.media-intro {
  max-width: 760px;
  margin: 0 auto 2.5rem;
  font-size: 1.05rem;
  line-height: 1.65;
  color: #555;
}
.media-h2 {
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #888;
  margin: 2.5rem 0 1.25rem;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 0.6rem;
}

/* Featured — flex-wrap with center justification so incomplete rows center */
.media-featured {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}
.media-featured-card {
  flex: 1 1 260px;
  max-width: 320px;
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
  box-shadow: 0 12px 32px rgba(0,0,0,0.12);
  color: inherit !important;
}
.media-featured-thumb {
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

/* O'Reilly signature red + serif wordmark */
.outlet-oreilly { background: #d84924; }
.oreilly-mark {
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 700;
  font-size: 1.7rem;
  letter-spacing: 0.01em;
  color: #fff;
}
.oreilly-mark sup { font-size: 0.55rem; margin-left: 0.1rem; }
.oreilly-sub {
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-top: 0.55rem;
  opacity: 0.9;
  color: #fff;
}

/* CNN — black background with real CNN red logo mark */
.outlet-cnn { background: #000; }
.cnn-mark {
  width: 100px;
  height: auto;
  display: block;
  margin: 0 auto 0.5rem;
}
.cnn-sub {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  font-size: 1.05rem;
  letter-spacing: 0.02em;
  color: #fff;
}

/* VentureBeat — black with two-tone wordmark */
.outlet-vb { background: #131313; }
.vb-mark {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
  color: #fff;
}
.vb-mark span { color: #ff5233; }
.vb-sub {
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-top: 0.55rem;
  opacity: 0.85;
  color: #fff;
}

.media-featured-body { padding: 1.15rem 1.3rem 1.4rem; }
.media-featured-kicker {
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 0.5rem;
}
.media-featured-body h3 {
  font-size: 1.02rem;
  line-height: 1.35;
  margin: 0 0 0.5rem 0;
  color: #222;
  font-weight: 600;
}
.media-featured-body p {
  font-size: 0.88rem;
  line-height: 1.55;
  color: #666;
  margin: 0;
}

/* Tabs */
.media-tabs {
  display: flex;
  gap: 0.2rem;
  border-bottom: 1px solid #e5e5e5;
  margin: 3rem 0 1.75rem;
  overflow-x: auto;
  padding: 0;
  -webkit-overflow-scrolling: touch;
}
.media-tab-btn {
  background: none;
  border: none;
  padding: 0.7rem 0.95rem;
  font-size: 0.82rem;
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
.media-tab-btn.active {
  color: #2d7a4d;
  border-bottom-color: #2d7a4d;
  font-weight: 600;
}

.media-archive-note {
  font-size: 0.78rem;
  color: #888;
  margin: 0 0 1.2rem;
  font-style: italic;
}
.media-archive-note::before {
  content: "↗ ";
  color: #2d7a4d;
  font-style: normal;
  font-weight: 600;
  margin-right: 0.15rem;
}

.media-section { display: none; margin-bottom: 2rem; }
.media-section.active { display: block; }
.media-section-title {
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #999;
  margin: 1.4rem 0 0.9rem;
  font-weight: 600;
}
.media-section:first-of-type .media-section-title { margin-top: 0.5rem; }

/* Archive — flex-wrap so trailing items center rather than hang */
.media-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}
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
.media-item:hover {
  background: rgba(45,122,77,0.06);
  border-left-color: #1a5c3d;
  color: inherit !important;
  transform: translateX(2px);
}
.media-item-kicker {
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #888;
  margin-bottom: 0.35rem;
}
.media-item h4 {
  font-size: 0.98rem;
  line-height: 1.35;
  margin: 0 0 0.35rem 0;
  font-weight: 600;
  color: #222;
}
.media-item p {
  font-size: 0.85rem;
  line-height: 1.5;
  color: #666;
  margin: 0;
}
@media (max-width: 640px) {
  .media-featured-card { max-width: none; }
  .media-item { max-width: none; }
}
</style>

<div class="media-page">
<div class="media-inner">

<div class="media-intro">
A selection of interviews, talks, essays, and press covering roughly a decade of work in ML and AI — from federated learning at Cloudera Fast Forward Labs, to running data science and product at Yelp during the COVID economic story, to building generative AI systems at Vera AI, to current Berkeley research on deepfakes, facial recognition, and LLM evaluation. Curated, not exhaustive.
</div>

<div class="media-h2">Featured</div>

<div class="media-featured">

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
    <p>Long-form conversation with Ben Lorica on how product management, evaluation, and moats have shifted since generative AI became the substrate.</p>
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

</div>

<div class="media-tabs">
  <button class="media-tab-btn active" data-tab="all">All</button>
  <button class="media-tab-btn" data-tab="podcasts">Podcasts &amp; Conversations</button>
  <button class="media-tab-btn" data-tab="talks">Talks &amp; Lectures</button>
  <button class="media-tab-btn" data-tab="press">Press &amp; Commentary</button>
  <button class="media-tab-btn" data-tab="writing">Writing</button>
</div>

<p class="media-archive-note">Click any item to open in a new tab.</p>

<div class="media-section active" data-section="podcasts">
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

<div class="media-section active" data-section="talks">
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

<a class="media-item" href="https://vcresearch.berkeley.edu/news/hany-farid-and-i-school-phd-students-featured-pbs-nova" target="_blank" rel="noopener">
  <div class="media-item-kicker">PBS NOVA · 2024</div>
  <h4>Berkeley featured on PBS NOVA's A.I. Revolution</h4>
  <p>Deepfake detection research with Hany Farid on PBS's flagship science documentary.</p>
</a>

<a class="media-item" href="https://techcrunch.com/2023/08/30/betaworks-goes-all-in-on-augmentative-ai-in-latest-camp-cohort-were-rabidly-interested/" target="_blank" rel="noopener">
  <div class="media-item-kicker">TechCrunch · 2023</div>
  <h4>Betaworks goes all in on augmentative AI in latest Camp cohort</h4>
  <p>Coverage of the Vera AI cohort.</p>
</a>

<a class="media-item" href="https://ccst.us/ccst-launches-california-ai-science-residency/" target="_blank" rel="noopener">
  <div class="media-item-kicker">CCST · 2025</div>
  <h4>California AI Science Residency Program on Frontier AI Safety</h4>
  <p>Appointment as an inaugural AI Science Advisor to CalOES and CDT.</p>
</a>

<a class="media-item" href="https://venturebeat.com/2020/07/18/ai-needs-systemic-solutions-to-systemic-bias-injustice-and-inequality/" target="_blank" rel="noopener">
  <div class="media-item-kicker">VentureBeat · 2020</div>
  <h4>AI needs systemic solutions to systemic bias, injustice, and inequality</h4>
  <p>Op-ed on structural fixes vs. patchwork mitigations in AI systems.</p>
</a>

<a class="media-item" href="https://www.cnbc.com/2020/09/16/yelp-data-shows-60percent-of-business-closures-due-to-the-coronavirus-pandemic-are-now-permanent.html" target="_blank" rel="noopener">
  <div class="media-item-kicker">CNBC · 2020</div>
  <h4>60% of pandemic business closures are now permanent</h4>
  <p>Coverage of Yelp economic recovery data.</p>
</a>

<a class="media-item" href="https://www.nytimes.com/2020/07/13/business/small-businesses-coronavirus.html" target="_blank" rel="noopener">
  <div class="media-item-kicker">The New York Times · 2020</div>
  <h4>Small businesses in the pandemic</h4>
  <p>Quoted analysis of Yelp closure trends.</p>
</a>

<a class="media-item" href="https://www.wsj.com/articles/140-000-businesses-listed-on-yelp-are-still-closed-because-of-covid-19-pandemic-11593057601" target="_blank" rel="noopener">
  <div class="media-item-kicker">The Wall Street Journal · 2020</div>
  <h4>140,000 businesses listed on Yelp still closed because of COVID-19</h4>
  <p>Yelp closure data as a leading indicator for the small-business economy.</p>
</a>

<a class="media-item" href="https://www.bloomberg.com/news/articles/2021-01-26/u-s-restaurant-openings-picked-up-pace-in-fourth-quarter-2020" target="_blank" rel="noopener">
  <div class="media-item-kicker">Bloomberg · 2021</div>
  <h4>U.S. Restaurant Openings Quicken, Hinting at Rebound</h4>
  <p>Yelp reopening trends as an early recovery signal.</p>
</a>

<a class="media-item" href="https://www.marketplace.org/2020/09/15/pandemic-recovery-for-restaurants-slowing-down/" target="_blank" rel="noopener">
  <div class="media-item-kicker">Marketplace · 2020</div>
  <h4>Pandemic recovery for restaurants is slowing down</h4>
  <p>National radio segment on Yelp-observed recovery trajectories.</p>
</a>

</div>
</div>

<div class="media-section active" data-section="writing">
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
</div>

<script>
(function () {
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
