import { useEffect, useRef, useState } from "react"

function StopWatch() {
  let timerId = useRef(null)
  const initialTime = { hour: 0, minute: 0, second: 0 }
  const [time, setTime] = useState(initialTime);

  const startTimer = () => {
    let { hour, minute, second } = time
    timerId.current = setInterval(() => {
      second += 1
      if (second == 60) {
        second = 0
        minute += 1
      }

      if (minute == 60) {
        minute = 0
        hour += 1
      }

      setTime({
        second: second,
        minute: minute,
        hour: hour
      })
    }, 1000)
  }

  const stopTimer = () => {
    if (timerId.current) {
      clearInterval(timerId.current)
      timerId.current = null;
    }
  }


  const resetTimer = () => {
    if (timerId.current) {
      clearInterval(timerId.current)
      timerId.current = null;
    }
    setTime(initialTime)
  }

  useEffect(() => {
    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, []);



  return (
    <div className="full-height-and-center" style={{
      gap: "10px"
    }}>
      <h1 style={{
        color: "white"
      }}>
        {`
        ${time.hour.toString().padStart(2, '0')} :
        ${time.minute.toString().padStart(2, '0')} :
        ${time.second.toString().padStart(2, '0')}
        `}
      </h1>
      <div style={{
        display: "flex",
        gap: "10px"
      }}>
        <button className="button-24" onClick={startTimer}>Start</button>
        <button className="button-24" onClick={stopTimer}>Stop</button>
        <button className="button-24" onClick={startTimer}>Resume</button>
        <button className="button-24" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  )
}

export default StopWatch