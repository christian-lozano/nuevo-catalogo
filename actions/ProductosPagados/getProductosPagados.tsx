"use server";

import { SanityProduct } from "@/config/inventory";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export async function getPedidos(estado: string) {
  const pedidos = await client.fetch<SanityProduct[]>(
    groq`*[_type == "pedidos" && estado match "${estado}"]  | order(_updatedAt desc)`,
    {},

    { cache: "reload", next: { revalidate: 0 } }
  );

  return pedidos;
}

export async function UpdateProductDevolver(id: string, value: string) {
  try {
    const resulta = await client
      .patch(id)
      .set({ estado: `${value}` })
      .commit() // Perform the patch and return a promise
      .then((updatedBike) => {
        console.log(updatedBike);
        return updatedBike;
      })
      .catch((err) => {
        console.error("mover el pedido a: ", err.message);
      });

    console.log(resulta);
  } catch (error) {
    console.log(error);
    return error;
  }
}
