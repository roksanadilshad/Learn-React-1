import Count from './count';
import Batsman from './batsman';
import Users from './user';
import Click from './click';
import './App.css'
import { Suspense } from 'react';
import Friends from './friends';

const fatchFriends = async() => {
  const res = fetch('https://jsonplaceholder.typicode.com/users');
  return (await res).json();
}


const fatchUsers = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
  } 

function App() {
   const usersPromise = fatchUsers();
   const friendsPromise = fatchFriends();


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
    
    <Click></Click>
    <Suspense fallback={<p>Vo aaa rahi hai.....</p>}><Friends friendsPromise={friendsPromise}></Friends></Suspense>
     <Suspense fallback={<h3>Loading...</h3>}>
    <Users usersPromise={usersPromise}></Users>
     </Suspense>
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
 