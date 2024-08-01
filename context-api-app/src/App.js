import React, { useContext } from 'react';
import './App.css';
import UserInfoDisplay from './components/UserInfoDisplay';
import UserInfoContext from './contexts/UserInfoContext';


export default function App() {

  const userInfo = useContext(UserInfoContext);

  return (
    <UserInfoContext.Provider value={userInfo} >
      <div>
        <h1>Welcome to the App</h1>
        <UserInfoDisplay />
      </div>
    </UserInfoContext.Provider>
  );
}
