import Student from "./Student.jsx";
function App() {
  return(
    <>
      <Student name="Suneel" age={32} isStudent={true}/>
      <Student name="Chris" age={21} isStudent={false}/>
      <Student name="Tony" age={35} isStudent={true}/>
      <Student name="Sandy" age={50} isStudent={false}/>
      <Student/>
    </>
  );
}

export default App
