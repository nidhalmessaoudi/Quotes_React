import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/quotes" element={<h1>Quotes page</h1>} />
      <Route path="/quotes/:quoteId" element={<h1>Quote details page</h1>} />
      <Route path="/newQuote" element={<h1>New Quote page</h1>} />
    </Routes>
  );
}

export default App;
