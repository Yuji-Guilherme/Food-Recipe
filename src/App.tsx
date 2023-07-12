import GlobalStyle from './styles/GlobalStyle';
import { PageWrapper } from './components/PageWrapper';
import { router } from './routes';

import { RouterProvider } from 'react-router-dom';

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
