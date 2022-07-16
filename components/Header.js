import { useEffect, useMemo, useState } from "react";
import Countdown from "./Countdown";
import H1 from "./H1";

const Header = () => {
  const [currDate, setCurrDate] = useState(new Date())
  const [timeLeft, setTimeLeft] = useState({})
  const bdayDate = useMemo(() => new Date(2022, 8, 6, 0, 0), []);
  const partyStartDate = useMemo(() => new Date(2022, 8, 10, 12, 30), []);
  const partyEndDate = useMemo(() => new Date(2022, 8, 10, 20, 0), []);

  useEffect(() => {
    let timer
    if (currDate < partyStartDate) {
      timer = window.setInterval(() => setCurrDate(new Date()), 1000);
    } else {
      timer = window.setInterval(() => setCurrDate(new Date()), 30000);
    }
    return () => window.clearInterval(timer);
  }, [currDate, partyStartDate])

  useEffect(() => {
    const diff = partyStartDate - currDate;
    let diffTimeLeft = diff;
    
    if (diffTimeLeft > 0) {
      const weeks = Math.floor(diff / 604800000) // (1000 * 60 * 60 * 24 * 7)
      diffTimeLeft -= weeks * 604800000;
      const days = Math.floor(diffTimeLeft / 86400000) // (1000 * 60 * 60 * 24)
      diffTimeLeft -= days * 86400000;
      const hours = Math.floor(diffTimeLeft / 3600000) // (1000 * 60 * 60)
      diffTimeLeft -= hours * 3600000;
      const minutes = Math.floor(diffTimeLeft / 60000) // (1000 * 60)
      diffTimeLeft -= minutes * 60000;
      const seconds = Math.floor(diffTimeLeft / 1000) // (1000)

      setTimeLeft({ weeks, days, hours, minutes, seconds })
    }
  }, [partyStartDate, currDate])

    return (
        <div className="flex flex-col items-center pt-3 px-5 md:px-10 bg-jadedginger mb-4 rounded-b-3xl">
            <H1 color="text-seasaltsherbet pb-1">{bdayDate > currDate ? 'Дана става на 1' : 'Дана стана на 1'}</H1>
            <p className="text-3xl md:text-4xl text-seasaltsherbet font-[Caveat] text-center leading-none">
              {partyStartDate > currDate && 'до партито остават'}
              {partyStartDate < currDate && partyEndDate > currDate && 'Купонът започна! Тук ли сте?'}
              {partyEndDate < currDate && 'Благодарим Ви, че бяхте част от нашия празник!'}
            </p>
            {partyStartDate > currDate ? <Countdown {...timeLeft} /> : <div className="p-2" />}
        </div>
    )
}

export default Header