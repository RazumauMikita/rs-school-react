import { FC } from "react";
import MainPage from "./Pages/MainPage/MainPage";

import ErrorBoundary from "./ErrorBoundary.tsx";
import { Route, Routes } from "react-router-dom";
import PersonPage from "./Pages/PersonPage/PersonPage.tsx";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage.tsx";

const App: FC = () => {
  return (
    <>
      <ErrorBoundary fallback={<p>Oops! Looks like an error!</p>}>
        <Routes>
          <Route>
            <Route index element={<MainPage />} />
            <Route path="/person/:id" element={<PersonPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default App;
