
import './App.css';
import TextFm from './components/Textfm';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea'
import About from './components/About';

function App() {
  return (
    <>
    <Navbar title="$$-app"/> 
    <TextFm heading="text-form"/>
    <TextArea/>
    <About/>
  
    </>
  );
}

export default App;

