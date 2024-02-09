// // // import { useEffect } from "react"
// // // import { useWorkoutsContext } from "../hocks/useWorkoutsContext"

// // // // components
// // // import WorkoutDetails from "../pages/WorkoutsDetails"
// // // import WorkoutForm from "../components/workoutForm"

// // // const Home = () => {
// // //   const{workouts, dispatch} = useWorkoutsContext() 
  
// // //   useEffect(() => {
// // //     const fetchWorkouts = async () => {
// // //       const response = await fetch('/api/workouts')
// // //       const json = await response.json()

// // //       if (response.ok) {
// // //         dispatch({type: 'SET_WORKOUTS' , payload: json})
// // //       }
// // //     }

// // //     fetchWorkouts()
// // //   }, [dispatch])

// // //   return (
// // //     <div className="home">
// // //       <div className="workouts">
// // //         {workouts && workouts.map((workout) => (
// // //         <WorkoutDetails  workout={workout} key={workout._id}   />
// // //         ))}
// // //       </div>
// // //       <WorkoutForm />
// // //     </div>
// // //   )
// // // }

// // // export default Home

// // import { useEffect } from "react"
// // import { useWorkoutsContext } from "../hocks/useWorkoutsContext"

// // // components
// // import WorkoutDetails from "../pages/WorkoutsDetails"
// // import WorkoutForm from "../components/workoutForm"

// // const Home = () => {
// //   const { workouts, dispatch } = useWorkoutsContext()

// //   useEffect(() => {
// //     const fetchWorkouts = async () => {
// //       const response = await fetch('/api/workouts/')
// //       const json = await response.json()

// //       if (response.ok) {
// //         dispatch({type: 'SET_WORKOUTS', payload: [json]})
// //       }
// //     }

// //     fetchWorkouts()
// //   }, [dispatch])

// //   return (
// //     <div className="home">
// //       <div className="workouts">
// //         {workouts && workouts.map(workout => (
// //           <WorkoutDetails workout={workout} key={workout._id} />
// //         ))}
// //       </div>
// //       <WorkoutForm />
// //     </div>
// //   )
// // }

// // export default Home

// import { useEffect } from "react";
// import { useWorkoutsContext } from "../hocks/useWorkoutsContext";  // Corrected path

// import WorkoutDetails from "../pages/WorkoutsDetails";
// import WorkoutForm from "../components/workoutForm";

// const Home = () => {
//   const { workouts, dispatch } = useWorkoutsContext();

//   useEffect(() => {
//     const fetchWorkouts = async () => {
//       try {
//         const response = await fetch('/api/workouts/');
//         if (!response.ok) {
//           throw new Error('Failed to fetch workouts');
//         }
//         const json = await response.json();
//         dispatch({ type: 'SET_WORKOUTS', payload: json });  // Assuming API returns an array
//       } catch (error) {
//         console.error("Error fetching workouts:", error);
//       }
//     };

//     fetchWorkouts();
//   }, [dispatch]);

//   return (
//     <div className="home">
//       <div className="workouts">
//         {workouts && workouts.map(workout => (
//           <WorkoutDetails workout={workout} key={workout._id} />
//         ))}
//       </div>
//       <WorkoutForm />
//     </div>
//   );
// };

// export default Home;


import { useEffect } from "react"
import { useWorkoutsContext } from "../hocks/useWorkoutsContext"

// components
import WorkoutDetails from "../pages/WorkoutsDetails"
import WorkoutForm from "../components/workoutForm"

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home