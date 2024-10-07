import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Component/Main/Main";
import ProtectedLayout from "./Utilty/ProtectedRoute/ProtectedLayout";

import MusicList from "./Component/MusicList/MusicList";

const MyHeadspace = lazy(() => import("./Pages/MyHeadspace/MyHeadspace"));
const HeadspaceContent = lazy(() =>
  import("./Component/HeadspaceContent/HeadspaceContent")
);

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route element={<ProtectedLayout />}>
            <Route
              path="myHeadspace"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MyHeadspace />
                </Suspense>
              }
            >
              <Route
                path="meditate"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <HeadspaceContent option="meditate" />
                  </Suspense>
                }
              />
              <Route
                path="focus"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <HeadspaceContent option="focus" />
                  </Suspense>
                }
              />
              <Route path="meditate/music" element={<MusicList />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
