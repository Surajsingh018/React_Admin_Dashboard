import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`https://dummyjson.com/products/${id}`);

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-8">
        <p className="rounded-2xl bg-white px-6 py-4 font-bold text-slate-600 shadow-lg">
          Loading product...
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-8">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-xl">
          <h1 className="text-2xl font-bold text-slate-950">{error}</h1>
          <Link
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-teal-700 px-5 text-sm font-bold text-white hover:bg-teal-800"
            to="/products"
          >
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <section className="mx-auto grid w-full max-w-6xl gap-6 rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/70 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
        <div className="rounded-2xl bg-slate-50 p-4">
          <img
            className="h-80 w-full rounded-xl object-contain"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>

        <div className="flex flex-col">
          <Link
            className="mb-5 text-sm font-bold text-teal-700 hover:text-teal-800"
            to="/products"
          >
            Back to Products
          </Link>

          <span className="w-fit rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold capitalize text-teal-700">
            {product.category}
          </span>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            {product.title}
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-500">
            {product.description}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Price
              </p>
              <strong className="mt-2 block text-xl text-slate-950">
                ${product.price}
              </strong>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Rating
              </p>
              <strong className="mt-2 block text-xl text-slate-950">
                {product.rating}
              </strong>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Stock
              </p>
              <strong className="mt-2 block text-xl text-slate-950">
                {product.stock}
              </strong>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Brand
              </p>
              <strong className="mt-2 block truncate text-xl text-slate-950">
                {product.brand || "N/A"}
              </strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
