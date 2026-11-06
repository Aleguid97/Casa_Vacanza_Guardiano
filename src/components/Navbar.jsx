import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu, chiudiMenu } from "../features/ui/uiSlice";

const links = [
  { to: "/", label: "Home" },
  { to: "/camere", label: "Camere" },
  { to: "/contatti", label: "Contatti" },
];

function Navbar() {
  const menuAperto = useSelector((state) => state.ui.menuAperto);
  const dispatch = useDispatch();

  const classiLink = ({ isActive }) =>
    `block rounded-md px-3 py-2 text-sm font-medium ${
      isActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
    }`;

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="text-lg font-semibold text-slate-900" onClick={() => dispatch(chiudiMenu())}>
          Casa Vacanza Guardiano
        </NavLink>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end className={classiLink}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-md border border-slate-300 px-3 py-2 text-sm md:hidden"
          onClick={() => dispatch(toggleMenu())}
          aria-expanded={menuAperto}
        >
          {menuAperto ? "Chiudi" : "Menu"}
        </button>
      </div>

      {menuAperto && (
        <ul className="space-y-1 border-t border-slate-200 px-4 py-2 md:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end className={classiLink} onClick={() => dispatch(chiudiMenu())}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
