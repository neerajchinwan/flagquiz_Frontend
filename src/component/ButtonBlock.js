function ButtonBlock({ handleClick, flagData }) {
    
    const buttonStyle = {
        padding: '8px 15px',
        marginLeft: '5px',
        marginRight: '5px',
        borderRadius: '5px',
        color: '#333',
        fontWeight: '600',
        background: '#cdcdcd',
        cursor: 'pointer'
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }

    return (
        <div>{
            shuffleArray(flagData.options).map((item) => {
                return <button
                    style={buttonStyle}
                    onClick={(e) => { handleClick(e) }} key={item}
                >{item}</button>
            })
        }
        </div>
    )
}

export default ButtonBlock;