import React from "react";
import Navbar from './component/navbar/Navbar'
import Sidebar from "./component/sidebar/Sidebar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="relative w-full h-max overflow-hidden">
        <div className="flex flex-row items-start justify-between">
          <div className="w-64 h-full">
            <Sidebar/>
          </div>
          <div className="flex-grow">2</div>
          <div>3</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
