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
.media-page { max-width: 1080px; margin: 0 auto; }
.media-intro {
  max-width: 720px;
  margin: 0 auto 3rem;
  font-size: 1.05rem;
  line-height: 1.65;
  color: #555;
}
.media-h2 {
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #888;
  margin: 3rem 0 1.25rem;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 0.6rem;
}
.media-featured {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1rem;
}
.media-featured-card {
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
  box-shadow: 0 10px 28px rgba(0,0,0,0.1);
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
.media-featured-thumb.outlet-oreilly {
  background: linear-gradient(135deg, #d64920 0%, #8a2b12 100%);
}
.media-featured-thumb.outlet-cnn {
  background: linear-gradient(135deg, #cc0000 0%, #660000 100%);
}
.media-featured-thumb.outlet-vb {
  background: linear-gradient(135deg, #2864a3 0%, #0e3560 100%);
}
.media-thumb-label {
  font-family: monospace;
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.005em;
  text-shadow: 0 1px 2px rgba(0,0,0,0.15);
}
.media-thumb-kicker {
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  opacity: 0.85;
  margin-bottom: 0.6rem;
}
.media-featured-body { padding: 1.25rem 1.4rem 1.5rem; }
.media-featured-kicker {
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 0.5rem;
}
.media-featured-body h3 {
  font-size: 1.05rem;
  line-height: 1.35;
  margin: 0 0 0.55rem 0;
  color: #222;
  font-weight: 600;
}
.media-featured-body p {
  font-size: 0.9rem;
  line-height: 1.55;
  color: #666;
  margin: 0;
}
.media-tabs {
  display: flex;
  gap: 0.2rem;
  border-bottom: 1px solid #e5e5e5;
  margin: 2.5rem 0 1.5rem;
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
.media-section { display: none; margin-bottom: 2rem; }
.media-section.active { display: block; }
.media-section-title {
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #999;
  margin: 1.5rem 0 0.9rem;
  font-weight: 600;
}
.media-section:first-of-type .media-section-title { margin-top: 0.5rem; }
.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 0.7rem;
}
.media-item {
  padding: 1rem 1.2rem;
  background: #fafafa;
  border-left: 3px solid #2d7a4d;
  border-radius: 4px;
  text-decoration: none !important;
  color: inherit !important;
  display: block;
  transition: background 0.15s, border-color 0.15s;
}
.media-item:hover {
  background: rgba(45,122,77,0.06);
  border-left-color: #1a5c3d;
  color: inherit !important;
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
  .media-featured { grid-template-columns: 1fr; }
  .media-grid { grid-template-columns: 1fr; }
}
</style>

<div class="media-page">

<div class="media-intro">
A selection of interviews, talks, essays, and press covering roughly a decade of work in ML and AI — from federated learning at Cloudera Fast Forward Labs, to running data science and product at Yelp during the COVID economic story, to building generative AI systems at Vera AI, to current Berkeley research on deepfakes, facial recognition, and LLM evaluation. Curated, not exhaustive.
</div>

<div class="media-h2">Featured</div>

<div class="media-featured">

<a class="media-featured-card" href="https://www.oreilly.com/radar/podcast/generative-ai-in-the-real-world-competing-in-a-generative-world-with-justin-norman/" target="_blank" rel="noopener">
  <div class="media-featured-thumb outlet-oreilly">
    <div>
      <div class="media-thumb-kicker">O'Reilly Radar</div>
      <div class="media-thumb-label">Generative AI<br>in the Real World</div>
    </div>
  </div>
  <div class="media-featured-body">
    <div class="media-featured-kicker">Podcast · 2024</div>
    <h3>Competing in a Generative World</h3>
    <p>A long-form conversation with Ben Lorica on how product management, evaluation, and moats have shifted since generative AI became the substrate.</p>
  </div>
</a>

<a class="media-featured-card" href="https://vcresearch.berkeley.edu/news/hany-farid-and-i-school-phd-students-featured-pbs-nova" target="_blank" rel="noopener">
  <div class="media-featured-thumb" style="background-image: url('/media-thumbnails/pbs-nova.png');"></div>
  <div class="media-featured-body">
    <div class="media-featured-kicker">PBS NOVA · 2024</div>
    <h3>Berkeley I-School featured on PBS NOVA</h3>
    <p>Featured with Hany Farid on computational approaches to detecting deepfake video and understanding what's real online.</p>
  </div>
</a>

<a class="media-featured-card" href="https://twitter.com/jchatterleyCNN/status/1288195360951803907" target="_blank" rel="noopener">
  <div class="media-featured-thumb outlet-cnn">
    <div>
      <div class="media-thumb-kicker">CNN</div>
      <div class="media-thumb-label">First Move<br>with Julia Chatterley</div>
    </div>
  </div>
  <div class="media-featured-body">
    <div class="media-featured-kicker">Live TV · 2020</div>
    <h3>Yelp economic data on CNN's global markets show</h3>
    <p>Live interview on Yelp's business-closure and reopening data during the pandemic, as part of CNN International's live coverage.</p>
  </div>
</a>

<a class="media-featured-card" href="https://twimlai.com/twiml-talk-185-federated-ml-for-edge-applications-with-justin-norman/" target="_blank" rel="noopener">
  <div class="media-featured-thumb" style="background-image: url('/media-thumbnails/twiml.jpg');"></div>
  <div class="media-featured-body">
    <div class="media-featured-kicker">TWIML AI Podcast · 2018</div>
    <h3>Federated ML for Edge Applications</h3>
    <p>On federated machine learning at Cloudera Fast Forward Labs — an early practical framing of a technique that has since become mainstream.</p>
  </div>
</a>

<a class="media-featured-card" href="https://venturebeat.com/transform-2020-video-hub/#/channel/technology-and-automation/ifme4v3rozcu2rtshfxgon3gmrxem6bx" target="_blank" rel="noopener">
  <div class="media-featured-thumb outlet-vb">
    <div>
      <div class="media-thumb-kicker">VentureBeat</div>
      <div class="media-thumb-label">Transform 2020</div>
    </div>
  </div>
  <div class="media-featured-body">
    <div class="media-featured-kicker">Keynote Talk · 2020</div>
    <h3>Rewards and challenges of building and scaling a custom AI system</h3>
    <p>Keynote-adjacent talk on running an in-house ML platform at scale, drawn from Yelp's Bunsen experimentation stack.</p>
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
  <p>Early-days conversation with Sam Charrington on federated learning at Cloudera Fast Forward Labs.</p>
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
  <div class="media-item-kicker">UC Berkeley I-School · 2025</div>
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
  <h4>Berkeley I-School faculty and PhD students featured on PBS NOVA</h4>
  <p>Deepfake detection research with Hany Farid.</p>
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
