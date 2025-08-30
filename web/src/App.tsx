import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState<string>("");
  const API = import.meta.env.VITE_API_BASE ?? "";

  useEffect(() => {
    fetch(`${API}/api/hello?name=World`)
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Vite + React + TypeScript</h1>
      <p>{message || "Loading..."}</p>
    </div>
  );
}

export default App;