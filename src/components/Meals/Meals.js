import { Fragment } from "react";
import AvailableMeals from "./AvailabelMeals";
import MealsSummary from "./MealsSummaryModule";
const Meals=()=>{
    return <Fragment>
        
        <MealsSummary/>
        <AvailableMeals/>
    </Fragment>
};
export default Meals;