import { useEffect, useState } from "react"

const UseProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://shielded-citadel-89476.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return { products }
}

export default UseProducts;