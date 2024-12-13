import React, { lazy, Suspense} from "react";

import Loading from "./components/Loading";

const LazyComponent = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./pages")), 3000)
  )
);

const App = () => {

  return (
    <div className="h-screen w-screen bg-gradient-to-tl from-green-950 via-blue-950 to-black animate-gradient bg-[length:400%_400%] flex flex-col">
      <Suspense fallback={<Loading />}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;
