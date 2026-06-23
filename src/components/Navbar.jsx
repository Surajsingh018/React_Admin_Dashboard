import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-20 flex min-h-18 flex-col gap-4 border-b border-slate-200 bg-white px-5 py-4 shadow-lg shadow-slate-200/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <Link
        to="/dashboard"
        className="text-2xl font-extrabold text-teal-700"
      >
        AdminPanel
      </Link>

      <nav className="flex flex-wrap items-center gap-2 text-sm font-bold text-slate-600">
        <Link
          className="rounded-xl px-4 py-2 transition hover:bg-teal-50 hover:text-teal-700"
          to="/dashboard"
        >
          Home
        </Link>
        <Link
          className="rounded-xl px-4 py-2 transition hover:bg-teal-50 hover:text-teal-700"
          to="/products"
        >
          Products
        </Link>
        <Link
          className="rounded-xl px-4 py-2 transition hover:bg-teal-50 hover:text-teal-700"
          to="/dashboard"
        >
          Users
        </Link>
        <button
          className="rounded-xl px-4 py-2 transition hover:bg-teal-50 hover:text-teal-700"
          type="button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
