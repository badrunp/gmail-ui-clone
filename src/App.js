import React from "react";
import Navbar from './component/navbar/Navbar'
import Sidebar from "./component/sidebar/Sidebar";
import SidebarRight from "./component/sidebar/SidebarRight";
import Main from "./component/main/Main";


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="relative w-full h-max overflow-hidden">
        <div className="flex flex-row items-start justify-between">
          <Sidebar />
          <Main />
          <SidebarRight />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
