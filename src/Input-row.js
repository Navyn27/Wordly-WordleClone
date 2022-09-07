const InputFields = (name) => {
    return(
        <>
            <input type="text" className="inputField fielda" maxlength="1"/>
            <input type="text" className="inputField fieldb" maxlength="1"/>
            <input type="text" className="inputField fieldc" maxlength="1"/>
            <input type="text" className="inputField fieldd" maxlength="1"/>
            <input type="text" className="inputField fielde" maxlength="1"/>
        </>
    );
}

const Row = () => {
    return (
        <>
            {InputFields()}
        </>
    )
}

export default Row;