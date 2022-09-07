const InputField = (name) => {
    return(
        <input type="text" className="inputField" maxlength="1"/>
    );
}

const Row = () => {
    return (
        <>
            {InputField()}
            {InputField()}
            {InputField()}
            {InputField()}
            {InputField()}
        </>
    )
}

export default Row;