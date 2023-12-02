import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { store } from './store/store';
import { ROUTES } from './utils/constants/constants';

import MainPage from './Components/Pages/MainPage';
import ReactHookFormPage from './Components/Pages/ReactHookFormPage';
import UncontrolledFormPage from './Components/Pages/UncontrolledFormPage';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
        <Route
          path={ROUTES.REACT_HOOK_FORM_PAGE}
          element={<ReactHookFormPage />}
        />
        <Route
          path={ROUTES.UNCONTROLLED_FORM_PAGE}
          element={<UncontrolledFormPage />}
        />
      </Routes>
    </Provider>
  );
}

export default App;
