import instance from ".";

const getAllBooks = async ()=>{
    const res = await instance.get("/books")
    return res.data
}
const getOneBook = async (id)=>{
    const res = await instance.get(`/books/${id}`)
    return res.data
}
const createBook = async (title, descreption, image,price)=>{
    const res = await instance.post("/books",{
        title:title,
        descreption:descreption,
        image:image,
        price:price,

    })
    return res.data
}
const deleteBook = async (id)=>{
    const res = await instance.delete(`/books/${id}`)
    return res.data
}
export {getAllBooks,getOneBook,createBook,deleteBook}