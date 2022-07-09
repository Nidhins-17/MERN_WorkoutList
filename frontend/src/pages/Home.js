import {useEffect} from 'react';
import {useWorkoutsContext} from '../hooks/useWorkoutsContext';

import WorkoutDetails from '../Components/WorkoutDetails';

import WorkoutForm from '../Components/WorkoutForm'

const Home = () => {

    const {workouts, dispatch} = useWorkoutsContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts/');// we used a proxy for development purpose in package manager which manages the dependencies
            const json = await response.json();

            if(response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: json});
            }

        }

        fetchWorkouts();
    },[dispatch])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key = {workout._id} workout = {workout} />
                ))}
            </div>
            <WorkoutForm></WorkoutForm>
        </div>
    )
}

export default Home;
