import React, {useState} from "react";

const Temperature = () => {
   const [count, setCount] = useState(10)
   const [color, setColor] = useState('cold')

    const increase = () => {
        const plus =  count + 1;
        setCount(plus)

        if (plus > 15)
        {
            setColor('hot')
        }
        if (plus > 30)
        {
            setCount(30)
        }

    } 

    const decrease = () => {
        const minus = count - 1;
        setCount(minus)

        if (minus <= 15)
        {
            setColor('cold')
        }
        if (minus < 0)
        {
           setCount(0)
        }
    }

return(
  <>
    <h3>Temperature Control</h3>
    <div className='app-container'>
     
        <div className='temperature-display-container'>
            <div className={`temperature-display ${color}`}>{count}°C</div>
        </div>
        <div className='button-container'>
            <button onClick = {increase}>+</button>
            <button onClick = {decrease}>-</button>
        </div>
    </div></>
);


}
export default Temperature;