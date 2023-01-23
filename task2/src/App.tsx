import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthorize } from "hooks";
import { routes } from "consts";
import { Login } from "pages";

export const App = () => {
  const [authorized, signIn, signOut] = useAuthorize();

  return (
    <Routes>
      {routes
        .filter((route) => authorized || !route.protected)
        .map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <>
                {<button onClick={signOut}>sign out</button>}
                <Component />
              </>
            }
          />
        ))}
      <Route
        path="/login"
        element={<Login authLogin={authorized} signIn={signIn} />}
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
