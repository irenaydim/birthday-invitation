import H2 from "./H2"
import H4 from "./H4"
import Tile from "./Tile"
import birthday from '../public/birthday.png'

const guestList = [
    ['Хриси', 'Ники', 'Мила, Ицо и Вики', 'Сашо, Габи и Гошо', 'Вальо и Рени и Иви'],  
    ['Теди и Светльо', 'Дани и Стаско', 'Станислав и Наталия', 'Радо и Йоана'],
    ['Юлиян, Искрена и Зара', 'Ибро и Фея', 'Марти', 'Кало и Галя'], 
    ['Мичи, Иво, Дони, Яни, Ивка', 'леля'],
    ['Вики, Дани и Мати', 'Дани, мама и тате', 'баби и дядовци'],
    ['Ники', 'Стели и Кико', 'Радо, Вили и Йони'],
    ['Мария и Паскуали', 'Митака', 'Крис и Вики', 'Пейо и Надя']
]

const Guests = () => {
    return (
    <Tile color="bg-[#88918C] mb-5" imagePos='l' imageSrc={birthday.src}>
        <div className="text-center md:text-left md:pl-10"><H2>Списък с гости:</H2></div>
        {guestList.map((table, idx) => 
            <div key={`table-${idx}`} className="flex flex-row">
                <div className='pr-2 text-centert'><H4>Маса #{idx+1}:</H4></div>
                <div className="flex flex-row items-center justify-center md:justify-start flex-wrap">
                    {table.map((guest, index, input) => <p key={index} className="break-normal text-sm font-[Comfortaa]">{guest}{index !== input.length - 1 ? <span className="px-1">&#8226;</span> : null}</p>)}
                </div>
            </div>
        )}
    </Tile>
    )
}

export default Guests