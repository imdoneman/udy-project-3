import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  function addUserhandler(name, age){
    setUsersList(prevState=>{return [...prevState, {name:name, age:age, id:Math.random()}]});
  }
  return (
    <div>
      <AddUser onAddUser={addUserhandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
