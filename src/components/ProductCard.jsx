import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (event) => {
   
    event.preventDefault();
    event.stopPropagation();
    addToCart(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="h-64 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <p className="text-sm capitalize text-gray-500">
          {product.category.replace(/-/g, " ")}
        </p>

        <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-bold">${product.price}</p>
          <button
            type="button"
            onClick={handleAddToCart}
            className="rounded-full bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
