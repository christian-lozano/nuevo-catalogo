import { CartItems } from "@/components/cart-items";
import TituloCart from "@/components/titulo-cart";

export default function Page() {
  return (
    <>
      <div>
        {" "}
        <div className="sticky top-0 bg-black w-full">
          <TituloCart />
        </div>
        <main className="mx-auto max-w-2xl px-4   sm:px-6 lg:max-w-7xl lg:px-8">
          <form className="mt-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                No hay Items en el catalogo
              </h2>
              {/* Cart Items */}
              <CartItems />
            </section>
            {/* Cart Summary */}
            {/* <CartSummary /> */}
          </form>
        </main>
      </div>
    </>
  );
}
