export default async function resultHandler(type) {
    const result = await type.find().lean();

    const newResult = result.map((p) => {
        const k = JSON.stringify(p);
        const l = JSON.parse(k)
        return l;
    })
    return newResult;
}
