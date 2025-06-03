import Image from "next/image";
import styles from "./page.module.css";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 3,
  });
  console.log(products);
  return (
    <div>
      <section>
        <div>
          <div>
            <h2>Welcome to my Store</h2>
            <p>Discover the latest product at best price</p>
            <Button asChild variant="default">
              <Link href="/products">Browse All products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
