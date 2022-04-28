import './App.css';
import { AppContainer } from './style';
import Heading from './typography/Headings';
import ListApp from './views/App';

function App() {
  return (
    <AppContainer>
      <div className="container">
        <div className="content">
          <Heading text='CoinList' />
          <p>CoinList is a simple application that helps people search for their favorite coins and get their up to date price rate</p>
        </div>
        <ListApp />
      </div>
    </AppContainer>
  );
}

export default App;
