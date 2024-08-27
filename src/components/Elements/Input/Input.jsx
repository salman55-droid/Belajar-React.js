import PropTypes from 'prop-types'
const Input = (props) => {
    const {Placeholder, Type, Name} = props
    return (
        <input type={Type}
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
         placeholder={Placeholder}
         name={Name}
         id={Name} />
    )
}

Input.propTypes = {
    Placeholder: PropTypes.string,
    Type: PropTypes.string
}

export default Input