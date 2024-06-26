
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log(data);

    // data.map((el: any) => {
    //   client
    //     .patch({ query: `*[_type == "product" &&  sku match "${el.sku}"]` }) // Document ID to patch
    //     .set({
    //       priceecommerce: Number(el.precio),
    //       stock: Number(el.stock),
    //       tipoproducto: String(el.tipoproducto),
    //     }) // Shallow merge
    //     .commit() // Perform the patch and return a promise
    //     .then((updatedBike) => {
    //       console.log(updatedBike);
    //     })
    //     .catch((err) => {
    //       console.error("Oh no, the update failed: ", err.message);
    //       return err.message;
    //     });
    // });const pThrottle = require('p-throttle')

    // const persistSpeakerBatch = pThrottle(
    //   // Define the function to be called when ready
    //   (batch) =>
    //     batch.reduce(
    //       (trx, speaker) => trx.createOrReplace(speaker),
    //       client.transaction()
    //     ),
    //   // Max 20 requests
    //   20,
    //   // Within a 1 second window
    //   1000
    // );
    // const throttle = pThrottle({
    //   limit: 10,
    //   interval: 5000,
    //   onDelay: () => {
    //     console.log("Reached interval limit, call is delayed");
    //   },
    // });

    // const throttledD = async (dt) => {
    //   await dt.map((el: any) => {
    //     const doc = {
    //       _id: el.sku,
    //       _type: "test",
    //       name: "admintest1555",
    //       sku: "5445asd",
    //       tipo: "ropa",
    //     };
    //     client.createOrReplace(doc).then((res) => {
    //       console.log(`Bike was created, document ID is ${res._id}`);
    //     });
    //   });

    //   throttle(() => {
    //     console.log("Executing...");
    //   });
    // };

    // let batch = [];

    // for (let i = 0; i < data.length; i++) {
    //   batch.push(data[i]);
    //   if (batch.length === 10 || (i === data.length - 1 && batch.length > 0)) {
    //     throttledD(batch);
    //     batch = [];
    //   }
    // }

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      data,
    });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// export async function POST(request: NextRequest) {
//   try {
//     const data = await request.json();
//     console.log(data);

//     data.map((el: any) => {
//       const doc = {
//         _id: el.sku,
//         _type: "test",
//         name: "Sanity Tandem Extraordinaire",
//         sku: "5445",
//         tipo: "ropa",
//       };

//       client.createOrReplace(doc).then((res) => {
//         console.log(`Bike was created, document ID is ${res._id}`);
//       });
//     });

//     return NextResponse.json({
//       message: "User created successfully",
//       success: true,
//       data,
//     });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
