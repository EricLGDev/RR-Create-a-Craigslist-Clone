// Import data
import { postings } from './postings'
// Import components
import './App.css';
import Gallery from './Components/Gallery'
import Searchbar from './Components/Searchbar';
import Directory from './Components/Directory';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Searchbar />
        <Directory />
        <Sidebar />
        <Gallery postings={postings} />
      </div>
    </div>
  );
}

export default App;
