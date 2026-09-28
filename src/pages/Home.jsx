import { useEffect, useState } from "react";
import Hero from "../components/Hero";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=8"
        );

        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f3eb]">
        <p className="text-xl">Loading products...</p>
      </main>
    );
  }

  return <Hero products={products} />;
}

export default Home;