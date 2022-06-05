import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [search, setSearch] = useState('');

  return (
    <>
      <Header search={search} setSearch={setSearch} />  
      <Main search={search} />
    </>
  );
}

export default App;
