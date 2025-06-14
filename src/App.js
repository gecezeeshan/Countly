
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './Counter';
const styles = {
 
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

function Home() {

  return (
    <div style={styles.container}>
      <Counter></Counter>
    </div>
  );
}

export default function App() {



  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
