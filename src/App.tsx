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
        </div>
        <ListApp />
      </div>
    </AppContainer>
  );
}

export default App;
