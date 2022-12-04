
const InputWithLabel = (props) => {
    let { id, label, type, value } = props
    return (
        <>
            <label htmlFor={id}>{label}{value}</label>
            <input
                id={id}
                type={type}
                value={value}
            />
        </>
    );
}

export default InputWithLabel