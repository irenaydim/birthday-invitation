import H2 from "./H2"
import H4 from "./H4"
import Tile from "./Tile"
import tablet from '../public/tablet.png'

const locationsList = [
    {time: '12:30 ч.', text: 'Църква "Свети Атанасий", Варна', url: 'https://goo.gl/maps/BeUznnKmTCHoxZwd7'},
    {time: '15:00 ч.', text: 'Parmy Family Restaurant, Варна', url: 'https://goo.gl/maps/dFYRr82twTs7Q8mv8'},
]

const Locations = () => {
    return (
    <Tile color="bg-youngsalmon mb-5" imageSrc={tablet.src}>
        <div className="text-center md:text-left md:pl-10"><H2>Кога и къде?</H2></div>
        <p className="break-normal text-lg font-bold font-[Comfortaa] hover:underline underline-offset-2 text-center md:text-left md:pl-10 pt-1">10 септември 2022</p>
        {locationsList.map(({time, text, url}, idx) => 
            <div key={`location-${idx}`} className="flex flex-row pr-2 items-center">
                <div className="pr-2"><H4>{time}:</H4></div>
                <a href={url} target="blank"><p className="break-normal text-md font-[Comfortaa] hover:underline underline-offset-2 text-center">{text}</p></a>
            </div>
        )}
        <p className="break-normal text-md font-bold font-[Comfortaa] pt-1">Идването в църквата е по желание 😊</p>
    </Tile>
    )
}

export default Locations