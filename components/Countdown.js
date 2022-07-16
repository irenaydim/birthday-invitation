import Tile from "./Tile"

const Countdown = ({ weeks, days, hours, minutes, seconds }) => {
    const numsClassName = "text-4xl text-seasaltsherbet leading-none font-['Luckiest_Guy']"
    const textClassName = "text-xs text-seasaltsherbet font-medium font-['Balsamiq_Sans'] text-center"
  
    return (
    <div className='pb-2'>
      <Tile color='bg-youngsalmon/80'>
        <div className="grid grid-cols-5 gap-x-1 text-center tracking-wide">
          <p className={numsClassName}>{weeks}</p>
          <p className={numsClassName}>{days}</p>
          <p className={numsClassName}>{hours}</p>
          <p className={numsClassName}>{minutes}</p>
          <p className={numsClassName}>{seconds}</p>
          <p className={textClassName}>седмици</p>
          <p className={textClassName}>дни</p>
          <p className={textClassName}>часа</p>
          <p className={textClassName}>минути</p>
          <p className={textClassName}>секунди</p>
        </div>
        </Tile>
      </div>
    )
  }

  export default Countdown