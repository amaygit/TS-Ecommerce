import { useAuth } from "@clerk/react";
import { Routes, Route } from "react-router";
import PageLoader from "./components/PageLoader.jsx";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  const { isLoaded } = useAuth();

  if (!isLoaded) return <PageLoader />;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;