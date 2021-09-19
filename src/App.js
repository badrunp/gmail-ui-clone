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
          <div className="w-64 h-full overflow-hidden">
            <Sidebar />
          </div>
          <div className="flex-grow h-auto overflow-hidden border-r border-gray-200">
            <Main/>
          </div>
          <div className="p-2 w-auto h-auto overflow-hidden">
            <SidebarRight />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
