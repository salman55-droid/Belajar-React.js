import InputContainer from "../Elements/Input"
import Button from "../Elements/Button"
const FormRegister = () => {
    return (
        <form action="" className="mt-4">

        <InputContainer label="Nama"
          type="text"
          name="name"
          placeHolder="Masukan Nama Anda"
        />

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

        <InputContainer label="Masukan Lagi Password"
          type="password"
          name="password"
          placeHolder="Masukan Lagi Password"
        />

        <Button warna="bg-blue-500 mt-4 w-full">Register</Button>
      </form>
    )
}

export default FormRegister