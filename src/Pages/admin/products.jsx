
import React, { useEffect, useState } from 'react'


// the page for product management
const ProductsManagement = () => {

    /// first get existing product list 

    // then create funactionality to product edit/update/delete

    const [formData, setFormData] = useState('')
    const [getdata, setGetdata] = useState('')
    const [multerdata, setMulterdata] = useState('')
    const [image, setImage] = useState()
    const [formid, setFormid] = useState(0)
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        fetchAlldata()
    }, [])

    async function fetchAlldata() {
        let getalldata = await fetch('http://localhost:9000/getProduct').then(res => res.json())
        // console.log(getalldata, "--getalldata--");
        setGetdata(getalldata)
    }

    // {Delete Product}

    const delete_product = async (id) => {
        let delete_product = await fetch('http://localhost:9000/deleteProduct/' + id,
            {
                method: 'DELETE',
            })
            .then(res => res.text())
            .then(async (deleteUser) => {
                await fetchAlldata()
            }).catch(error => console.warn(error))
        // console.log(delete_product, "==delete_product");
    }

    const edit_button = (id, image, price, rating, title, description, stock, color, sku, category) => {
        console.log(id, "==id");
        console.log(image, "image");
        setUpdate(true)
        setFormid(id)
        setFormData({
            id: id,
            image: image,
            price: price,
            rating: rating,
            title: title,
            description: description,
            stock: stock,
            color: color,
            sku: sku,
            category: category
        })
    }
    const add_button = () => {
        fetchAlldata()
    }

    const Submit = async () => {

        console.log("clicked", formData);


        const allformData = new FormData();
        allformData.append("image", image)
        allformData.append("price", formData.price)
        allformData.append("rating", formData.rating)
        allformData.append("title", formData.title)
        allformData.append("description", formData.description)
        allformData.append("stock", formData.stock)
        allformData.append("color", formData.color)
        allformData.append("sku", formData.sku)
        allformData.append("category", formData.category)

        // {UPDATE ITEM & MULTER ITEM}

        let url = update ? 'http://localhost:9000/updateProduct/' + formid : 'http://localhost:9000/multerProduct'
        let result = await fetch(url,
            {
                method: update ? 'PUT' : 'POST',
                body: allformData
            })
            .then(res => res.json())
        console.log(result, "--result--");
        fetchAlldata()
    }

    const onchange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    return (
        <>
            <div className='products_table'>
                <form>
                    <table className='dashboard_table'>
                        <thead className='form_header'>
                            <tr>
                                <th>Id</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Stock</th>
                                <th>Color</th>
                                <th>Sku</th>
                                <th>Category</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getdata.length > 0 && getdata.map((item, index) => {
                                    // console.log(item, "==item");
                                    return (<>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{((item.image).startsWith('http://') || (item.image).startsWith('https://')) ?
                                                (<><img src={item.image} /></>) :
                                                (<><img src={`http://localhost:9000/uploads/${item.image}`} />
                                                </>)
                                            }</td>
                                            <td>{item.price}</td>
                                            <td>{item.rating}</td>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td>{item.stock}</td>
                                            <td>{item.color}</td>
                                            <td>{item.sku}</td>
                                            <td>{item.category}</td>
                                            <td><button className='header_search_button' type='button' onClick={() => edit_button(item.id, item.image, item.price, item.rating, item.title, item.description, item.stock, item.color, item.sku, item.category)}>Edit</button><button className='header_search_button' onClick={() => delete_product(item.id)} type='button'>Delete</button></td>
                                        </tr>
                                    </>)
                                })
                            }
                        </tbody>
                    </table>
                </form>
            </div>
            <div>
                <div className='login_form'>
                    <div>
                        <label className='form_heading'>Image</label>
                        {
                            formData.image &&
                            <img src={`http://localhost:9000/uploads/${formData.image}`} />

                        }
                        <input type='file' name='image' className='products_form' placeholder='Enter the image url..' onChange={(e) => (setImage(e.target.files[0]))} />

                    </div>
                    <div>
                        <label className='form_heading'>Price</label>
                        <input type='text' name='price' className='products_form' placeholder='Enter the price...' value={formData.price} onChange={onchange} />
                    </div>
                    <div>
                        <label className='form_heading'>Rating</label>
                        <input type='number' name='rating' className='products_form' placeholder='Enter the rating...' value={formData.rating} onChange={onchange} />
                    </div>
                    <div>
                        <label className='form_heading'>Title</label>
                        <input type='text' name='title' className='products_form' placeholder='Enter the title...' value={formData.title} onChange={onchange} />
                    </div>
                    <div>
                        <label className='form_heading'>Description</label>
                        <input type='text' name='description' className='products_form' placeholder='Enter the description...' value={formData.description} onChange={onchange} />
                    </div>
                    <div>
                        <label className='form_heading'>Stock</label>
                        <input type='text' name='stock' className='products_form' placeholder='Enter the stock...' value={formData.stock} onChange={onchange} />
                    </div>
                    <div>
                        <label className='form_heading'>Color</label>
                        <input type='text' name='color' className='products_form' placeholder='Enter the color...' value={formData.color} onChange={onchange} />
                    </div>
                    <div>
                        <label className='form_heading'>Sku</label>
                        <input type='number' name='sku' className='products_form' placeholder='Enter the sku' value={formData.sku} onChange={onchange} />
                    </div>
                    <div>
                        <label className='form_heading'>Category</label>
                        <input type='text' name="category" className='products_form' placeholder='Enter the category...' value={formData.category} onChange={onchange} />
                    </div>
                    <div className='all_buttons'>
                        <input type='Submit' value={"Add"} onClick={add_button} className='header_search_button products_button' />
                        <input type='Submit' value={"Submit"} onClick={Submit} className='header_search_button products_button' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsManagement