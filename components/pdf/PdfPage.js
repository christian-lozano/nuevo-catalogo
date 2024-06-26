"use client";
import { Text, Page, StyleSheet, Image, View, Font } from "@react-pdf/renderer";

// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import { useEffect, useState } from "react";

Font.register({
  family: "Anton",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/anton/v25/1Ptgg87LROyAm0K08i4gS7lu.ttf",
      fontStyle: "regular",
    },
    {
      src: "https://fonts.gstatic.com/s/anton/v25/1Ptgg87LROyAm0K08i4gS7lu.ttf",
      fontStyle: "italic",
    },
  ],
});
export default function PdfPage({ producto, catalogo, cliente }) {
  console.log(catalogo);
  const [marca, setMarca] = useState(
    "https://cdn.sanity.io/images/ibvmpbc1/production/4a5cdee84967d0d4fa665fcde4263e8128a52909-196x196.png"
  );

  useEffect(() => {
    switch (producto.marca) {
      case "adidas":
        setMarca(
          "https://cdn.sanity.io/images/ibvmpbc1/production/ee995528aa127d0552dd5316aa8847ffe79adc8b-196x196.png"
          // "https://cdn.sanity.io/images/ibvmpbc1/production/cd1b361ec671d423bb0a230d9cd835e3d6a9846b-196x196.png "
        );
        break;
      case "nike":
        setMarca(
          "https://cdn.sanity.io/images/ibvmpbc1/production/c4f4c571a1e591fa12e147037f7b4fcf33dea577-196x196.png"
        );
        break;

      case "puma":
        setMarca(
          "https://cdn.sanity.io/images/ibvmpbc1/production/1fedf9b4cf21a09455a9f4682f1f3a3e8363eaf0-196x196.png"
        );
        break;

      case "reebok":
        setMarca(
          "https://cdn.sanity.io/images/ibvmpbc1/production/cd1b361ec671d423bb0a230d9cd835e3d6a9846b-196x196.png"
        );
        break;

      case "cat":
        setMarca(
          "https://cdn.sanity.io/images/ibvmpbc1/production/dfec7f2c3b0955688ff05e7c771ec2aabd783447-196x196.png"
        );
        break;

      case "joma":
        setMarca(
          "https://cdn.sanity.io/images/ibvmpbc1/production/635fcf2b7a9a4419d5df7ad015b54ae53db8f93e-196x196.png"
        );
        break;

      case "fritzsport":
        setMarca(
          "https://cdn.sanity.io/images/ibvmpbc1/production/4a5cdee84967d0d4fa665fcde4263e8128a52909-196x196.png"
        );
        break;

      default:
        setMarca(
          "https://cdn.sanity.io/images/ibvmpbc1/production/4a5cdee84967d0d4fa665fcde4263e8128a52909-196x196.png"
        );
        break;
    }
  }, []);

  // const catalogo = await client.fetch(groq`*[_type == "catalogo"]`);
  return (
    <Page
      wrap={false}
      style={{
        fontFamily: "Anton",
        marginTop: "0px",
        fontSize: "14px",
        fontStyle: "regular",
        fontWeight: "200",
        margin: 0,
        padding: 0,
        height: "100vh",
        // backgroundColor: "red",
      }}
    >
      <Image
        style={{
          position: "relative",
          height: "100vh",
          marginTop: "0px",
        }}
        src={catalogo.imgfondo}
      />
      <View
        fixed
        style={{
          width: "100vw",
          height: "98vh",
          position: "absolute",
          marginTop: "0px",
        }}
      >
        {/* /*---------------------------------*/
        /* logo ,Nombre , sku*/
        /*---------------------------------*/}
        <View
          style={{
            top: "0px",
            // position: "absolute",
            width: "100%",

            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "75px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",

              backgroundColor: "black",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingLeft: "35px",
              }}
            >
              {!cliente && (
                <Image
                  style={{
                    height: "45px",
                  }}
                  src={
                    "https://cdn.sanity.io/images/ibvmpbc1/production/a1fb6fde2d9ceb5cc909ba12cc794708e5702b6e-1042x678.png"
                  }
                />
              )}
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  fontSize: "17px",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                {producto.name}
              </Text>
            </View>
            {/* <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                    color: "white",
                    fontSize: "17px",
                    backgroundColor: "#000",
                  }}
                >
                  {producto.sku}
                </Text>
              </View> */}
          </View>
        </View>
        {/* ------------------- */}

        {/* /*---------------------------------*/
        /*Imagen Principal*/
        /*---------------------------------*/}
        <View
          style={{
            top: "0px",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {producto.tipo === "calzado" ? (
            producto.marca !== "nike" ? (
              <View
                style={{
                  width: "100%",
                  height: "500px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  transform: "translate(35px, 0px) rotate(30deg)",
                }}
              >
                <Image
                  style={{
                    transform: "scale(1.4, 1.4)",
                  }}
                  src={producto.imgcatalogomain}
                  // src={urlForImage(producto.imgcatalogomain.asset._ref).url()}
                />
              </View>
            ) : (
              <View
                style={{
                  width: "100%",
                  height: "500px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  transform: "translate(70px, 0px) rotate(30deg)",
                }}
              >
                <Image
                  style={{
                    transform: "scale(1.4, 1.4)",
                  }}
                  src={producto.imgcatalogomain}
                  // src={urlForImage(producto.imgcatalogomain.asset._ref).url()}
                />
              </View>
            )
          ) : (
            <View
              style={{
                width: "100%",
                height: "500px",
                display: "flex",
                marginTop: "17px",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Image
                // style={{
                //   transform: "scale(1.4, 1.4)",
                // }}
                src={producto.imgcatalogomain}
                // src={urlForImage(producto.imgcatalogomain.asset._ref).url()}
              />
            </View>
          )}
        </View>
        {/* /*---------------------------------*/
        /*Detalles y Precios*/
        /*---------------------------------*/}
        <View
          style={{
            top: "0px",
            // position: "absolute",
            width: "100%",

            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",

              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              gap: "0px 5px",
            }}
          >
            {/* precios */}

            <View
              style={{
                width: "80%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "10px 0px",
                justifyContent: "space-around",
              }}
            >
              {cliente ? (
                <>
                  <View
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>Tallas:</Text>
                    <Text>{producto.tallascatalogo}</Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>S/...............</Text>
                  </View>
                </>
              ) : (
                <>
                  <View
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>Tallas:</Text>
                    <Text>{producto.tallascatalogo}</Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>Precio Retail</Text>
                    <Text>
                      S/
                      {producto.priceecommerce &&
                        producto.priceecommerce.toFixed(2)}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>
                      Precio {producto.tipoprecio ? "Emprendedor" : "Mayorista"}
                    </Text>
                    <Text>
                      S/
                      {producto.pricemayorista &&
                        producto.pricemayorista.toFixed(2)}
                    </Text>
                  </View>
                </>
              )}
            </View>
            {/* Imagen  mid*/}
            {/* Imagen  mid*/}

            {/* <View
              style={{
                width: "100%",
                height: "100%",
      
              }}
            >
              {producto.imagecatalogo2 && (
                <Image
                  style={{
                    borderRadius: "50%",
                    border: "2px solid #fff",
                  }}
                  src={producto.imagecatalogo2}
                />
              )}
            </View> */}
            {/* Imagen  con Marca*/}

            <View
              style={{
                width: "80%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "5px",
                alignItems: "flex-end",
              }}
            >
              {/* {producto.imagecatalogo3 && (
                <Image
                  style={{
                    height: "180px",
                    borderRadius: "50%",
                    border: "2px solid #fff",
                  }}
                  src={producto.imagecatalogo3}
                />
              )} */}
              {/* sku*/}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                    color: "white",
                    fontSize: "21px",
                    backgroundColor: "#000",
                  }}
                >
                  {producto.sku}
                </Text>
              </View>
              <View
                style={{
                  marginTop: "5px",
                  width: "50%",
                  backgroundColor: "black",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  // border: "2px solid #fff",
                }}
              >
                {/* marca */}
                {producto.marca && (
                  <Image
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                    src={marca}
                  />
                )}
              </View>
            </View>
          </View>
        </View>

        {/* /*---------------------------------*/
        /*Footer*/
        /*---------------------------------*/}
      </View>
      <View
        style={{
          // marginTop: "6px",
          // position: "absolute",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "black",
          color: "white",
          letterSpacing: "2px",
          padding: "3px",
          fontSize: "10px",
        }}
      >
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>FRITZSPORT.PE</Text>
          <Text>
            {producto.genero.toUpperCase()}-{producto.categoria.toUpperCase()}
          </Text>
          <Text
            render={({ pageNumber, totalPages }) =>
              `PAGINA ${pageNumber}/${totalPages}`
            }
          />
        </View>
      </View>
      {/* <View style={styles.pageNumber}>
        <Text
          render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`}
        />
      </View> */}
    </Page>
  );
}
