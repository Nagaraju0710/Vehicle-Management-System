
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, ButtonGroup } from '@chakra-ui/react'
import "../CSS/product.css"


const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://real-cyan-ostrich-yoke.cyclic.app/product');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://real-cyan-ostrich-yoke.cyclic.app/product/delete/${id}`);
            setProducts(products.filter(product => product._id !== id));
            alert('Product deleted successfully');
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className='owlbody'>
            <h2 className='cardheader'>Products</h2>
            <div  className='vendorcard'>
                <div className='vendorcard'>
                        {products.map(product => (
                            <div className='innervendorcard' key={product._id}>
                             <p> Name:{product.name}</p> 
                             <p>Description:  {product.descsription}</p>
                                <p>Price: ${product.price}</p>
                               <p> Category: {product.category}</p>
                                <Button  colorScheme='red' onClick={() => handleDelete(product._id)}>Delete</Button>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Product