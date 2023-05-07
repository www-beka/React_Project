import logo from './logo.svg';
import NavBar from './Components/Home/Menu Nav'
import Main from './Components/Home/Main'
function App() {
  return (
    <div className="App">
        <section>
          <NavBar />
        </section>
        <section>
          <Main />
        </section>
    </div>
  );
}

export default App;
