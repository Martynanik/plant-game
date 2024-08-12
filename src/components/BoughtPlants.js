import React, {useEffect, useState} from "react";

const BoughtPlants =({boughtPlant,  removeItem}) =>{
    const [isWatering, setIsWatering] = useState(false)
    const [watered, setWatered]= useState(false)
    const [seconds,setSeconds] = useState(boughtPlant.growTime)

    useEffect(() => {
        if (isWatering && seconds > 0) {
            const interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
        if (seconds === 0) {
            setIsWatering(false);
            setWatered(true)
            console.log(watered)
        }
    }, [isWatering, seconds]);
    const startWatering = () => {
        if (seconds <= 0) return;
        setIsWatering(true);
        console.log(watered)

    };
    function sellItem(price, id){
        if (!watered) return
        console.log("gali parduoti")
        removeItem(price, id)

    }
    const progressPercentage = ((boughtPlant.growTime - seconds) / boughtPlant.growTime) * 100;

    return(
        <div className="d-flex bought-plant-box gap-2">
            <div className="emoji-size3 m-2">{boughtPlant.emoji}</div>

            <div className="d-flex flex-column justify-content-between  gap-1">
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width: `${progressPercentage}%`}}></div>
                </div>
                <div>Timer: {seconds}s</div>
                <div className="d-flex gap-4">
                    <button onClick={()=>{setIsWatering(true); startWatering()}}  className="buy-button d-flex align-items-center justify-content-center">Water</button>
                    {watered && <button onClick={() => sellItem(boughtPlant.price, boughtPlant.id)} className="buy-button d-flex align-items-center justify-content-center">Sell</button>}
                </div>
            </div>

        </div>
    )
}

export default BoughtPlants