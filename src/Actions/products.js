
// get all categories
export const getAllcategory = async () => {
    return await fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
}

// product get by category

export const getProductbyCat = (category) => new Promise((resolve,reject)=>{
    fetch('https://dummyjson.com/products/category/'+ category)
    .then(res => res.json())
    .then(res=> resolve(res))
    .catch(err => reject(err))           
})  