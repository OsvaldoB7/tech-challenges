import { useState } from "react";
import { Login } from "./pages/Login/Login";
import { Products } from "./pages/Products/Products";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [user, setUser] = useLocalStorage<string | null>(
    "shipay_user",
    null
  );

  const handleLogin = (email: string) => {
    setUser(email);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Products userEmail={user} onLogout={handleLogout} />
      )}
    </>
  );
}

export default App;
