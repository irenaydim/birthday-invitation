import H4 from "./H4"
import dana from '../public/dana-1.jpg'
import Image from "next/image"

const Footer = () => {
    return (
        <footer className="flex flex-col p-2 bg-[#DE8158] w-full h-96 mx-auto rounded-t-3xl justify-center items-center"
        style={{ backgroundImage: `url(${dana.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
        </footer>
    )
}

export default Footer