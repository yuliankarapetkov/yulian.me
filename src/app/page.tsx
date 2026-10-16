import type { ReactNode } from "react";
import { profileSchema } from "@/lib/profile";
import { ProjectPreview } from "@/components/project-previews";
import { HandArrow, Icon, type IconName } from "@/components/icons";

const email = "say.hi.pushy754@passmail.net";
const cvRequestHref = `mailto:${email}?subject=${encodeURIComponent("CV request")}&body=${encodeURIComponent("Hi Yulian,\n\nCould you send me your CV?\n\nThanks!")}`;

const projects = [
  {
    name: "CouchTalk",
    role: "Personal project",
    description:
      "A platform I’m building in my spare time for finding mental health practitioners. I hope it grows into something that makes therapy more accessible.",
    contributions: [
      "Building practitioner profiles and search around approach, price, location, and session format, so people can explore without creating an account.",
      "The longer-term goal is to help therapists find and manage clients more easily.",
    ],
    domain: "Mental health",
    dates: "2026 — Present",
    href: null,
    availability: "No public link yet. I’ll share it soon.",
    screenshot: "/images/couch-talk",
    screenshotAlt:
      "CouchTalk’s homepage with therapist search and practitioner profiles",
    site: "CouchTalk · Preview",
  },
  {
    name: "Peterson Academy",
    role: "Lead Software Engineer",
    description:
      "An online learning platform. I led architecture and development across the frontend, backend, and database, guiding the engineering team through alpha and beta releases.",
    contributions: [
      "Built course discovery, enrolment, and account features, plus reusable components for a full product redesign.",
      "Led a database migration and architectural overhaul, including REST API development and coordinated backend and frontend migrations.",
      "Improved database and API performance, and set up automated releases, end-to-end tests, and monitoring.",
    ],
    domain: "Education",
    dates: "2023 — 2026",
    href: "https://petersonacademy.com/",
    screenshot: "/images/peterson-academy",
    screenshotAlt: "Peterson Academy’s public homepage",
    site: "petersonacademy.com",
  },
  {
    name: "PlayPilot",
    role: "Senior Frontend Developer",
    description:
      "A streaming discovery service. I built the complete frontend for its content curation admin and developed features across the web and mobile apps.",
    contributions: [
      "Built tools for the content team to select, reorder, and publish homepage titles.",
      "Developed authentication, profiles, favourites, trailers, and search across films and series.",
      "Improved keyboard navigation, focus management, and screen-reader support in search and content interfaces.",
    ],
    domain: "Streaming",
    dates: "2020 — 2022",
    href: "https://www.playpilot.com/",
    screenshot: "/images/playpilot",
    screenshotAlt: "PlayPilot’s public website with films and series to watch",
    site: "playpilot.com",
  },
];

const chapters = [
  {
    title: "Finance & insurance",
    dates: "2013 — 2017",
    companies: "BankSoft · Klear Lending",
    description:
      "Contributed to loan repayment and insurance tools at BankSoft. At Klear Lending, developed much of the investor frontend and built a full-stack budgeting tool.",
  },
  {
    title: "Education & logistics",
    dates: "2017 — 2019",
    companies: "GameLeap · Pikkop",
    description:
      "Built course and video lesson features at GameLeap. At Pikkop, built a shipping platform from scratch, led its architecture, and mentored another developer.",
  },
  {
    title: "Streaming & gaming",
    dates: "2020 — 2023",
    companies: "PlayPilot · Stim",
    description:
      "Built PlayPilot’s content curation frontend and developed web and mobile features. At Stim, led the wallet team, frontend architecture, and a major frontend migration.",
  },
  {
    title: "Online education",
    dates: "2023 — 2026",
    companies: "Peterson Academy",
    description:
      "Promoted to lead engineer in 2024. Led frontend, backend, and data architecture, guided the development team, and continued building features and backend services.",
  },
];

const principles: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "layers",
    title: "Understanding the work",
    description:
      "I start by understanding the users, the existing system, and the constraints. That gives us something concrete to base technical decisions on and helps surface the trade-offs early.",
  },
  {
    icon: "circles",
    title: "Keeping code readable",
    description:
      "I work across frontend, backend, and data, with an emphasis on clear boundaries and readable code. Tests around important flows and repeatable releases make changes easier to review and maintain.",
  },
  {
    icon: "people",
    title: "Working with the team",
    description:
      "I’ve led small teams and mentored developers through planning, code reviews, and pairing. I aim to share enough context for people to make decisions and work independently.",
  },
];

const interests: { icon: IconName; title: string; description: string }[] = [
  { icon: "people", title: "Family & friends", description: "Time together" },
  { icon: "plane", title: "Travel", description: "Visiting new places" },
  { icon: "brain", title: "Psychotherapy", description: "Currently studying" },
  { icon: "music", title: "Music", description: "Singing, rapping, producing" },
  { icon: "gym", title: "Gym", description: "Away from the desk" },
];

function SectionLabel({
  children,
  note,
  id,
}: {
  children: ReactNode;
  note?: string;
  id?: string;
}) {
  return (
    <div className="section-label">
      <h2 id={id}>{children}</h2>
      <span className="section-rule" aria-hidden="true" />
      {note && <p>{note}</p>}
    </div>
  );
}

function Brand({ withCode = false }: { withCode?: boolean }) {
  return (
    <span className="brand">
      {withCode && (
        <span className="brand-code" aria-hidden="true">
          {"</>"}
        </span>
      )}
      <strong>yulian</strong>
      <span>.me</span>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileSchema).replace(/</g, "\\u003c"),
        }}
      />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <a href="#" aria-label="yulian.me — back to top" className="brand-link">
          <Brand withCode />
        </a>
        <nav aria-label="Main navigation" className="main-nav">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          href={`mailto:${email}`}
          className="button button-dark header-contact"
        >
          <span className="status-dot" aria-hidden="true" />
          Say hello
          <Icon name="external" />
        </a>
      </header>

      <main id="main">
        <div className="site-shell">
          <section className="hero" aria-labelledby="hero-heading">
            <div className="hero-copy">
              <p className="eyebrow">Yulian Karapetkov / Software Engineer</p>
              <h1 id="hero-heading">
                Hi, I’m{" "}
                <span className="hand-underline">
                  Yulian.
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 500 22"
                    preserveAspectRatio="none"
                  >
                    <path d="M3 14Q228-3 497 13M33 21Q263 3 477 18" />
                  </svg>
                </span>
              </h1>
              <p className="hero-description">
                I’m a software engineer and full-stack developer based in
                Plovdiv, Bulgaria. Over the past 12+ years, I’ve worked across
                front-end, backend, and architecture, and led small engineering
                teams.
              </p>
              <div className="hero-actions">
                <a href="#work" className="button button-dark">
                  My work
                  <Icon name="external" />
                </a>
                <a href="#about" className="button button-text">
                  About me
                  <Icon name="down" />
                </a>
              </div>
            </div>
          </section>

          <section
            id="work"
            className="work-section section-anchor"
            aria-labelledby="work-heading"
          >
            <SectionLabel id="work-heading" note="2020 — Present">
              My work
            </SectionLabel>
            <div className="project-list">
              {projects.map((project, index) => {
                const preview = (
                  <ProjectPreview
                    imageBase={project.screenshot}
                    alt={project.screenshotAlt}
                    site={project.site}
                  />
                );

                return (
                  <article className="project-row" key={project.name}>
                    <span className="project-number">0{index + 1}</span>
                    <div className="project-copy">
                      <h3>
                        {project.href ? (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {project.name}
                            <span className="sr-only">
                              {" "}
                              (opens in a new tab)
                            </span>
                          </a>
                        ) : (
                          project.name
                        )}
                      </h3>
                      <p className="project-role">{project.role}</p>
                      <p className="project-description">
                        {project.description}
                      </p>
                      <ul
                        className="project-contributions"
                        aria-label="Selected contributions"
                      >
                        {project.contributions.map((contribution) => (
                          <li key={contribution}>{contribution}</li>
                        ))}
                      </ul>
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="project-arrow"
                          aria-label={`Visit ${project.name} (opens in a new tab)`}
                        >
                          Visit website
                          <Icon name="arrow" />
                        </a>
                      ) : (
                        <p className="project-availability">
                          {project.availability}
                        </p>
                      )}
                    </div>
                    {project.href ? (
                      <a
                        className="preview-link"
                        data-project={project.name}
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Explore ${project.name} (opens in a new tab)`}
                      >
                        {preview}
                        <span className="preview-visit">
                          <Icon name="external" />
                        </span>
                      </a>
                    ) : (
                      <div className="preview-link" data-project={project.name}>
                        {preview}
                      </div>
                    )}
                    <p className="project-meta">
                      <span>{project.domain}</span>
                      <span>/</span>
                      <span>{project.dates}</span>
                    </p>
                  </article>
                );
              })}
            </div>
          </section>

          <section
            id="experience"
            className="experience-section section-anchor"
            aria-labelledby="experience-heading"
          >
            <SectionLabel id="experience-heading">Experience</SectionLabel>
            <div className="experience-intro">
              <h3>Where I’ve worked.</h3>
              <p className="experience-years">2013 → 2026</p>
              <p>
                Selected for the Toptal Talent Network in 2019. You can request
                my CV for the full work history.
              </p>
            </div>
            <ol className="chapters">
              {chapters.map((chapter, i) => (
                <li key={chapter.title}>
                  <span className="chapter-number">0{i + 1}</span>
                  <div>
                    <h4>{chapter.title}</h4>
                    <p className="chapter-dates">{chapter.dates}</p>
                    <p className="chapter-companies">{chapter.companies}</p>
                    <p className="chapter-description">{chapter.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a className="resume-link" href={cvRequestHref}>
              Request CV
              <Icon name="external" />
            </a>
          </section>

          <section
            className="principles-section"
            aria-labelledby="principles-heading"
          >
            <SectionLabel id="principles-heading">How I work</SectionLabel>
            <div className="principles">
              {principles.map((principle) => (
                <article key={principle.title}>
                  <Icon className="principle-icon" name={principle.icon} />
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="about"
            className="about-section section-anchor"
            aria-labelledby="about-heading"
          >
            <SectionLabel id="about-heading">Outside work</SectionLabel>
            <div className="about-intro">
              <h3>
                I study psychotherapy.
                <br />I make music, too.
              </h3>
              <p>
                Family and friends matter a lot to me. I like travelling,
                playing padel, and going to the gym. The music is a mix of
                singing, rapping, and producing.
              </p>
            </div>
            <div className="interests">
              {interests.map((interest) => (
                <div className="interest" key={interest.title}>
                  <Icon name={interest.icon} />
                  <div>
                    <h4>{interest.title}</h4>
                    {interest.description && <p>{interest.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section
          id="contact"
          className="contact-section section-anchor"
          aria-labelledby="contact-heading"
        >
          <div className="contact-label">
            <h2 id="contact-heading">Contact</h2>
            <span />
          </div>
          <div className="contact-content">
            <h3>
              You can reach
              <br />
              me here.
            </h3>
            <div className="contact-links">
              <a
                className="social-link"
                href="https://github.com/yuliankarapetkov"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="github" />
                GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                className="social-link"
                href="https://www.linkedin.com/in/yuliankarapetkov/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="linkedin" />
                LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <div className="contact-mail">
                <a
                  href={`mailto:${email}`}
                  className="button button-accent contact-email"
                >
                  Email me
                  <Icon name="external" />
                </a>
                <div className="contact-doodle handwritten" aria-hidden="true">
                  For work, music,
                  <br />
                  or a quick hello.
                  <HandArrow />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer site-shell">
        <a href="#" aria-label="yulian.me — back to top">
          <Brand />
        </a>
        <p>Thanks for stopping by.</p>
      </footer>
    </>
  );
}
