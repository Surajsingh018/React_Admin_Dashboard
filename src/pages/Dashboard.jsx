import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { getproducts } from "../services/api";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchproducts = async () => {
      const data = await getproducts();
      setProducts(data);
    };
    fetchproducts();
  }, []);
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />

      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-6 p-4 lg:grid-cols-[260px_minmax(0,1fr)] lg:p-6">
        <Sidebar />

        <main className="min-w-0">
          <section className="mb-6 flex flex-col gap-5 rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.2em] text-teal-700">
                Overview
              </p>
              <h1 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Welcome {user?.username}
              </h1>
              <p className="mt-3 max-w-xl text-base leading-7 text-slate-500">
                Track your products, users, and recent activity from one place.
              </p>
            </div>

            <button
              type="button"
              className="min-h-12 rounded-xl bg-teal-700 px-5 text-sm font-bold text-white shadow-lg shadow-teal-700/20 transition hover:-translate-y-0.5 hover:bg-teal-800"
            >
              Add Product
            </button>
          </section>

          <section className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60">
              <span className="text-sm font-bold text-slate-500">
                Total Products{" "}
              </span>
              <strong className="mt-3 block text-3xl font-bold text-slate-950">
                {products.length}
              </strong>
              <p className="mt-3 text-sm font-bold text-teal-700">
                12 added this week
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60">
              <span className="text-sm font-bold text-slate-500">
                Total Users
              </span>
              <strong className="mt-3 block text-3xl font-bold text-slate-950">
                2,430
              </strong>
              <p className="mt-3 text-sm font-bold text-teal-700">
                8.4% growth
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60">
              <span className="text-sm font-bold text-slate-500">Orders</span>
              <strong className="mt-3 block text-3xl font-bold text-slate-950">
                846
              </strong>
              <p className="mt-3 text-sm font-bold text-teal-700">42 pending</p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60">
              <span className="text-sm font-bold text-slate-500">Revenue</span>
              <strong className="mt-3 block text-3xl font-bold text-slate-950">
                $18.2k
              </strong>
              <p className="mt-3 text-sm font-bold text-teal-700">
                Updated today
              </p>
            </article>
          </section>

          <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-slate-950">
                  Recent Activity
                </h2>
                <button
                  className="rounded-xl bg-teal-50 px-4 py-2 text-sm font-bold text-teal-700"
                  type="button"
                >
                  View all
                </button>
              </div>

              <div className="grid gap-4">
                <div className="grid grid-cols-[12px_minmax(0,1fr)] gap-4 rounded-xl bg-slate-50 p-4">
                  <span className="mt-1.5 h-3 w-3 rounded-full bg-sky-500"></span>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      New product uploaded
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Wireless headphones were added to inventory.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[12px_minmax(0,1fr)] gap-4 rounded-xl bg-slate-50 p-4">
                  <span className="mt-1.5 h-3 w-3 rounded-full bg-green-600"></span>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Order completed
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Order #2034 was marked as delivered.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[12px_minmax(0,1fr)] gap-4 rounded-xl bg-slate-50 p-4">
                  <span className="mt-1.5 h-3 w-3 rounded-full bg-orange-500"></span>
                  <div>
                    <h3 className="font-bold text-slate-900">Stock alert</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Smart watch inventory is running low.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
              <div className="mb-5">
                <h2 className="text-xl font-bold text-slate-950">
                  Top Products
                </h2>
              </div>
              {products.slice(0, 5).map((product) => (
                <div key={product.id}>
                  <span> {product.title} </span>
                  <strong>${product.price}</strong>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
