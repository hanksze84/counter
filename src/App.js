import React,  { useState } from 'react';
import './App.css';





const App = () => {
  const [home_counter, home_setCounter] = useState(0);

  const [away_counter, away_setCounter] = useState(0); 

  const home_handleAdd = (num_home) => {
    console.log(num_home);
    home_setCounter(home_counter + num_home); 
  };

  const away_handleAdd = (num_away) => {
    console.log(num_away);
    away_setCounter(away_counter+num_away); 
  };

  return (
    <div className="App">
      <div className="App">
        <h1>Home</h1>
        <h2>{home_counter}</h2>
        <button onClick={() => home_handleAdd(1)}>1 point</button>
        <button onClick={() => home_handleAdd(2)}>2 point</button>
        <button onClick={() => home_handleAdd(3)}>3 point</button>
      </div>
      <div className="App">
        <h1>Away</h1>
        <h2>{away_counter}</h2>
        <button onClick={() => away_handleAdd(1)}>1 point</button>
        <button onClick={() => away_handleAdd(2)}>2 point</button>
        <button onClick={() => away_handleAdd(3)}>3 point</button>
      </div>
    </div>
  );
}; 

export default App;



// import React, {useState} from 'react';
// import './App.css';




// const App = () => {
//   const [home_counter, home_setCounter] = useState(0);

//   const [away_counter, away_setCounter] = useState(0); 

//   const home_handleAdd_one = () => {
//     home_setCounter(home_counter + 1); 
//   };

//   const home_handleAdd_two = () => {
//     home_setCounter(home_counter + 2); 
//   };
  
//   const home_handleAdd_three = () => {
//     home_setCounter(home_counter + 3); 
//   };

//   const away_handleAdd_one = () => {
//     away_setCounter(away_counter + 1); 
//   };


//   const away_handleAdd_two = () => {
//     away_setCounter(away_counter + 2); 
//   };


//   const away_handleAdd_three = () => {
//     away_setCounter(away_counter + 3); 
//   };

//   return (
//     <div className="App">
//       <div className="App">
//         <h1>Home</h1>
//         <h2>{home_counter}</h2>
//         <button onClick={home_handleAdd_one}>1 point</button>
//         <button onClick={home_handleAdd_two}>2 point</button>
//         <button onClick={home_handleAdd_three}>3 point</button>
//       </div>
//       <div className="App">
//         <h1>Away</h1>
//         <h2>{away_counter}</h2>
//         <button onClick={away_handleAdd_one}>1 point</button>
//         <button onClick={away_handleAdd_two}>2 point</button>
//         <button onClick={away_handleAdd_three}>3 point</button>
//       </div>
//     </div>
//   );
// }; 

// export default App;
