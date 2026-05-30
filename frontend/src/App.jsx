import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/clerk-react";
import PageLoader from "./components/PageLoader.jsx";
import Layout from "./components/Layout.jsx";
function App() {
  const {isLoaded} = useAuth()
  if(!isLoaded)    return <PageLoader/>
  
  return (
    <Layout>
      <header>
        <SignedOut>
          <SignInButton mode="modal" />
          <SignUpButton mode="modal" />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <button className="btn btn-primary">Click me</button>
    </Layout>
  );
}

export default App;
