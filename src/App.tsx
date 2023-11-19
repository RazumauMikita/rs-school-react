import { FC } from "react";
import ErrorBoundary from "./ErrorBoundary.tsx";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./Components/Pages/NotFoundPage/NotFoundPage.tsx";
import { Provider } from "react-redux";
import { setupStore } from "./store/store.ts";
import NewMainPAge from "./Components/Pages/MainPage/MainPage.tsx";
import DetailPage from "./Components/Pages/DetailPage/DetailPage.tsx";
const store = setupStore();
const App: FC = () => {
  return (
    <ErrorBoundary fallback={<p>Oops! Looks like an error!</p>}>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<NewMainPAge />}>
            <Route path="/users/:id" element={<DetailPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
