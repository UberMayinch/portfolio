import { useEffect } from "react";
import { Link } from "react-router-dom";
import { site } from "@/site";
import { BookingLink } from "@/components/Layout";

const SectionTitle = ({ children }) => (
  <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{children}</h2>
);

export const Home = () => {
  useEffect(() => {
    document.title = site.name;
  }, []);

  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="space-y-5">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Hi, I'm Chinmay.</h1>
        <p className="text-lg sm:text-xl text-muted">{site.tagline}</p>
        <p className="max-w-prose">{site.intro}</p>
      </section>

      <section className="space-y-6">
        <SectionTitle>What I do</SectionTitle>
        <ul className="divide-y divide-border border-y border-border">
          {site.work.map((item) => (
            <li key={item.title} className="py-5 grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-6">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
        <Link to="/resume" className="link inline-block">
          Read the full resume &rarr;
        </Link>
      </section>

      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Let's talk</h2>
        <p className="text-muted max-w-prose">
          Research, a project, or an opportunity: pick a time that works for you, or send me an
          email.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <BookingLink className="btn-primary">Book a call</BookingLink>
          <a href={`mailto:${site.email}`} className="btn-secondary">
            Email me
          </a>
        </div>
      </section>
    </div>
  );
};
