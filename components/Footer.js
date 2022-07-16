import { useEffect, useState } from 'react'
import dana1 from '../public/dana-1.jpg'
import dana2 from '../public/dana-2.jpg'
import dana3 from '../public/dana-3.jpg'
import dana4 from '../public/dana-4.jpg'

const images = [
    dana1.src,
    dana2.src,
    dana3.src,
    dana4.src
]

const Footer = () => {
    const [image, setImage] = useState(0)

    useEffect(() => {
        const timer = window.setInterval(() => setImage(image < images.length - 1 ? image + 1 : 0), 1000)
        return () => window.clearInterval(timer)
    }, [image])

    return (
        <footer className="flex flex-col p-2 bg-[#DE8158] w-full h-96 mx-auto rounded-t-3xl justify-center items-center"
        style={{ backgroundImage: `url(${images[image]})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
        </footer>
    )
}

export default Footer