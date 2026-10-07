import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu, X, Briefcase, Hammer, Users, Compass, Cpu, ClipboardCheck, Rocket, Smile,
  Phone, Mail, MapPin, MessageCircle, Navigation, CheckCircle2, Award, Quote,
  Facebook, Instagram, Linkedin, Youtube,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import logo from "@/assets/kodzen-logo.png.asset.json";

const LOGO_URL = new URL(logo.url, "https://project--2330c76a-d22a-4c0a-a7ad-6bbf6561d084-dev.lovable.app").href;

const TITLE = "KodZen Academy — Java, Python, Web & AI Training in Aurangabad, Bihar";
const DESC = "Hands-on, mentor-led training in Core Java, Advanced Java, SQL, web development, React, C, C++, Python and AI. Real projects, placement assistance and certification.";

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
  phone: "+91 93043 57906",
  whatsapp: "919304357906",
  email: "sachinsingh33008@gmail.com",
  address: "Naga Bigha Road, near Manokamna Mandir, Aurangabad, Bihar 824101",
};

const NAV = [
  ["Home", "#home"], ["About Us", "#about"], ["Courses", "#courses"],
  ["School Programs", "#school"], ["College Programs", "#college"],
  ["Methodology", "#method"], ["Success Stories", "#stories"],
  ["Contact Us", "#contact"],
] as const;

const COURSES = [
  { tag: "Jv", tone: "text-brand bg-brand/10", name: "Core Java", desc: "From your first line of Java to OOP concepts, collections, multithreading and Java 8 features — logic and confidence built step by step.", skills: ["OOP Concepts", "Collections", "Multithreading", "Java 8", "Stream API"] },
  { tag: "Aj", tone: "text-cyan bg-cyan/15", name: "Advanced Java", desc: "Spring Boot, REST APIs, Spring Security and microservices — build the backend systems companies actually run.", skills: ["Spring Boot", "Spring MVC", "REST API", "JWT Security", "Microservices"] },
  { tag: "Sq", tone: "text-indigo-soft bg-indigo-soft/10", name: "SQL", desc: "Databases from the ground up: ER diagrams, joins, subqueries, stored procedures, transactions and normalization.", skills: ["Joins", "Sub Queries", "Stored Procedures", "Normalization", "Triggers"] },
  { tag: "Wd", tone: "text-cyan bg-cyan/15", name: "HTML · CSS · JavaScript", desc: "Build real, responsive websites while learning the DOM, ES6 features, events and the Fetch API by doing.", skills: ["HTML5", "CSS", "Flexbox & Grid", "ES6", "Responsive Design"] },
  { tag: "Re", tone: "text-indigo-soft bg-indigo-soft/10", name: "React JS", desc: "Components, hooks, routing and state — ship, deploy and showcase a real React application.", skills: ["Components", "React Hooks", "React Router", "Redux Toolkit", "API Integration"] },
  { tag: "C", tone: "text-brand bg-brand/10", name: "C Programming", desc: "Strong fundamentals that last a career: logic, control statements, arrays, strings, pointers and file handling.", skills: ["Loops & Logic", "Arrays", "Pointers", "Structures", "File Handling"] },
  { tag: "C++", tone: "text-cyan bg-cyan/15", name: "C++ Programming", desc: "Object-oriented power: classes, inheritance, polymorphism, operator overloading, the STL and exception handling.", skills: ["OOP", "Classes & Objects", "STL", "Inheritance", "Exception Handling"] },
  { tag: "Py", tone: "text-brand bg-brand/10", name: "Python Programming", desc: "Clean, practical Python — data types, functions, data structures and OOP, applied through small projects.", skills: ["Functions", "Data Structures", "OOP", "Modules", "File Handling"] },
  { tag: "AI", tone: "text-indigo-soft bg-indigo-soft/10", name: "Artificial Intelligence", desc: "From AI basics to machine learning, deep learning and the tools behind modern AI systems.", skills: ["Machine Learning", "Deep Learning", "Neural Networks", "NumPy · Pandas", "TensorFlow · PyTorch"] },
];

const WHY = [
  [Briefcase, "Industry-oriented", "Curriculum shaped by what companies actually hire for."],
  [Hammer, "Project-based", "Every module ends with something you built."],
  [Users, "Experienced trainers", "Mentors who work as software engineers."],
  [Compass, "Personal guidance", "Small batches so every student is seen."],
  [Cpu, "Modern technology", "Current tools, frameworks and practices."],
  [ClipboardCheck, "Hands-on assignments", "Weekly practice reviewed by mentors."],
  [Rocket, "Career-focused", "Placement assistance, interviews and portfolios."],
  [Smile, "Student-friendly", "A calm, encouraging space to learn."],
] as const;

const BADGES = ["100% Practical Training", "Placement Assistance", "Live Projects", "Interview Preparation", "Certification Courses"];

const STEPS = [
  "Learn the Concept", "Understand Through Examples", "Practice",
  "Build Real Projects", "Get Mentor Feedback", "Apply in Real-World Scenarios",
];

const STORIES = [
  { name: "Rahul Kumar", role: "Full Stack Java Student", quote: "When I joined KodZen Academy, I had basic programming knowledge but lacked confidence in developing real applications. The practical Java, Spring Boot and SQL sessions helped me understand concepts much better. Working on live projects and attending mock interviews improved my confidence significantly.", course: "Full Stack Java", achievement: "Successfully started his IT career", skills: ["Java", "Spring Boot", "SQL", "React JS"], tone: "text-brand bg-brand/10" },
  { name: "Priya Kumari", role: "Java Programming Student", quote: "I was completely new to programming when I joined KodZen Academy. The instructors explained everything step by step and encouraged me to practice regularly. Today, I can write Java programs independently and build small projects on my own.", course: "Core Java", achievement: "Built multiple Java projects", skills: ["Java", "OOP", "Collections", "SQL"], tone: "text-cyan bg-cyan/15" },
  { name: "Aman Kumar", role: "Web Development Student", quote: "The best part of learning at KodZen Academy was the practical approach. Instead of only learning theory, I worked on HTML, CSS and JavaScript projects. Building my own website gave me the confidence to continue learning advanced technologies.", course: "Web Development", achievement: "Built his personal website", skills: ["HTML", "CSS", "JavaScript"], tone: "text-indigo-soft bg-indigo-soft/10" },
  { name: "Neha Kumari", role: "Python & AI Student", quote: "I joined KodZen Academy to start my journey in Python. The practical assignments and project-based learning helped me understand programming logic. I am now exploring AI and building small Python-based projects.", course: "Python Programming", achievement: "Started building Python projects", skills: ["Python", "OOP", "Data Structures", "AI Basics"], tone: "text-brand bg-brand/10" },
];

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-frost text-ink antialiased">
      <header className="sticky top-0 z-50 px-4 py-4 sm:px-6">
        <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 shadow-soft">
          <a href="#home" className="flex items-center gap-2.5">
            <img src={LOGO_URL} alt="KodZen Academy logo" className="size-10 rounded-full" />
            <span className="font-display text-lg font-bold tracking-tight">KodZen<span className="text-brand">.</span>Academy</span>
          </a>
          <nav className="hidden items-center gap-5 text-sm font-medium text-ink/70 xl:flex">
            {NAV.map(([l, h]) => <a key={h} href={h} className="transition-colors hover:text-brand">{l}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <button aria-label="Menu" onClick={() => setOpen(!open)} className="rounded-full p-2 xl:hidden">{open ? <X /> : <Menu />}</button>
          </div>
        </div>
        {open && (
          <nav className="glass mx-auto mt-2 flex max-w-6xl flex-col rounded-3xl p-4 shadow-soft xl:hidden">
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
              <span className="glass inline-flex rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand">Learn · Build · Get Placed</span>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.03] tracking-tight md:text-6xl">Your path to a <span className="text-brand">successful IT career</span> starts here.</h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">KodZen Academy trains students in Java, SQL, web development, React, Python and AI — 100% practical, project-based, with placement assistance.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#courses" className="glass rounded-full px-7 py-3.5 font-semibold transition-transform hover:-translate-y-0.5">Explore Courses</a>
              </div>
              <div className="mt-10 flex flex-wrap gap-2">
                {BADGES.map((b) => (
                  <span key={b} className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-ink/75"><CheckCircle2 className="size-3.5 text-brand" />{b}</span>
                ))}
              </div>
            </div>
            <div className="relative reveal">
              <img src={hero} alt="Students collaborating on laptops at KodZen Academy" width={1200} height={912} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
              <div className="glass-dark absolute -bottom-6 -left-4 w-56 rounded-2xl px-5 py-4 sm:-left-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-cyan">Coding today</div>
                <div className="mt-1 font-display font-semibold">Career tomorrow</div>
                <div className="mt-1 text-sm opacity-60">Learn · Build · Get Placed</div>
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
              <p className="mt-4 leading-relaxed text-ink/70">KodZen Academy offers structured training in Core Java, Advanced Java, SQL, web development, React, C, C++, Python and Artificial Intelligence for school students, college students and aspiring learners. Small batches, real projects and mentors who remember your name.</p>
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
            <p className="mt-3 text-center text-ink/60">Nine career-ready tracks, all taught 100% practically with real projects.</p>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {COURSES.map((c) => (
                <article key={c.name} className="glass reveal flex flex-col rounded-3xl p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                  <div className={`grid size-11 place-items-center rounded-xl font-display text-xs font-bold ${c.tone}`}>{c.tag}</div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{c.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{c.skills.map((s) => <span key={s} className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium">{s}</span>)}</div>
                  <div className="mt-6 flex gap-3">
                    <a href="#contact" className="rounded-full border border-ink/10 px-5 py-2 text-sm font-semibold transition-colors hover:border-brand hover:text-brand">View Details</a>
                    <a href="#contact" className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-primary-foreground">Enquire Now</a>
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
              { id: "college", label: "For college students", title: "Get industry ready", items: ["Programming", "Web development", "Software development", "Industry-oriented projects", "Placement assistance", "Interview preparation"], tone: "text-brand" },
            ].map((p) => (
              <div id={p.id} key={p.id} className="glass-dark reveal scroll-mt-28 rounded-3xl p-8 shadow-lift">
                <span className={`text-xs font-semibold uppercase tracking-[0.15em] ${p.tone}`}>{p.label}</span>
                <h3 className="mt-3 font-display text-2xl font-bold">{p.title}</h3>
                <ul className="mt-5 space-y-2.5">
                  {p.items.map((i) => <li key={i} className="flex items-center gap-2.5 opacity-80"><CheckCircle2 className={`size-4 ${p.tone}`} />{i}</li>)}
                </ul>
                <a href="#contact" className={`mt-6 inline-block font-semibold ${p.tone}`}>Learn More →</a>
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

        {/* Success stories */}
        <section id="stories" className="relative overflow-hidden px-6 py-20">
          <div className="orb left-[-120px] top-1/3 h-[420px] w-[420px] bg-indigo-soft" />
          <div className="relative mx-auto max-w-6xl">
            <h2 className="text-center font-display text-3xl font-bold tracking-tight">Success stories</h2>
            <p className="mt-3 text-center text-ink/60">Real students from KodZen Academy, in their own words.</p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {STORIES.map((s) => (
                <article key={s.name} className="glass reveal rounded-3xl p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                  <Quote className="size-7 text-brand/40" />
                  <p className="mt-4 text-sm leading-relaxed text-ink/75">{s.quote}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className={`grid size-12 shrink-0 place-items-center rounded-full font-display text-lg font-bold ${s.tone}`}>{s.name.charAt(0)}</div>
                    <div>
                      <div className="font-display font-semibold">{s.name}</div>
                      <div className="text-sm text-ink/55">{s.role}</div>
                    </div>
                  </div>
                  <div className="mt-5 space-y-2 border-t border-ink/10 pt-4 text-sm">
                    <div><span className="font-semibold text-ink/80">Course:</span> <span className="text-ink/65">{s.course}</span></div>
                    <div className="flex items-start gap-2"><Award className="mt-0.5 size-4 shrink-0 text-brand" /><span className="text-ink/65"><span className="font-semibold text-ink/80">Achievement:</span> {s.achievement}</span></div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">{s.skills.map((k) => <span key={k} className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium">{k}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact + Map */}
        <section id="contact" className="scroll-mt-24 px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            <div className="glass reveal rounded-3xl p-8 shadow-soft">
              <h2 className="font-display text-2xl font-bold tracking-tight">Contact us</h2>
              <ul className="mt-6 space-y-4 text-ink/75">
                <li className="flex gap-3"><Phone className="size-5 shrink-0 text-brand" /><a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a></li>
                <li className="flex gap-3"><Mail className="size-5 shrink-0 text-brand" /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
                <li className="flex gap-3"><MapPin className="size-5 shrink-0 text-brand" />{CONTACT.address}</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow"><Phone className="size-4" />Call Now</a>
                <a href={`mailto:${CONTACT.email}`} className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold"><Mail className="size-4 text-brand" />Email Us</a>
                <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold"><MessageCircle className="size-4 text-brand" />WhatsApp</a>
              </div>
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

      </main>

      <footer className="px-6 pb-10">
        <div className="glass mx-auto max-w-6xl rounded-3xl p-8 shadow-soft">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2.5">
                <img src={LOGO_URL} alt="KodZen Academy logo" className="size-10 rounded-full" />
                <span className="font-display text-lg font-bold tracking-tight">KodZen<span className="text-brand">.</span>Academy</span>
              </div>
              <p className="mt-3 text-sm text-ink/60">Practical coding and technology training for school and college students. Learn · Build · Get Placed.</p>
              <div className="mt-4 flex gap-3 text-ink/60">
                {[Facebook, Instagram, Linkedin, Youtube].map((I, i) => <a key={i} href="#" aria-label="Social link" className="hover:text-brand"><I className="size-5" /></a>)}
              </div>
            </div>
            <FooterCol title="Quick Links" links={[["Home", "#home"], ["About", "#about"], ["Courses", "#courses"], ["Programs", "#school"], ["Contact", "#contact"]]} />
            <FooterCol title="Courses" links={[["Core Java", "#courses"], ["Advanced Java", "#courses"], ["Web Development", "#courses"], ["React JS", "#courses"], ["Python & AI", "#courses"]]} />
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

