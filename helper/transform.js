import dbConnect from "../util/mongo";
import Product from "../models/Product";

export default async function productHandler() {
    await dbConnect();
    const result = await Product.find().lean();

    const newResult = result.map((p) => {
        const k = JSON.stringify(p);
        const l = JSON.parse(k)
        return l;
    })
    return newResult;
}

