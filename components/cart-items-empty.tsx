"use client";

import Link from "next/link";
import { Plus, XCircle } from "lucide-react";

export function CartItemsEmpty() {
  return (
    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border-2 border-dashed border-gray-300 dark:border-gray-800">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <XCircle className="h-10 w-10 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold">
          No se encontraron Productos en el Catalogo
        </h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          Añade productos a tu Catalogo.
        </p>
        <Link href="/fritzsport/catalogo">
          <button className="relative flex justify-around items-center">
            <Plus className="mr-2 h-4 w-4" />
            Agregar Productos
          </button>
        </Link>
      </div>
    </div>
  );
}
