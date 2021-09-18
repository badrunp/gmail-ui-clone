import React from "react";
import Navbar from './component/navbar/Navbar'
import Sidebar from "./component/sidebar/Sidebar";
import imgcalender from './assets/calendar_2020q4_2x.png';
import imgkeep from './assets/keep_2020q4v3_2x.png';
import imgtask from './assets/tasks2_2x.png';
import imgcontact from './assets/contacts_2x.png';
import { GrFormAdd } from 'react-icons/gr';
import IconComponent from "./component/IconComponent";


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="relative w-full h-max overflow-hidden">
        <div className="flex flex-row items-start justify-between">
          <div className="w-64 h-full">
            <Sidebar />
          </div>
          <div className="flex-grow">2</div>
          <div className="p-2 w-auto h-auto">
            <ul className="flex flex-col space-y-5 items-center justify-start">
              <li>
                <button className="w-10 hover:bg-gray-100 rounded-full" style={{padding: '10px'}}>
                    <img src={imgcalender} alt="gmail ui clone" />
                </button>
              </li>         
              <li>
                <button className="w-10 hover:bg-gray-100 rounded-full" style={{padding: '10px'}}>
                    <img src={imgkeep} alt="gmail ui clone" />
                </button>
              </li>         
              <li>
                <button className="w-10 hover:bg-gray-100 rounded-full" style={{padding: '10px'}}>
                    <img src={imgtask} alt="gmail ui clone" />
                </button>
              </li>         
              <li>
                <button className="w-10 hover:bg-gray-100 rounded-full" style={{padding: '10px'}}>
                    <img src={imgcontact} alt="gmail ui clone" />
                </button>
              </li>         
              <li>
                <span className="block my-1 w-5 border-t border-gray-300"></span>
              </li>         
              <li>
                <button className="w-10 hover:bg-gray-100 rounded-full" style={{padding: '10px'}}>
                    <IconComponent icon={GrFormAdd} />
                </button>
              </li>         
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
