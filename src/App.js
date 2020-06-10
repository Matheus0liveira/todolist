import React from 'react';
import './App.css';

import TodoList from './Pages/TodoList'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <> 
      <Header />
      <TodoList />
      <Footer />
    </>
  );
}

export default App;
