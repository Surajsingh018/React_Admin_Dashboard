import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.email === input.email && user?.password === input.password) {
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
    console.log(input);

    setInput({
      email: "",
      password: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-200/70 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="hidden bg-[#101827] p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100">
                Admin Dashboard
              </span>
              <h1 className="mt-8 max-w-sm text-4xl font-bold leading-tight">
                Welcome back to your workspace.
              </h1>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
                Sign in to manage products, track activity, and keep your dashboard moving.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                <p className="text-2xl font-bold">24/7</p>
                <p className="mt-1 text-slate-300">Access</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                <p className="text-2xl font-bold">Fast</p>
                <p className="mt-1 text-slate-300">Control</p>
              </div>
            </div>
          </div>

          <div className="px-6 py-10 sm:px-10 lg:px-12">
            <div className="mx-auto w-full max-w-md">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                  Login
                </p>
                <h2 className="mt-3 text-3xl font-bold text-slate-950">
                  Sign in to continue
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Enter your account details below.
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={input.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={input.password}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-cyan-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200"
                >
                  Login
                </button>

                <p className="text-center text-sm text-slate-500">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="font-semibold text-cyan-700 transition hover:text-cyan-800"
                  >
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
