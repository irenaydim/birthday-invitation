const Tile = ({ children, color, imageSrc = undefined, imagePos }) => {
    const style=`${color} rounded-3xl grid p-3 md:p-5 ${imageSrc ? 'grid-cols-1 md:grid-cols-3' : ''}`
    
    return <div className={style}>
        {imageSrc && <div className="block md:hidden rounded-t-3xl h-52" style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>}
        {imageSrc && imagePos === 'l' && <div className="hidden md:block rounded-l-3xl" style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>}
        <div className="md:col-span-2">{children}</div>
        {imageSrc && imagePos !== 'l' && <div className="hidden md:block rounded-r-3xl" style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>}
    </div>
}

export default Tile
