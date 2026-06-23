import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getproducts } from "../services/api";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [edit, setEdit] = useState(null);

  useEffect(()=>{
    const fetchproducts = async ()=>{
      const data = await getproducts();
      setProducts(data)
    }
    fetchproducts();
  },[])

  const handleAddproducts = () => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    if (edit) {
      const updateproduct = products.map((product) => {
        if (product.id === edit) {
          return {
            ...product,
            title: trimmedTitle,
          };
        }
        return product;
      });
      setProducts(updateproduct);
      setTitle("");
      setEdit(null);
      return;
    }
    const newproducts = {
      id: Date.now(),
      title: trimmedTitle,
      description: "New product added locally.",
      category: "custom",
      price: 100,
    };
    setProducts([...products, newproducts]);
    setTitle("");
  };
  const handleDelete = (id) => {
    const filterdelete = products.filter((product) => product.id !== id);
    setProducts(filterdelete);
  };
  const handleEdit = (id) => {
    const editproducts = products.find((product) => product.id === id);
    if (!editproducts) {
      return;
    }
    setTitle(editproducts.title);
    setEdit(id);
  };
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <section className="mx-auto mb-6 w-full max-w-6xl rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
            Inventory
          </p>
          <h1 className="text-3xl font-bold text-slate-950 sm:text-4xl">
            Products
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">
            Manage your product list, update titles, and open details quickly.
          </p>
        </div>
      </section>

      <section className="mx-auto mb-6 flex w-full max-w-6xl flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/60 sm:flex-row">
        <input
          className="min-h-12 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
          type="text"
          placeholder="Product name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="min-h-12 rounded-xl bg-teal-700 px-5 text-sm font-bold text-white shadow-lg shadow-teal-700/20 transition hover:-translate-y-0.5 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-100"
          onClick={handleAddproducts}
        >
          {edit ? "Update Product" : "Add Product"}
        </button>
      </section>

      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => {
          return (
            <article
              className="flex min-h-72 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/60"
              key={product.id}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="max-w-40 truncate rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold capitalize text-teal-700">
                  {product.category}
                </span>
                <strong className="text-lg font-bold text-slate-950">
                  ${product.price}
                </strong>
              </div>

              <h2 className="text-xl font-bold leading-snug text-slate-950">
                {product.title}
              </h2>
              <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-slate-500">
                {product.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  className="min-h-10 rounded-xl bg-rose-50 px-4 text-sm font-bold text-rose-700 transition hover:-translate-y-0.5 hover:bg-rose-700 hover:text-white"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
                <button
                  className="min-h-10 rounded-xl bg-slate-100 px-4 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:bg-blue-100 hover:text-blue-700"
                  onClick={() => handleEdit(product.id)}
                >
                  Edit
                </button>
                <Link
                  className="inline-flex min-h-10 items-center justify-center rounded-xl bg-teal-700 px-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-teal-800"
                  to={`/products/${product.id}`}
                >
                  View Details
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Product;
