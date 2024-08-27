import Label from "./label"
import Input from "./Input"

const InputContainer = (props) => {
    const {label, type, name, placeHolder} = props
    return (
        <div className="mb-6">
            <Label Htmlfor={name}>{label}</Label>
            <Input Placeholder={placeHolder} Name={name} Type={type} id={name} />
        </div>
    )
}

export default InputContainer