import logo from './logo.svg';
import NavBar from './Components/Home/Menu Nav'
import Main from './Components/Home/Main'
import DreamSccren from './Components/Home/Dream'
import Auctionsending from './Components/Home/Auctionsending-sccren'

function App() {
  return (
    <div className="App">
        <section>
          <NavBar />
        </section>
        <section>
          <Main />
        </section>
        <section>
          <DreamSccren />
        </section>
        <section>
          <Auctionsending />
        </section>
    </div>
  );
}

export default App;
