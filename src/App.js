// Import data
import { postings } from './postings'
// Import components
import './App.css';
import Gallery from './Components/Gallery'
import Searchbar from './Components/Searchbar';
import Directory from './Components/Directory';

const App = () => {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Searchbar />
        <Directory />
        <Gallery postings={postings} />
      </div>
    </div>
  );
}

export default App;
