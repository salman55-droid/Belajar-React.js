import { Link } from "react-router-dom"
const AuthLayouts = (props) => {
    const {children, title, type} = props
    return (
      <div className="flex justify-center min-h-screen items-center">
          <div className="w-full max-w-xs">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
            <p className="text-gray-600 font-medium">Welcome,please enter your details </p>
            {children}
            <Navigation type={type}/>
          </div>
      </div>

    )
}

const Navigation = ({type}) => {
    if(type === "login"){
      return(
        <p className="text-sm mt-4 text-center">
        Dont have an account?{" "}<Link to="/register" className="text-blue-600 font-bold">Register</Link>
        </p>
      )

    }else{
      return(
        <p className="text-sm mt-4 text-center">
        Already have an account?{" "}<Link to="/login" className="text-blue-600 font-bold">Login</Link>
        </p>
      )

    }
}

export default AuthLayouts