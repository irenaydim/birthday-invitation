import H2 from "./H2"
import Tile from "./Tile"
import camera from '../public/camera.png'
import H4 from "./H4"

const notes = [
    'Всички снимки от фотографа ще можете да свалите от Google Drive',
    'Молим ви също да добавите всички снимки, които направите'
]

const Photos = () => {
    return (
        <Tile color="bg-[#F3B471] mb-5" imageSrc={camera.src} imagePos='l'>
            <div className="text-center md:text-left md:pl-10"><H2>Снимки</H2></div>
            <ul className="list-disc list-inside">
                {notes.map(note => <li key={note} className="break-normal text-sm font-[Comfortaa]">{note}</li>)}
            </ul>
            <a href="https://drive.google.com/drive/folders/1-zf99V77XDz4_yTz7eMSmTay0tpi7BBl?usp=sharing" target="blank" className="flex justify-center">
                <p className="pb-0.5 px-2 rounded text-center mt-1 bg-[#F9EBDE] font-[Caveat] text-2xl w-content">снимки</p>
            </a>
        </Tile>
    )
}

export default Photos