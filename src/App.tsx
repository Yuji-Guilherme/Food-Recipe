import { router } from './routes';
import GlobalStyle from './styles/GlobalStyle';

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
