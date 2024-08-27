import PropTypes from 'prop-types'
const Label = (props) => {
    const {children, Htmlfor} = props
    return(
        <label htmlFor={Htmlfor} className="block mb-2 text-sm font-medium text-gray-900">
            {children}
       </label> 
    )
}

Label.propTypes = {
    children: PropTypes.node,
    Htmlfor: PropTypes.string
}

export default Label