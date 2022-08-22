import H2 from "./H2"
import H4 from "./H4"
import Tile from "./Tile"
import birthday from '../public/birthday.png'

const guestList = [
    ['Вики, Дани и Мати', 'Дани, мама и тате', 'баба Валя и дядо Дамян', 'баба Меги и дядо Данчо'],
    ['Теди и Светльо', 'Дани и Стаско', 'Станислав и Наталия', 'Радо и Йоана'],
    ['Юлиян, Искрена и Зара', 'Ибро и Фея', 'Марти Шеев', 'Кало, Галя и Тео'],
    ['Хриси', 'Ники', 'Мила, Ицо и Вики', 'Иво, Алекс и Мони'],
    ['Ники', 'Стели и Кико', 'Радо, Вили и Йони'],
    ['Мария и Паскуали', 'Митака', 'Крис и Вики', 'Пейо и Надя'],
    ['Мичи, Иво, Дони, Яни, Ивка', 'леля Тани'],
]

const info = [
    'Молим да потвърдите присъствието си до 1.08',
    'Може да има разместване по разпределението на масите до 7.09',
    'Зара, Тео, Вики, Мони, Йони и Иви са на свободна консумация. Освен това ще има бисквити, солети, сокчета и други вкусотийки 🍪🍿😋'
]

const Guests = () => {
    return (
    <Tile color="bg-jadedginger mb-5" imagePos='l' imageSrc={birthday.src}>
        <div className="text-center md:text-left md:pl-10"><H2>Списък с гости:</H2></div>
        {guestList.map((table, idx) =>
            <div key={`table-${idx}`}>
                <div className="flex flex-row">
                    <div className='pr-2 text-center'><H4>Маса #{idx+1}:</H4></div>
                    <div className="flex flex-row items-center justify-center md:justify-start flex-wrap">
                        {table.map((guest, index, input) => <p key={index} className="break-normal text-sm font-[Comfortaa]">{guest}{index !== input.length - 1 ? <span className="px-1">&#8226;</span> : null}</p>)}
                    </div>
                </div>
                {idx < guestList.length - 1 && <hr className="border-1 border-black m-1" />}
            </div>
        )}
        <hr className="border-1 border-black m-1" />
        {info.map((item, index) => <p key={index} className="break-normal text-md font-bold font-[Comfortaa] pt-1">{item}</p>)}
    </Tile>
    )
}

export default Guests