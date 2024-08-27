import Button from "../Elements/Button"
const CardProduct = (props) => {
    const {children} = props
    return (
        <div className="w-full max-w-sm bg-gray-800 shadow-md rounded-lg border border-gray-700 flex flex-col justify-between mx-2 my-2">
            {children}
        </div>
    )
};

const HeaderCardProduct = (props) => {
    const {img} = props
    return (
        <a href="">
            <img className="p-8 rounded-t-lg" src={img} alt="" />
        </a>
    )
}


const BodyCardProduct = (props) => {
    const {children, title} = props
    return (
        <div className="px-5 pb-5 h-full">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-white">
                {title}
            </h5>
        </a>
        <p className="text-gray-100 mt-2 text-sm">
            {children}
        </p>
    </div>
    )

};

const FooterCardProduct = (props) => {
    const {price, AddToCart} = props
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-2xl font-bold text-white">${price}</span>
            <Button warna="bg-blue-500" onClick={AddToCart}>Add to cart</Button>
        </div>
    )
};

CardProduct.Header = HeaderCardProduct
CardProduct.Body = BodyCardProduct
CardProduct.Footer = FooterCardProduct

export default CardProduct