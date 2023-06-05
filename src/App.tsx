import GlobalStyle from './styles/GlobalStyle';

import { Header } from './templates/Header';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
}

export default App;
