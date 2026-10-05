import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Menu, X, Briefcase, Hammer, Users, Compass, Cpu, ClipboardCheck, Rocket, Smile,
  Phone, Mail, MapPin, Clock, MessageCircle, Navigation, CheckCircle2,
  Facebook, Instagram, Linkedin, Youtube,
} from "lucide-react";
import hero from "@/assets/hero.jpg";

const TITLE = "KodZen Academy — Coding & Tech Training for School and College Students";
const DESC = "Hands-on, mentor-led coding, web, mobile and software programs for school and college students. Real projects, career-focused learning.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CONTACT = {
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@kodzen.academy",
  address: "2nd Floor, Tech Hub, MG Road, Bengaluru, Karnataka 560001",
  hours: "Mon – Sat · 9:00 AM – 7:00 PM",
};

const NAV = [
  ["Home", "#home"], ["About Us", "#about"], ["Courses", "#courses"],
  ["School Programs", "#school"], ["College Programs", "#college"],
  ["Methodology", "#method"], ["Contact Us", "#contact"],
] as const;

const COURSES = [
  { tag: "Py", tone: "text-brand bg-brand/10", name: "Coding Foundations", desc: "Logic, problem solving and Python basics through games and mini-apps.", level: "School · Class 6–10", duration: "12 weeks", skills: ["Python", "Logic", "Problem solving"] },
  { tag: "Wd", tone: "text-cyan bg-cyan/15", name: "Full-Stack Web Development", desc: "HTML, CSS, JavaScript, React and Node — ship a live web app you own.", level: "Class 11–12 · College", duration: "16 weeks", skills: ["React", "Node.js", "Databases"] },
  { tag: "Mb", tone: "text-indigo-soft bg-indigo-soft/10", name: "Mobile App Development", desc: "Design and build cross-platform Android & iOS apps with Flutter.", level: "College", duration: "14 weeks", skills: ["Flutter", "Dart", "APIs"] },
  { tag: "Sd", tone: "text-brand bg-brand/10", name: "Software Engineering & Careers", desc: "Data structures, Git, system design basics and interview preparation.", level: "College · Graduates", duration: "20 weeks", skills: ["DSA", "Git", "Interviews"] },
];

const WHY = [
  [Briefcase, "Industry-oriented", "Curriculum shaped by what companies actually hire for."],
  [Hammer, "Project-based", "Every module ends with something you built."],
  [Users, "Experienced trainers", "Mentors who work as software engineers."],
  [Compass, "Personal guidance", "Small batches so every student is seen."],
  [Cpu, "Modern technology", "Current tools, frameworks and practices."],
  [ClipboardCheck, "Hands-on assignments", "Weekly practice reviewed by mentors."],
  [Rocket, "Career-focused", "Portfolios, interviews and internships."],
  [Smile, "Student-friendly", "A calm, encouraging space to learn."],
] as const;

const STEPS = [
  "Learn the Concept", "Understand Through Examples", "Practice",
  "Build Real Projects", "Get Mentor Feedback", "Apply in Real-World Scenarios",
];

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-frost text-ink antialiased">
      <header className="sticky top-0 z-50 px-4 py-4 sm:px-6">
        <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 shadow-soft">
          <a href="#home" className="font-display text-lg font-bold tracking-tight">KodZen<span className="text-brand">.</span>Academy</a>
          <nav className="hidden items-center gap-5 text-sm font-medium text-ink/70 lg:flex">
            {NAV.map(([l, h]) => <a key={h} href={h} className="transition-colors hover:text-brand">{l}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#apply" className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">Apply Now</a>
            <button aria-label="Menu" onClick={() => setOpen(!open)} className="rounded-full p-2 lg:hidden">{open ? <X /> : <Menu />}</button>
          </div>
        </div>
        {open && (
          <nav className="glass mx-auto mt-2 flex max-w-6xl flex-col rounded-3xl p-4 shadow-soft lg:hidden">
            {NAV.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 font-medium hover:bg-brand/10">{l}</a>)}
          </nav>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden px-6 pb-24 pt-12">
          <div className="orb -left-20 -top-40 h-[520px] w-[520px] bg-brand" />
          <div className="orb right-[-120px] top-20 h-[460px] w-[460px] bg-cyan" />
          <div className="orb bottom-[-140px] left-1/3 h-[360px] w-[360px] bg-indigo-soft" />
          <div className="grain absolute inset-0" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
            <div className="reveal">
              <span className="glass inline-flex rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand">Technology · Education · Careers</span>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.03] tracking-tight md:text-6xl">Where students <span className="text-brand">build</span> real tech, not just watch it.</h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">KodZen Academy turns school and college students into confident builders through practical, mentor-led coding programs.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#apply" className="rounded-full bg-brand px-7 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">Apply Now</a>
                <a href="#courses" className="glass rounded-full px-7 py-3.5 font-semibold transition-transform hover:-translate-y-0.5">Explore Programs</a>
              </div>
              <div className="mt-10 flex gap-8">
                {[["1,200+", "Students trained"], ["48", "Campus partners"], ["4.9★", "Parent rating"]].map(([n, l]) => (
                  <div key={l}><div className="font-display text-3xl font-bold">{n}</div><div className="text-sm text-ink/55">{l}</div></div>
                ))}
              </div>
            </div>
            <div className="relative reveal">
              <img src={hero} alt="Students collaborating on laptops at KodZen Academy" width={1200} height={912} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
              <div className="glass-dark absolute -bottom-6 -left-4 w-56 rounded-2xl px-5 py-4 sm:-left-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-cyan">Live cohort</div>
                <div className="mt-1 font-display font-semibold">Full-stack · Week 6</div>
                <div className="mt-1 text-sm opacity-60">24 students shipping</div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
            <div className="glass reveal rounded-3xl p-8 shadow-soft lg:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">About KodZen</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">A calm, focused space to learn hard skills</h2>
              <p className="mt-4 leading-relaxed text-ink/70">KodZen Academy offers structured coding, web, mobile and software development training for school students, college students and aspiring learners. Small batches, real projects and mentors who remember your name.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-brand/5 p-5"><h3 className="font-display font-semibold">Our mission</h3><p className="mt-1 text-sm text-ink/65">Make practical technology skills accessible to every curious student.</p></div>
                <div className="rounded-2xl bg-cyan/10 p-5"><h3 className="font-display font-semibold">Our vision</h3><p className="mt-1 text-sm text-ink/65">A generation of confident creators ready for the tech industry.</p></div>
              </div>
            </div>
            <div className="glass reveal flex flex-col justify-between rounded-3xl p-8 shadow-soft">
              <div className="font-display text-4xl font-bold text-brand">100%</div>
              <p className="mt-3 text-ink/70">project-based. Every course ends with something you built and can show off.</p>
              <p className="mt-6 text-sm text-ink/55">For school students · college students · aspiring learners</p>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="relative overflow-hidden px-6 py-20">
          <div className="orb left-1/2 top-0 h-[400px] w-[400px] bg-cyan" />
          <div className="relative mx-auto max-w-6xl">
            <h2 className="text-center font-display text-3xl font-bold tracking-tight">Courses offered</h2>
            <p className="mt-3 text-center text-ink/60">Pick a track. Each is batch-based with a capstone project.</p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {COURSES.map((c) => (
                <article key={c.name} className="glass reveal flex flex-col rounded-3xl p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                  <div className={`grid size-11 place-items-center rounded-xl font-display font-bold ${c.tone}`}>{c.tag}</div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{c.desc}</p>
                  <div className="mt-4 text-sm font-semibold text-brand">{c.level} · {c.duration}</div>
                  <div className="mt-3 flex flex-wrap gap-2">{c.skills.map((s) => <span key={s} className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium">{s}</span>)}</div>
                  <div className="mt-6 flex gap-3">
                    <a href="#contact" className="rounded-full border border-ink/10 px-5 py-2 text-sm font-semibold transition-colors hover:border-brand hover:text-brand">View Details</a>
                    <a href="#apply" className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-primary-foreground">Apply Now</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            {[
              { id: "school", label: "For school students", title: "Build strong foundations", items: ["Coding fundamentals", "Programming basics", "Problem solving", "Technology awareness", "Practical projects"], tone: "text-cyan" },
              { id: "college", label: "For college students", title: "Get industry ready", items: ["Programming", "Web development", "Mobile development", "Software development", "Industry-oriented projects", "Career preparation"], tone: "text-brand" },
            ].map((p) => (
              <div id={p.id} key={p.id} className="glass-dark reveal scroll-mt-28 rounded-3xl p-8 shadow-lift">
                <span className={`text-xs font-semibold uppercase tracking-[0.15em] ${p.tone}`}>{p.label}</span>
                <h3 className="mt-3 font-display text-2xl font-bold">{p.title}</h3>
                <ul className="mt-5 space-y-2.5">
                  {p.items.map((i) => <li key={i} className="flex items-center gap-2.5 opacity-80"><CheckCircle2 className={`size-4 ${p.tone}`} />{i}</li>)}
                </ul>
                <a href="#apply" className={`mt-6 inline-block font-semibold ${p.tone}`}>Learn More →</a>
              </div>
            ))}
          </div>
        </section>

        {/* Why + Method */}
        <section id="method" className="relative overflow-hidden px-6 py-20">
          <div className="orb bottom-[-200px] right-[-100px] h-[500px] w-[500px] bg-brand" />
          <div className="relative mx-auto max-w-6xl">
            <h2 className="text-center font-display text-3xl font-bold tracking-tight">Why KodZen Academy?</h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
              {WHY.map(([Icon, t, d]) => (
                <div key={t} className="glass reveal rounded-3xl p-6 transition-transform hover:-translate-y-1">
                  <Icon className="size-6 text-brand" />
                  <h4 className="mt-3 font-display font-semibold">{t}</h4>
                  <p className="mt-2 text-sm text-ink/60">{d}</p>
                </div>
              ))}
            </div>
            <h2 className="mt-24 text-center font-display text-3xl font-bold tracking-tight">The KodZen method</h2>
            <ol className="relative mt-12 grid gap-4 md:grid-cols-6">
              <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-brand/25 md:block" />
              {STEPS.map((s, i) => (
                <li key={s} className="glass reveal relative rounded-2xl p-5 text-center">
                  <div className="mx-auto grid size-9 place-items-center rounded-full bg-brand font-display font-bold text-primary-foreground shadow-glow">{i + 1}</div>
                  <p className="mt-3 text-sm font-medium text-ink/75">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact + Map */}
        <section id="contact" className="scroll-mt-24 px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            <div className="glass reveal rounded-3xl p-8 shadow-soft">
              <h2 className="font-display text-2xl font-bold tracking-tight">Contact us</h2>
              <ul className="mt-6 space-y-4 text-ink/75">
                <li className="flex gap-3"><Phone className="size-5 text-brand" /><a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a></li>
                <li className="flex gap-3"><Mail className="size-5 text-brand" /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
                <li className="flex gap-3"><MapPin className="size-5 shrink-0 text-brand" />{CONTACT.address}</li>
                <li className="flex gap-3"><Clock className="size-5 text-brand" />{CONTACT.hours}</li>
              </ul>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow"><MessageCircle className="size-4" />Chat on WhatsApp</a>
            </div>
            <div className="glass reveal flex flex-col rounded-3xl p-4 shadow-soft">
              <iframe title="KodZen Academy location" className="min-h-[300px] w-full flex-1 rounded-2xl" loading="lazy" src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&z=15&output=embed`} />
              <div className="flex items-center justify-between gap-4 p-4">
                <p className="text-sm text-ink/60">{CONTACT.address}</p>
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONTACT.address)}`} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand/30 px-4 py-2 text-sm font-semibold text-brand"><Navigation className="size-4" />Get Directions</a>
              </div>
            </div>
          </div>
        </section>

        <EnquiryForm />
      </main>

      <footer className="px-6 pb-10">
        <div className="glass mx-auto max-w-6xl rounded-3xl p-8 shadow-soft">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="font-display text-lg font-bold tracking-tight">KodZen<span className="text-brand">.</span>Academy</div>
              <p className="mt-3 text-sm text-ink/60">Practical coding and technology training for school and college students.</p>
              <div className="mt-4 flex gap-3 text-ink/60">
                {[Facebook, Instagram, Linkedin, Youtube].map((I, i) => <a key={i} href="#" aria-label="Social link" className="hover:text-brand"><I className="size-5" /></a>)}
              </div>
            </div>
            <FooterCol title="Quick Links" links={[["Home", "#home"], ["About", "#about"], ["Courses", "#courses"], ["Programs", "#school"], ["Contact", "#contact"]]} />
            <FooterCol title="Programs" links={[["School Programs", "#school"], ["College Programs", "#college"], ["Coding Programs", "#courses"], ["Skill Development", "#method"]]} />
            <div>
              <h4 className="font-display font-semibold">Contact</h4>
              <ul className="mt-3 space-y-2 text-sm text-ink/60"><li>{CONTACT.phone}</li><li>{CONTACT.email}</li><li>{CONTACT.address}</li></ul>
            </div>
          </div>
          <p className="mt-8 border-t border-ink/10 pt-6 text-center text-sm text-ink/50">© 2026 KodZen Academy. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="font-display font-semibold">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-ink/60">{links.map(([l, h]) => <li key={l}><a href={h} className="hover:text-brand">{l}</a></li>)}</ul>
    </div>
  );
}

function EnquiryForm() {
  const [done, setDone] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setDone(true); };
  return (
    <section id="apply" className="scroll-mt-24 px-6 py-20">
      <div className="glass mx-auto max-w-3xl rounded-3xl p-8 shadow-lift sm:p-10">
        {done ? (
          <div className="py-10 text-center">
            <CheckCircle2 className="mx-auto size-14 text-brand" />
            <h2 className="mt-4 font-display text-2xl font-bold">Thank you! Enquiry received.</h2>
            <p className="mt-2 text-ink/60">The KodZen Academy team will contact you shortly.</p>
            <button onClick={() => setDone(false)} className="mt-6 font-semibold text-brand">Submit another enquiry</button>
          </div>
        ) : (
          <>
            <h2 className="font-display text-3xl font-bold tracking-tight">Apply now</h2>
            <p className="mt-2 text-sm text-ink/60">Tell us who's learning and what excites them. We'll get back within 24 hours.</p>
            <form onSubmit={submit} className="mt-8 grid gap-4 sm:grid-cols-2">
              <input required className="field" placeholder="Student name" />
              <input className="field" placeholder="Parent name" />
              <input required type="tel" className="field" placeholder="Phone number" />
              <input required type="email" className="field" placeholder="Email" />
              <input className="field" placeholder="School / College name" />
              <input className="field" placeholder="Current class / year" />
              <select required className="field" defaultValue="">
                <option value="" disabled>Program interested in</option>
                {COURSES.map((c) => <option key={c.name}>{c.name}</option>)}
                <option>School Program</option><option>College Program</option>
              </select>
              <select className="field" defaultValue="Phone">
                <option>Phone</option><option>WhatsApp</option><option>Email</option>
              </select>
              <textarea rows={4} className="field sm:col-span-2" placeholder="Message" />
              <button className="rounded-full bg-brand py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 sm:col-span-2">Submit Enquiry</button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
