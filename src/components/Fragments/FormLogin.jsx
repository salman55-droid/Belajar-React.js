import InputContainer from "../Elements/Input"
import Button from "../Elements/Button"
const FormLogin = () => {
    const HandleLogin = (event) => {
        event.preventDefault()
        localStorage.setItem("email",event.target.email.value)
        localStorage.setItem("password",event.target.password.value)
        window.location.href = "/products"
    }
    return (
        <form onSubmit={HandleLogin} className="mt-4">

        <InputContainer label="Email"
         type="email"
          name="email"
           placeHolder="Email"
        />

        <InputContainer label="Password"
          type="password"
          name="password"
          placeHolder="Password"
        />

        <Button warna="bg-blue-500 mt-4 w-full" type="submit">Login</Button>
      </form>
    )
}

export default FormLogin