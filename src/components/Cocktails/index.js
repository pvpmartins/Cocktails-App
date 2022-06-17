import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Cocktails = () => {
    const location = useLocation();
    const state = location.state.drinks[0]

    const [ingList, setIngList] = useState([])

    const listIngredients = () => {    
        const ingKeys = Object.keys(state)
        .filter(el => el.startsWith("strIngredient"))
        const ingredients= ingKeys.map(ing=>state[ing])
        const ingAvailable = ingredients.filter(ing => ing !== null)

        setIngList(ingAvailable)
        console.log(ingAvailable)
    }

    useEffect(()=> {
        listIngredients()
    },[])

    return(
        <div className="App">
            <h1>{state.strDrink}</h1>
            <img src={state.strDrinkThumb} alt="" />

            <h2>Ingredients:</h2>
            <ul>{ingList.map((ing, index)=><li key={index}>{ing}</li>)}</ul>
        </div>
    )

}

export default Cocktails