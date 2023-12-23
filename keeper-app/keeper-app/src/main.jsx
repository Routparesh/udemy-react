import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Header from './Header';
import Note from './Note.jsx'
import Footer from './Footer.jsx';
import notes from '../notes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    {
      notes.map((n) =>(
      <Note 
       key={n.id}
       title={n.title}
       content={n.content}
       />
    ))
    }
    
    <Footer/>
  </React.StrictMode>,
)
