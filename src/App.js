import React, { Suspense } from "react";
import './index.css';
import { BrowserRouter } from "react-router-dom";
import AppRouters from "./routes/AppRouters";
import { Providers } from "./redux/provider";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Providers>
        <BrowserRouter>
          <AppRouters />
        </BrowserRouter>
      </Providers>
    </Suspense>
  );
}

export default App;
