import GlobalStyle from './styles/GlobalStyle';
import { router } from './routes';

import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
