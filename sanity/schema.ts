import { type SchemaTypeDefinition } from "sanity";

import { product } from "./schemas/product-schema";
import { catalogo } from "./schemas/catalogo-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, catalogo],
};
