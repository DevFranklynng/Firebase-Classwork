import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    getProduct();
  }, [id]);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#f7f3eb] py-20 text-center">
        Loading product...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f3eb] px-6 py-16 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl bg-white">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-[500px] w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <Link to="/shop" className="mb-6 text-sm underline">
            ← Back to shop
          </Link>

          <p className="uppercase tracking-widest text-gray-500">
            {product.category.replace(/-/g, " ")}
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            {product.title}
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            {product.description}
          </p>

          <p className="mt-6 text-3xl font-bold">${product.price}</p>
          <p className="mt-3">⭐ {product.rating}</p>

          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center rounded-full border border-gray-300">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-lg"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-lg"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              onClick={() => addToCart(product, quantity)}
              className="w-fit rounded-full bg-black px-8 py-4 text-white transition hover:bg-gray-800"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
