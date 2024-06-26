import { urlForImage } from "@/sanity/lib/image";
import { Document, Text, Page, Image, View } from "@react-pdf/renderer";

import PdfPage from "@/components/pdf/PdfPage";

export default function PDF({ items, catalogo }) {
  let productosCantidad = items.map((el) => {
    let productos = {
      id: el.id,
      sku: el.sku,
      tallas: el.tallas,
      name: el.name,
      img: el.image,
      title: el.name,
      imagecatalogoprincipal: el.imgcatalogomain,
      imagecatalogo: el.imagenes,
      sku: el.sku,
      price: el.price,
      pricemayorista: el.pricemayorista,
      slug: el.slug,
      genero: el.genero,
      tipoprecio: el.tipoprecio,
      marca: el.marca,
      categoria: el.categories,
    };

    return productos;
  });

  const dataFiltros = {
    data: [
      {
        marca: "adidas",
        imagenPortada: catalogo.imgadidas.asset._ref,
        generos: [
          {
            imgPortadaGenero: catalogo.imghombre.asset._ref,
            genero: "hombre",
          },
          {
            imgPortadaGenero: catalogo.imghombre.asset._ref,
            genero: "mujer",
          },
          {
            imgPortadaGenero: catalogo.imghombre.asset._ref,
            genero: "niños",
          },
        ],
      },
      {
        marca: "nike",
        imagenPortada: catalogo.imgnike.asset._ref,
        generos: [
          {
            imgPortadaGenero: catalogo.imghombre.asset._ref,
            genero: "hombre",
          },
          {
            imgPortadaGenero: catalogo.imghombre.asset._ref,
            genero: "mujer",
          },
          {
            imgPortadaGenero: catalogo.imghombre.asset._ref,
            genero: "niños",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Document>
        {dataFiltros.data.map((marca) => (
          <>
            {productosCantidad.filter((el) => el.marca === marca.marca).length >
              0 && (
              <>
                <Page>
                  <Image src={urlForImage(marca.imagenPortada).url()} />
                </Page>

                {marca.generos.map((genero) => (
                  <>
                    {productosCantidad.filter(
                      (el) =>
                        el.genero === genero.genero && el.marca === marca.marca
                    ).length > 0 && (
                      <>
                        <Page>
                          <Image
                            src={urlForImage(
                              catalogo.imghombre.asset._ref
                            ).url()}
                          />
                        </Page>
                        {productosCantidad
                          .filter(
                            (el) =>
                              el.genero === genero.genero &&
                              el.marca === marca.marca
                          )
                          .map((el) => (
                            <PdfPage
                              catalogo={catalogo}
                              key={el.id}
                              producto={el}
                            />
                          ))}
                      </>
                    )}
                  </>
                ))}
              </>
            )}
          </>
        ))}

        {/* nike */}
        {/* {productosCantidad.filter((el) => el.marca === "nike").length > 0 && (
          <>
            <Page>
              <Image src={urlForImage(catalogo.imgnike.asset._ref).url()} />
            </Page>
            {productosCantidad.filter(
              (el) => el.genero === "hombre" && el.marca === "nike"
            ).length > 0 && (
              <>
                <Page>
                  <Image
                    src={urlForImage(catalogo.imghombre.asset._ref).url()}
                  />
                </Page>
                {productosCantidad
                  .filter((el) => el.genero === "hombre" && el.marca === "nike")
                  .map((el) => (
                    <PdfPage key={el.id} producto={el} />
                  ))}
              </>
            )}
            {productosCantidad.filter(
              (el) => el.genero === "mujer" && el.marca === "nike"
            ).length > 0 && (
              <>
                <Page>
                  <Image
                    src={urlForImage(catalogo.imgmujer.asset._ref).url()}
                  />
                </Page>
                {productosCantidad
                  .filter((el) => el.genero === "mujer" && el.marca === "nike")
                  .map((el) => (
                    <PdfPage key={el.id} producto={el} />
                  ))}
              </>
            )}
            {productosCantidad.filter(
              (el) => el.genero === "niños" && el.marca === "nike"
            ).length > 0 && (
              <>
                <Page>
                  <Image
                    src={urlForImage(catalogo.imgninos.asset._ref).url()}
                  />
                </Page>
                {productosCantidad
                  .filter((el) => el.genero === "niños" && el.marca === "nike")
                  .map((el) => (
                    <PdfPage key={el.id} producto={el} />
                  ))}
              </>
            )}
          </>
        )} */}
      </Document>
    </>
  );
}
