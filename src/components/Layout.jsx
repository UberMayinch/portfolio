import { NavLink, Outlet } from "react-router-dom";
import { site, bookingHref } from "@/site";

const navClass = ({ isActive }) =>
  `transition-colors ${isActive ? "text-foreground" : "text-muted hover:text-foreground"}`;

export const BookingLink = ({ className, children = "Book a call" }) => (
  <a
    href={bookingHref}
    target={site.calendarUrl ? "_blank" : undefined}
    rel="noopener noreferrer"
    className={className}
  >
    {children}
  </a>
);

export const Layout = () => (
  <div className="min-h-screen flex flex-col max-w-2xl mx-auto px-5 sm:px-6">
    <header className="flex items-center justify-between gap-4 py-6 sm:py-8">
      <NavLink to="/" className="font-semibold tracking-tight">
        {site.name}
      </NavLink>
      <nav className="flex items-center gap-4 sm:gap-6 text-sm">
        <NavLink to="/" end className={(s) => `hidden sm:inline ${navClass(s)}`}>
          Home
        </NavLink>
        <NavLink to="/resume" className={navClass}>
          Resume
        </NavLink>
        <BookingLink className="btn-primary btn-sm">Book a call</BookingLink>
      </nav>
    </header>

    <main className="flex-1 pt-8 sm:pt-12">
      <Outlet />
    </main>

    <footer className="mt-20 py-8 border-t border-border flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-muted">
      <p>&copy; {new Date().getFullYear()} {site.name}</p>
      <ul className="flex gap-5">
        {site.links.map((l) => (
          <li key={l.name}>
            <a
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {l.name}
            </a>
          </li>
        ))}
        <li>
          <a href={`mailto:${site.email}`} className="hover:text-foreground transition-colors">
            Email
          </a>
        </li>
      </ul>
    </footer>
  </div>
);
