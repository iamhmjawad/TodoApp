import PropTypes from 'prop-types';


const Button = ({text,color,onClick}) => {
  return <button 
    onClick={onClick} 
    style = {{backgroundColor:color}} 
    className="btn">{text}</button>
}

Button.defaultProps = {
    color: 'steelblue',
}

// everywhere proptype start with capital letter except for the case shown below
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button