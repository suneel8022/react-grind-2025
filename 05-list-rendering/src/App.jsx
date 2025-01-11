import List from "./List.jsx"

function App() {  

      const fruits = [
        {id:1,name:"orange", calories:95},
        {id:2,name:"apple", calories:55},
        {id:3,name:"banana", calories:75},
        {id:4,name:"grapes", calories:21},
        {id:5,name:"papaya", calories:66}
    ];



  return(
      <List items={fruits} category="Fruits"/>
  )
}

export default App
