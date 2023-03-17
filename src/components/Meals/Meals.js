import { Fragment } from 'react';

import MealsSummary from './MealsSummaryModule';
import AvailableMeals from './AvailabelMeals';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;