export default async function deleteHandler(type, id) {
    const productToDelete = await type.findByIdAndDelete(id)
    
}

