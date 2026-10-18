import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">

        {/* Custom logo and name */}
        <NavLink className="brand" to="/">
          <svg
            className="logo"
            viewBox="0 0 100 100"
            role="img"
            aria-label="SJH circle logo"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="#16303a"
            />

            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#0f8b8d"
              strokeWidth="5"
            />

            <text
              x="50"
              y="59"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="24"
              fontWeight="bold"
              fill="#9fd8d4"
            >
              SJH
            </text>
          </svg>

          <span className="brand-name">
            Shumaya Jannat Hera
          </span>
        </NavLink>

        {/* Mobile menu button */}
        <button
          className="nav-toggle"
          aria-label="Show menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>

        {/* Navigation */}
        <nav className={`site-nav ${menuOpen ? "open" : ""}`}>
          <ul className="main-nav">

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                About Me
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/education"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                Education
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                Contact Me
              </NavLink>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;