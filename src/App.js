import './App.css';
import React, {useEffect, useState} from "react";
import BoughtPlants from "./components/BoughtPlants";
import PlantsShop from "./components/PlantsShop";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {const [money, setMoney] = useState(200)
  const [plantsToBuyArray, setPlantsToBuyArray] = useState([
    { id: 1, emoji: "🌳", price: 10, growTime: 3 },
    { id: 2, emoji: "🌿", price: 15, growTime: 2 },
    { id: 3, emoji: "🪴", price: 20, growTime: 10 },
    { id: 4, emoji: "🌵", price: 25, growTime: 4 },
    { id: 5, emoji: "🌾", price: 30, growTime: 1 },
    { id: 6, emoji: "🌻", price: 35, growTime: 13 },
    { id: 7, emoji: "🌺", price: 40, growTime: 2 },
    { id: 8, emoji: "🌷", price: 45, growTime: 5 },
    { id: 9, emoji: "🌹", price: 50, growTime: 4 },
    { id: 10, emoji: "🍀", price: 55, growTime: 1 }
  ]);
  const [boughtPlantsArr, setBoughtPlantsArr] = useState([ { emoji: "🌱", price: 20, growTime: 3 }])
  function buyItem(price, id){
    if(money>=price){
      setMoney(money-price)
      console.log(id)
      let chosenElement = plantsToBuyArray.find(plant => plant.id === id);
      let newArr =  plantsToBuyArray.filter(plant => plant.id !== id);
      setPlantsToBuyArray(newArr)
      setBoughtPlantsArr(prevItem=>[...boughtPlantsArr, chosenElement])
    }
    console.log(plantsToBuyArray)
    console.log(boughtPlantsArr)
  }
  const [width, setWidth] = useState(0);
  function removeSoldItem(price, item){
    console.log(price)
    let newArr =  boughtPlantsArr.filter(plant => plant.id !== item);
    setBoughtPlantsArr(newArr)
    setMoney(money+price)
  }
  useEffect(() => {
    buyItem()
  }, [plantsToBuyArray]);

  return(
      <div className="d-flex gap-3 p-4 demoFont" >
        <div className="grow3 d-flex flex-column gap-3 ">
          <div className="flex-grow p-2 money-box m-2 " style={{backgroundColor: 'rgb(175, 209, 152)'}}>Money: {money}$</div>
          <div className="p-2 d-flex flex-wrap gap-2 justify-content-center">
            {boughtPlantsArr.map((x,i)=> <BoughtPlants removeItem={removeSoldItem} key={i} boughtPlant={x}/>)}</div>
        </div>
        <div className="grow1 d-flex flex-column gap-2">
          {plantsToBuyArray.map((x,i)=> <PlantsShop buy={buyItem} key={i} plant={x}/>)}

        </div>

      </div>
  )
}

export default App;
