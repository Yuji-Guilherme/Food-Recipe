import GlobalStyle from './styles/GlobalStyle';
import { router } from './routes';

import { RouterProvider } from 'react-router-dom';
import { PageWrapper } from './components/PageWrapper';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <RouterProvider router={router} />
      </PageWrapper>
    </>
  );
}

export default App;
