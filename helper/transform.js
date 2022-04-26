import Product from "../models/Product";

// export default async function productHandler() {
//     await dbConnect();
//     const result = await Product.find().lean();

//     const newResult = result.map((p) => {
//         const k = JSON.stringify(p);
//         const l = JSON.parse(k)
//         return l;
//     })
//     return newResult;
// }

export default async function productHandler(req, res) {
  
    try {  const result = await Product.find().lean();

        const newResult = result.map((p) => {
            const k = JSON.stringify(p);
            const l = JSON.parse(k)
            return l;
        })     
      res.status(200).json({ newResult })
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' })
    }
  }