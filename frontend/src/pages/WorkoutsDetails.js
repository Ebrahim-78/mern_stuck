import { useWorkoutsContext} from '../hocks/useWorkoutsContext'

// import format from 'date-fns/format';

const WorkoutDetails = ({ workout }) => {
  const {dispatch} = useWorkoutsContext()

  const handelClick = async () => {
    const response = await fetch('/api/workouts/'+ workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if(response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      <p>{workout.createdAt}</p>
      {/* <p>{format(new Date(workout.createAt),{addSuffix:true})}</p> */}
      <span className='material-symbols-outlined' onClick={handelClick}>Delete</span>
    </div>
  )
}

export default WorkoutDetails