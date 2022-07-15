import H4 from "./H4"
import partyPopper from '../public/party-popper.png'
import Image from "next/image"

const Footer = () => {
    return (
        <footer className="flex flex-col p-2 bg-[#DE8158] w-full mx-auto rounded-t-3xl justify-center items-center">
            <div><Image src={partyPopper.src} alt="party-popper" height='100' width="100" /></div>
            <H4>Ще се радваме да бъдете част от нашия празник!</H4>
        </footer>
    )
}

export default Footer