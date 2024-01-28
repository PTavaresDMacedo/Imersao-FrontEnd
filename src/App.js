import './App.css';
import './Reset.css'
import Header from './Header/Header'
import Main from './Main/Main'
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Sidebar/>
      <Header/>
      <Main/>
      <Footer/>
    </div>

  );
}


export default App;
