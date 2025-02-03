import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full max-w-6xl px-4 sm:px-6 relative mx-auto">
      <div className="w-full relative mx-auto rounded-2xl mt-4 md:mt-5 bg-dark-grey text-white p-4 before:pointer-events-none before:absolute before:inset-0 before:bg-[var(--custom-gradient-blue)] z-30 border-1 border-border-white">

        <nav>
          <ul className="flex justify-between items-center gap-6">
            <li>
              <NavLink
                to="/"
              >
                Logo Here
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  isActive ? "btn-primary text-sm" : "btn-primary text-sm"
                }
              >
                My Work
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;