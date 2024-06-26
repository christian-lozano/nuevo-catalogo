"use client";

import { useRouter, useSearchParams } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

const filters = [
  {
    id: "tipo",
    name: "Tipo",
    options: [
      { value: "ropa", label: "ropa" },
      { value: "calzado", label: "calzado" },
      { value: "accesorios", label: "accesorios" },
    ],
  },
  {
    id: "razonsocial",
    name: "Razon S.",
    options: [
      { label: "F.Sport", value: "fritzsport"},
      { label: "F.Duran", value: "fritzduran"},
      { label: "Alexander", value: "alexanderskate"},
    ],
  },

  {
    id: "genero",
    name: "Género",
    options: [
      { value: "hombre", label: "Hombre" },
      { value: "mujer", label: "Mujer" },
      { value: "unisex", label: "unisex" },
      // { value: "niños", label: "Niños" },
      { value: "niños", label: "Niños" },
    ],
  },

  {
    id: "category",
    name: "Categoria",
    options: [
      { label: "Mochilas", value: "mochilas" },
      { label: "Terrex", value: "terrex" },
      { label: "Urbano", value: "urbano" },
      { label: "Casacas", value: "casacas" },
      { label: "Bolsos", value: "bolsos" },
      { label: "Medias", value: "medias" },
      { label: "Chimpunes", value: "chimpunes" },
      { label: "Plataforma", value: "plataforma" },
      { label: "Originals", value: "originals" },
      { label: "Camisetas", value: "camisetas" },
      { label: "Toma todo", value: "tomatodos" },
      { label: "Buzos", value: "buzos" },
      { label: "Escolar", value: "escolar" },
      { label: "Pantalón", value: "pantalon" },
      { label: "Gorras", value: "gorras" },
      { label: "Shorts", value: "shorts" },
      { label: "Polos", value: "polos" },
      { label: "Sandalias", value: "sandalias" },
      { label: "Running", value: "running" },
      { label: "Poleras", value: "poleras" },
    ],
  },
  // {
  //   id: "size",
  //   name: "Talla",
  //   options: [
  //     { value: "xs", label: "X-Small" },
  //     { value: "s", label: "Small" },
  //     { value: "m", label: "Medium" },
  //     { value: "l", label: "Large" },
  //     { value: "xl", label: "X-Large" },
  //     { value: "one-size", label: "One Size" },
  //   ],
  // },
  {
    id: "marca",
    name: "Marca",
    options: [
      { value: "adidas", label: "adidas" },
      { value: "nike", label: "nike" },
      { value: "puma", label: "puma" },
      { value: "reebok", label: "reebok" },
      { value: "cat", label: "cat" },
      { value: "joma", label: "joma" },
    ],
  },
  {
    id: "tipoprecio",
    name: "T. Venta",
    options: [
      { value: "emprendedor", label: "Emprendedor" },
      
    ],
  },
  {
    id: "tipoproducto",
    name: "Producto", 
    options: [
      { value: "web", label: "Web" },
      { value: "catalogo", label: "Catalogo" },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "blanco", label: "Blanco" },
      { value: "negro", label: "Negro" },
      { value: "azul", label: "Azul" },
      { value: "verde", label: "Verde" },
      { value: "rosa", label: "Rosa" },
      { value: "gris", label: "Gris" },
      { value: "naranja", label: "Naranja" },
      { value: "celeste", label: "celeste" },
      { value: "amarillo", label: "amarillo" },
    ],
  },
];

export function ProductFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchValues = Array.from(searchParams.entries());
  return (
    <form className="sticky top-20">
      <h3 className="sr-only">Categories</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
                {section.name}
                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
                  {searchParams.get(section.id)
                    ? `(${searchParams.get(section.id)})`
                    : ""}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className=" space-y-4">
                {section.options.map((option, optionIdx) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`filter-${section.id}-${optionIdx}`}
                      checked={searchValues.some(
                        ([key, value]) =>
                          key === section.id && value === option.value
                      )}
                      onClick={(event) => {
                        const params = new URLSearchParams(
                          searchParams.toString()
                        );
                        const checked =
                          event.currentTarget.dataset.state === "checked";
                        checked
                          ? params.delete(section.id)
                          : params.set(section.id, option.value);
                        router.replace(`catalogo/?${params.toString()}`);
                      }}
                    />
                    <label
                      htmlFor={`filter-${section.id}-${optionIdx}`}
                      className="text-sm font-medium uppercase leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </form>
  );
}
