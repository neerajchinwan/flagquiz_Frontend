function FlagBlock({ flagData }) {
    const flagStyle = {
        width: '400px',
        height: '100px',
        objectFit: 'contain',
        marginBottom: '20px'
    }
    return (

        <div>
            <img style={flagStyle} src={flagData.imageSrc} alt="country flag" />
        </div>
    )
}

export default FlagBlock;