import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CitiesProvider, useCities } from "./contexts/CitiesContext";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { AuthProvider } from "./contexts/FakeAuthContext";

import City from "./components/City";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

import { Suspense, lazy } from "react";
//! Lazy Loading
const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

import ProtectedRoute from "./pages/ProtectedRoute";
polyfillCountryFlagEmojis();

function App() {
  return (
    <div>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="login" element={<Login />} />

                {/* Making nested routes: */}
                <Route
                  path="app"
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  {/* React Router sees the 'app' declared, notices the next part, selects it to be rendered, and finds the appropriate <Outlet/> element in the desired component. */}
                  {/* Creating a default 'index' route to automatically re-route to: */}
                  {/* This is the main use case for Navigate now, otherwise, it's quite outdated. */}
                  <Route index element={<Navigate replace to="cities" />} />
                  <Route
                    path="cities"
                    //! Props removed to use useContext.
                    element={<CityList />}
                  />
                  {/* Using params with React Router: New Route, Link to New Route, Read the State */}
                  <Route path="cities/:id" element={<City />} />

                  <Route path="countries" element={<CountryList />} />
                  <Route path="form" element={<Form />} />
                </Route>

                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
