import React from 'react';
import {Header} from "./components/Header"
import './App.css';
import CHeader from './components/CHeader';

class App extends React.Component{
  render(){

    return (
      <div className='App'>
        <Header />
        <CHeader/>
      </div>
    )
  }
}
export default App;

