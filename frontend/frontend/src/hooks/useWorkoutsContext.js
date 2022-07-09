import {WorkoutsContext} from '../Context/WorkoutContext';

import {useContext} from 'react';

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext);

    if(!context){
        throw Error('useWorkoutsContext must be use inside an WorkoutContextProvider');
    }

    return context;

}