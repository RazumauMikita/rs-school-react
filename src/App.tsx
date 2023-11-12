import { FC, useState } from "react";
import MainPage from "./Pages/MainPage/MainPage";

import ErrorBoundary from "./ErrorBoundary.tsx";
import { Route, Routes } from "react-router-dom";
import PersonPage from "./Pages/PersonPage/PersonPage.tsx";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage.tsx";
import { InputValueContext } from "./contexts/AppContextProvider.tsx";

const App: FC = () => {
  const [toggleSide, setToggleSide] = useState(false);
  const [inputValue, setInputValue] = useState<string>(
    localStorage.getItem("search-query") || "",
  );
  return (
    <>
      <ErrorBoundary fallback={<p>Oops! Looks like an error!</p>}>
        <InputValueContext.Provider value={{ inputValue, setInputValue }}>
          <Routes>
            <Route
              path="/"
              element={
                <MainPage
                  toggleSide={toggleSide}
                  setToggleSide={setToggleSide}
                />
              }
            >
              <Route
                path="/person/:id"
                element={<PersonPage setToggleSide={setToggleSide} />}
              />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </InputValueContext.Provider>
      </ErrorBoundary>
    </>
  );
};

export default App;
