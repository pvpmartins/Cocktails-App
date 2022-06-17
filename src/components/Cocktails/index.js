import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Cocktails = () => {
    const location = useLocation();
    const state = location.state.drinks[0]

    const [ingList, setIngList] = useState([])

    const [measList, setMeasList] = useState([])

    const listIngredients = () => {    
        const ingKeys = Object.keys(state)
        .filter(el => el.startsWith("strIngredient"))
        const ingredients= ingKeys.map(ing=>state[ing])
        const ingAvailable = ingredients.filter(ing => !!ing)
        const measKeys = Object.keys(state)
        .filter(el => el.startsWith("strMeasure"))
        const measurements = measKeys.map(meas => state[meas])
        const measAvailable = measurements.filter(meas=> !!meas)


        setMeasList(measAvailable)
        setIngList(ingAvailable)
        console.log(measAvailable,ingAvailable, state)
    }

    useEffect(()=> {
        listIngredients()
    },[])

    return(
        <div className="App">
            {
                Object.keys(state).length !== 0 
                
                &&

                <>
                <h1>{ state.strDrink }</h1>
                <img src={ state.strDrinkThumb } alt="" />

                <h2>Ingredients:</h2>
                <ul>{ingList.map((ing, index)=><li key={index}>{measList[index]} of {ing}</li>)}</ul>
                </>
            }
        </div>
    )

}

export default Cocktails