import { Suspense } from 'react';
import './App.css';
import ErrorBoundary from './errorBoundary';
import { AppContainer } from './style';
import CoinList from './views/CoinList';

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={'Loading ...'}>
        <AppContainer>
          <div className="container">
            <div className="content">
              <h1>CoinList</h1>
              <p>
                CoinList is a simple application that helps people search for
                their favorite coins and get their up to date price rate
              </p>
            </div>
            <CoinList />
          </div>
        </AppContainer>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
