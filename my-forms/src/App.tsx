import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { setupStore } from './store/store';
import MainPage from './Components/Pages/MainPage/MainPage';
import ReactHookFormPage from './Components/Pages/ReactHookFormPage/ReactHookFormPage';
import UncontrolledFormPage from './Components/Pages/UncontrolledFormPage/UncontrolledFormPage';

const store = setupStore();
function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/react-hook-form" element={<ReactHookFormPage />} />
          <Route path="/uncontrolled-form" element={<UncontrolledFormPage />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
