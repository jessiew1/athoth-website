/** Scientific editorial home: human expertise leads; orbital visuals signal accountable knowledge transfer. */
import { ArrowRight, Check, Download, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";

const CAPABILITY_PDF = "/assets/documents/athoth-capability-statement.pdf";

const work = [
  ["01", "Expertise acquisition", "Agents that learn from demonstrations, context, explanations, feedback, and outcomes—not only final answers."],
  ["02", "Institutional knowledge", "Systems that convert experience-based knowledge into durable, reviewable, and transferable organizational capability."],
  ["03", "Governed agents", "AI designed with provenance, policy boundaries, uncertainty awareness, human review, and escalation pathways."],
];

const experience = [
  ["Learning + mentoring", "Adaptive learning and mentoring systems", "Research and prototype development supporting personalized learning, mentoring, feedback, and workforce capability."],
  ["AI + data systems", "Secure AI and decision-support platforms", "Applied machine learning, data integration, cloud architecture, and human-in-the-loop decision support for governed environments."],
  ["Cyber + resilience", "Cybersecurity and agentic AI research", "Defensive system concepts emphasizing controlled environments, validation, logging, and human authorization."],
  ["Institutions + workforce", "Institutional and mission knowledge systems", "Technology and research supporting professional development, organizational learning, operational continuity, and responsible innovation."],
];

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <div className="hero-grid container">
          <div className="hero-copy reveal">
            <span className="eyebrow"><Sparkles size={14} /> Applied AI research + systems</span>
            <h1>AI that learns from <em>human expertise.</em></h1>
            <p>Athoth Innovations develops human-centered intelligent systems that help organizations preserve knowledge, strengthen workforce capability, and responsibly scale expert practice.</p>
            <div className="actions">
              <Link className="button button-primary" href="/research">Explore our research <ArrowRight size={17} /></Link>
              <Link className="button button-secondary" href="/government">Government capabilities</Link>
            </div>
            <div className="hero-proof"><span><Check size={15} /> Human authoritative</span><span><Check size={15} /> Evidence oriented</span><span><Check size={15} /> Governed by design</span></div>
          </div>
          <div className="hero-art reveal delay-1">
            <div className="visual-index">ATH / 01 — KNOWLEDGE TRANSFER</div>
            <img src="/assets/images/hero-orbit.webp" alt="Abstract orbital spheres representing expertise transferred into accountable AI" />
            <div className="visual-note"><span>Observe</span><i /><span>Abstract</span><i /><span>Validate</span></div>
          </div>
        </div>
      </section>

      <section className="section section-mist">
        <div className="container editorial-split">
          <div><span className="eyebrow">The challenge</span><h2>Expertise is valuable—<br />and fragile.</h2></div>
          <div className="editorial-copy"><p className="pullquote">Organizations depend on judgment that is rarely captured in manuals, databases, or conventional AI systems.</p><p>When experienced professionals retire, transfer, or leave, institutions can lose decision logic, mentoring practices, troubleshooting strategies, and context accumulated over years. Athoth is building systems that help preserve that knowledge while keeping people in authority.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">What we build</span><h2>From authentic practice to accountable intelligence.</h2></div><p>Our work combines applied AI research, secure system design, human-centered learning, and operational governance.</p></div>
          <div className="capability-rail">
            {work.map(([n, title, copy]) => <article className="number-card" key={n}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section research-band">
        <div className="container research-layout">
          <div className="research-copy">
            <span className="eyebrow light">Flagship research direction</span>
            <h2>Observational<br /><em>Agent Learning</em></h2>
            <p>OAL explores how intelligent agents can acquire transferable expertise by studying how professionals interpret situations, make decisions, select interventions, and adapt based on outcomes.</p>
            <div className="actions"><Link className="button button-light" href="/research">Read the research overview <ArrowRight size={17} /></Link></div>
          </div>
          <div className="research-panel">
            <img src="/assets/images/research-field.webp" alt="Abstract orbital system illustrating observational agent learning" />
            <div className="process-flow">{["Observe", "Infer", "Abstract", "Validate", "Apply", "Improve"].map((item, i) => <div key={item}><b>{String(i + 1).padStart(2, "0")}</b><span>{item}</span></div>)}</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container statement-panel">
          <div><span className="eyebrow light">Capability statement</span><h2>Research depth.<br />Operational discipline.</h2><p>Explore Athoth’s core competencies, differentiators, government value, and public-safe experience themes.</p><a className="button button-light" href={CAPABILITY_PDF} target="_blank" rel="noreferrer">Download statement <Download size={17} /></a></div>
          <div className="statement-stats"><div><strong>AI + ML</strong><span>Applied research and intelligent systems</span></div><div><strong>Human</strong><span>Centered design and oversight</span></div><div><strong>Secure</strong><span>Governed and accountable deployment</span></div></div>
        </div>
      </section>

      <section className="section section-mist">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">Selected experience</span><h2>Research connected to real-world needs.</h2></div><Link className="text-link" href="/projects">View project themes <ArrowRight size={17} /></Link></div>
          <div className="experience-grid">{experience.map(([label,title,copy],i) => <article className="experience-card" key={title}><span className="card-code">0{i+1} / {label}</span><h3>{title}</h3><p>{copy}</p><ShieldCheck size={22} /></article>)}</div>
        </div>
      </section>

      <section className="cta-section"><div className="container cta-panel"><div><span className="eyebrow">Work with Athoth</span><h2>Build the next generation of accountable AI.</h2></div><Link className="button button-primary" href="/contact">Start a conversation <ArrowRight size={17} /></Link></div></section>
    </main>
  );
}
