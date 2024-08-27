import CardProduct from "../components/Fragments/cardProduct"
import { Fragment, useState } from "react"

const products = [
    {
        id: 1,
        img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        title: "Apple Bag Pro 17",
        price: 299,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem."
    },
    {
        id: 2,
        img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        title: "Apple Clothes Pro Max 17",
        price: 499,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem,loremipsomdolor sit amet consectetur adipisicing elit. Iste, quidem."
    },
    {
        id: 3,
        img: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        title: "Apple Ring 15",
        price: 199,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem,loremipsomdolor sit amet consectetur adipisicing elit. Iste, quidem."
    },
    {
        id: 4,
        img: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        title: "Apple SSD Pro 10",
        price: 299,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem,loremipsomdolor sit amet consectetur adipisicing elit. Iste, quidem."
    },
]

const email = localStorage.getItem("email")


const ProductsPage = () => {

    const [cart, setCart] = useState([
        {
            name: 'Apple Bag Pro 17',
            qty: 1
        }
    ])

    const HandleLogout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        window.location.href = "/login"
    }

    const AddToCart = (itemNames) => {
        setCart([
            ...cart,
            {
                name: itemNames,
                qty: 1
            }

        ])
    }

    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10 mb-4">
                {email}
                <button className="ml-4 bg-red-600 px-4 py-1 rounded text-white font-bold" onClick={HandleLogout}>Logout</button>
            </div>
            <div className="flex justify-center">
                <div className="w-3/4 flex flex-wrap">
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header img={product.img} />
                            <CardProduct.Body title={product.title}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer price={product.price} AddToCart={AddToCart} />
                        </CardProduct>
                    ))}
                </div>

                <div className="w-1/4">
                        <h1 className="text-3xl font-bold text-sky-500">Cart</h1>
                        <ul>
                            {cart.map((item) => (
                                <li key={item.name}>{item.name}</li>
                            ))} 
                        </ul>
                    </div>
            </div>       
        </Fragment>

    )
}

export default ProductsPage