import { useEffect, useMemo, useState } from "react";
import Countdown from "./Countdown";
import H1 from "./H1"
import H2 from "./H2";

const Header = () => {
  const [currDate, setCurrDate] = useState(new Date())
  const [timeLeft, setTimeLeft] = useState({})
  const date = useMemo(() => new Date(2022, 8, 10, 12, 30), []);

  useEffect(() => {
    const timer = window.setInterval(() => setCurrDate(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, [date])

  useEffect(() => {
    const diff = date - currDate;
    let diffTimeLeft = diff;
    
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
  }, [date, currDate])

    return (
        <div className="flex flex-col items-center pt-3 px-5 md:px-10 bg-[#DE8158] mb-4 rounded-b-3xl">
            <H1 color="text-[#F9EBDE]">Дана става на 1</H1>
            <p className="text-3xl md:text-4xl text-[#F8B996] font-[Caveat]">до партито остават</p>
            {date > currDate ? <Countdown {...timeLeft} /> : <p>Благодарим Ви, че бяхте част от нашия празник!</p>}
        </div>
    )
}

export default Header