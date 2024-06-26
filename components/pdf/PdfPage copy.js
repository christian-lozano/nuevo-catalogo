import { Text, Page, StyleSheet, Image, View, Font } from "@react-pdf/renderer";

// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";

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
    // {
    //   src: "http://fonts.gstatic.com/s/antic/v19/TuGfUVB8XY5DRaZLodgzydtk.ttf",
    //   fontWeight: "normal",
    //   fontStyle: "italic",
    // },
  ],
});
const styles = StyleSheet.create({
  page: {
    width: "100vw",
    height: "100vh",
    fontFamily: "Anton",
    fontStyle: "italic",
    fontWeight: "400",
    margin: 0,
    padding: 0,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  section: {
    width: "100vw",
    height: "100vh",
    // display: "flex",
    // flexDirection: "column",
  },
  parragraph: {
    fontSize: 12,
    textAlign: "justify",
    lineHeight: 1.5,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  imagen: {
    width: "100vw",
    height: "750px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  imagensContainer: {
    width: "100vw",
    height: "150px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
  },
  imagenSub: {
    width: "100px",
    height: "100px",
    backgroundColor: "#fff",
    borderRadius: "50%",
  },
  container: {
    // backgroundColor: "#5054",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100vw",
    height: "100%",
  },
  containerSub: {
    padding: "5px",
    // position: "absolute",
    // right: "0",
    display: "flex",
    flexDirection: "column",
    justifyItems: "space-between",
    alignItems: "center",
    width: "78%",
    height: "100%",
  },
  containerTitle: {
    fontSize: "25px",
    textAlign: "center",
  },
  containerCodigoTallas: {
    marginTop: "5px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerCodigoTallasText: {
    width: "100%",
    fontSize: "20px",
    textAlign: "center",
  },
  containerPrecio: {
    width: "100%",
    fontSize: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerPrecioCard: {
    marginTop: "10px",
    width: "49%",
    height: "100%",
    fontSize: "20px",
    display: "flex",

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    padding: "5px",
  },
  containerPrecioCardText: {
    fontWeight: "900",
  },
});
export default function PdfPage({ producto, catalogo }) {
  // const catalogo = await client.fetch(groq`*[_type == "catalogo"]`);
  return (
    <Page style={styles.page}>
      <View style={styles.section}>
        <Image
          style={{
            height: "180px",
          }}
          src={
            catalogo.imgheader
              ? urlForImage(catalogo.imgheader.asset._ref).url()
              : undefined
          }
        />
        <View style={styles.container}>
          <View style={styles.containerSub}>
            <Text style={styles.containerTitle}>{producto.name}</Text>
            <View style={styles.containerCodigoTallas}>
              <View style={styles.containerCodigoTallasText}>
                <Text style={styles.containerCodigoTallasText}>
                  CÓDIGO: {producto.sku}
                </Text>
              </View>
              <View style={styles.containerCodigoTallasText}>
                <Text>TALLAS: {producto.tallas}</Text>
              </View>
            </View>
            <View style={styles.containerPrecio}>
              <View style={styles.containerPrecioCard}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                  }}
                  src={urlForImage(catalogo.imgprice.asset._ref).url()}
                />

                <View>
                  <Text>PRECIO RETAIL</Text>
                </View>
                <Text style={styles.containerPrecioCardText}>
                  S/
                  {producto.priceecommerce &&
                    producto.priceecommerce.toFixed(2)}
                </Text>
              </View>
              <View style={styles.containerPrecioCard}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                  }}
                  src={urlForImage(catalogo.imgprice.asset._ref).url()}
                />

                <View>
                  <Text>PRECIO MAYORISTA</Text>
                </View>
                <Text style={styles.containerPrecioCardText}>
                  S/
                  {producto.pricemayorista &&
                    producto.pricemayorista.toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            // maxWidth: "1000px",
            height: "100%",
            // backgroundColor: "#04540",
            position: "absolute",
            display: `flex`,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            // bottom: "-280px",
            bottom: `-100px`,

            zIndex: "5",
          }}
        >
          <Image
            style={{
              width: `400px`,
            }}
            src={
              producto.images
                ? urlForImage(producto.images[0].asset._ref).url()
                : "http://via.placeholder.com/2000x2000"
            }
          />
        </View>

        {/* {producto.imagecatalogo && (
          <View style={styles.imagensContainer}>
            {producto.imagecatalogo.map((el) => (
              <View key={el._key}>
                <Image
                  style={styles.imagenSub}
                  src={el.asset ? urlForImage(el.asset._ref).url() : ""}
                />
              </View>
            ))}
          </View>
        )} */}

        <Image
          style={{
            height: "130px",
          }}
          src={
            catalogo.imgfooter
              ? urlForImage(catalogo.imgfooter.asset._ref).url()
              : undefined
          }
        />
      </View>

      <View style={styles.pageNumber}>
        <Text
          render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`}
        />
      </View>
    </Page>
  );
}
