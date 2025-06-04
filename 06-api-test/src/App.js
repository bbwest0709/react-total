import logo from './logo.svg';
import './App.css';
import FetchExample from './components/FetchExample';
import AxiosExample from './components/AxiosExample';
import Weather from './components/Weather';
import Movie from './components/Movie';
import FakeStore from './components/FakeStore';

function App() {
  return (
    <div className="App">
      {/* <FetchExample /> */}
      {/* <AxiosExample /> */}
      {/* <Weather /> */}
      {/* <Movie /> */}
      <FakeStore />
    </div>
  );
}

export default App;
