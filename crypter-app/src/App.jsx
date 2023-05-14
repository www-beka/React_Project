import logo from './logo.svg';
import NavBar from './Components/Home/Menu Nav'
import Main from './Components/Home/Main'
import DreamSccren from './Components/Home/Dream'
import Auctionsending from './Components/Home/Auctionsending-sccren'
import Spotlight_Sccren from './Components/Home/Spotlight-sccren'

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
        <section>
          <Spotlight_Sccren />
        </section>
    </div>
  );
}

export default App;
