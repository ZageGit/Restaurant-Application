export default async function resultHandler(type, id) {
    var product = [];
    if (id === undefined) {
        var product = await type.find().sort({ createdAt: 'desc'}).lean();
        var result = product.map((p) => {
            const y = JSON.stringify(p);
            const allResult = JSON.parse(y)
            return allResult;
        })
    } else {
        var product = await type.findById(id).lean();
        const x = JSON.stringify(product);
        var result = JSON.parse(x);
    }
    return result;
}

