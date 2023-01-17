
const Button = ({ label, bootstrap, handleClick, backgroundColor }) => {
    return (
        <button
            className={`Button ${bootstrap}`}
            onClick={handleClick}
            style={{ backgroundColor }}
        >
            {label}
        </button>
    )
}

export default Button