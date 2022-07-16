import H2 from "./H2"
import Tile from "./Tile"
import camera from '../public/camera.png'
import H4 from "./H4"

const notes = [
    'Всички снимки от църквата и ресторанта ще можете да свалите от Google Drive',
    'Молим ви също да добавите всички снимки, които сте направили към папката в Google Drive'
]

const Photos = () => {
    return (
        <Tile color="bg-youngsalmon mb-5" imageSrc={camera.src} imagePos='l'>
            <div className="text-center md:text-left md:pl-10"><H2>Снимки</H2></div>
            <ul className="list-disc list-inside">
                {notes.map(note => <li key={note} className="break-normal text-sm font-[Comfortaa]">{note}</li>)}
            </ul>
            <a href="https://drive.google.com/drive/folders/1-zf99V77XDz4_yTz7eMSmTay0tpi7BBl?usp=sharing" target="blank" className="flex justify-center">
                <p className="py-2 px-4 rounded text-center mt-2 bg-seasaltsherbet font-[Comfortaa] text-sm font-bold w-content">към Google Drive</p>
            </a>
        </Tile>
    )
}

export default Photos