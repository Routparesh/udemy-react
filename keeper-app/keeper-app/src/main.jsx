import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Header from './Header.jsx';
import Note from './Note.jsx'
import Footer from './Footer.jsx'
import Pratice from './Pratice.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Note/>
    <Note/>

    <Pratice/>
    <Footer/>
  </React.StrictMode>,
)
