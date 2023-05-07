import logo from './logo.svg';
import NavBar from './Components/Home/Menu Nav'
import Main from './Components/Home/Main'
import DreamSccren from './Components/Home/Dream'
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
    </div>
  );
}

export default App;
