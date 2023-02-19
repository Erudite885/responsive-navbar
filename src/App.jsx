import React from "react";
import { Navigation, Header } from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className='sm:px-16 px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full '>
          <Navigation />
        </div>
      </div>
      <Header />
    </div>
  );
};

export default App;
