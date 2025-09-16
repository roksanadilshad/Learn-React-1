import './App.css'
import Count from './count';
import Batsman from './batsman';
function App() {
  function handle(){
    alert("I'm Clicked");
  }
  const handleClick = () => {
    alert('Again clicked')
  }
  const handleClick2 = (num) => {
    const number = num + 4;
    alert(number)
  }

  return (
    <>
    <Batsman></Batsman>
      <Count></Count>
      <h3>Vite + React</h3>
      <button onClick={handle}>Click Me</button>
      <button onClick={() => {alert('You are beautiful')}}>Click can change you</button>
      <button onClick={handleClick}>Wanna click more?</button>
      <button onClick={() => handleClick2(14)}>Click After</button>
      
    </>
  )
}


export default App
 