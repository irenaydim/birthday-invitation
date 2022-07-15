const H1 = ({ children, color }) => {
    const style = `${color} text-6xl md:text-8xl font-['Amatic_SC'] font-bold`
    return <h1 className={style}>{children}</h1>
}

export default H1
