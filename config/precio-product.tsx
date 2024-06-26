export const precioProduct = (
  descuento: number | string | undefined,
  precioEcommerce: number | string | undefined,
  precioManual: number | string | undefined
) => {
  let resultado: Number;
  if (precioManual) {
    if (Number(precioManual) < 20) {
      resultado = 999;
    } else {
      resultado = Number(precioManual);
    }
  } else {
    const precio = precioEcommerce;

    if (Number(precio) < 20 || null) {
      resultado = 999;
    } else {
      const operation = (Number(descuento) / 100) * Number(precio);
      resultado = Number(precio) - operation;
    }
  }

  return Number(resultado.toFixed(0));
};
