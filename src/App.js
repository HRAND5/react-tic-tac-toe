import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">

      <h1>Simple 2-player Tic-Tac-Toe</h1>
      <div className="flexcontainer">
        <div className="margin"></div>
        <Grid>
        
        </Grid>
        <div className="margin"></div>
      </div>
      <div>
        <button>Restart Game</button>
        <p>It's currently red's turn</p>
      </div>
      
    </div>
  );
}

export default App;
