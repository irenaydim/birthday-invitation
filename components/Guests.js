import H2 from "./H2"
import H4 from "./H4"
import Tile from "./Tile"
import birthday from '../public/birthday.png'

const guestList = [
    ['Дани, мама и тате', 'Вики, Дани и Мати', 'баба Валя и дядо Дамян', 'баба Меги и дядо Данчо', 'баба Тани', 'Юлиян, Искрена и Зара'],
    ['Теди и Светльо', 'Стаско', 'Павката', 'Станислав и Наталия', 'Радо и Йоана', 'Ибро и Фея', 'Марти Шеев', 'Кало, Галя и Тео'],
    ['Хриси', 'Ники', 'Мила, Ицо и Вики', 'Иво, Алекс и Мони', 'Мичи, Иво, Дони, Яни, Ивка'],
    ['Ники', 'Стели и Кико', 'Радо, Вили и Йони', 'Мария и Паскуали', 'Пейо и Надя'],
]

const info = [
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