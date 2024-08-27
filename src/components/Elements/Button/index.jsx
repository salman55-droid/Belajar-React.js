function Button(props){
    const {warna = "bg-blue-500", children="...", type="button"} = props
    return (
        <button 
        className={`h-10 px-6 font-semibold rounded-md ${warna} text-white`} 
        type={type} 
        onClick={() => {}}
        >

            {children}

        </button>)
}

export default Button