import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="flex gap-2 overflow-x-auto rounded-2xl bg-slate-900 p-4 text-slate-200 shadow-xl shadow-slate-300/60 lg:sticky lg:top-24 lg:min-h-[calc(100vh-120px)] lg:flex-col lg:gap-0 lg:p-6">
      <p className="hidden pb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-slate-400 lg:block">
        Menu
      </p>

      <Link
        to="/dashboard"
        className="min-h-11 shrink-0 rounded-xl bg-teal-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-teal-600 lg:mb-2"
      >
        Dashboard
      </Link>
      <Link
        to="/products"
        className="min-h-11 shrink-0 rounded-xl px-4 py-3 text-sm font-bold text-slate-300 transition hover:bg-teal-500 hover:text-white lg:mb-2"
      >
        Products
      </Link>
      <Link
        to="/dashboard"
        className="min-h-11 shrink-0 rounded-xl px-4 py-3 text-sm font-bold text-slate-300 transition hover:bg-teal-500 hover:text-white lg:mb-2"
      >
        Orders
      </Link>
      <Link
        to="/dashboard"
        className="min-h-11 shrink-0 rounded-xl px-4 py-3 text-sm font-bold text-slate-300 transition hover:bg-teal-500 hover:text-white lg:mb-2"
      >
        Customers
      </Link>
      <Link
        to="/dashboard"
        className="min-h-11 shrink-0 rounded-xl px-4 py-3 text-sm font-bold text-slate-300 transition hover:bg-teal-500 hover:text-white lg:mb-2"
      >
        Settings
      </Link>
    </aside>
  );
};

export default Sidebar;
