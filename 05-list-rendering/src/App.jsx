import List from "./List.jsx"

function App() {  

      const fruits = [
        {id:1,name:"orange", calories:95},
        {id:2,name:"apple", calories:55},
        {id:3,name:"banana", calories:75},
        {id:4,name:"grapes", calories:21},
        {id:5,name:"papaya", calories:66}
    ];

        const vegetables = [
        {id:6,name:"potato", calories:110},
        {id:7,name:"brinjal", calories:14},
        {id:8,name:"carrot", calories:50},
        {id:9,name:"broccoli", calories:77},
        {id:10,name:"radish", calories:46}
    ];


  return(
    <>
      <List items={fruits} category="Fruits"/>
      <List items={vegetables} category="Vegetables"/>
    </>
  )
}

export default App
