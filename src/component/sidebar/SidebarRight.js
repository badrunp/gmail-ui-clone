import imgcalender from '../../assets/calendar_2020q4_2x.png';
import imgkeep from '../../assets/keep_2020q4v3_2x.png';
import imgtask from '../../assets/tasks2_2x.png';
import imgcontact from '../../assets/contacts_2x.png';
import { GrFormAdd } from 'react-icons/gr';
import SidebarListRight from './SidebarListRight';


function SidebarRight() {
    return (
        <div className="p-2 w-auto h-auto overflow-hidden">
            <ul className="flex flex-col space-y-5 items-center justify-start">
                <SidebarListRight image={imgcalender} type="image" />
                <SidebarListRight image={imgkeep} type="image" />
                <SidebarListRight image={imgtask} type="image" />
                <SidebarListRight image={imgcontact} type="image" />
                <li>
                    <span className="block my-1 w-5 border-t border-gray-300"></span>
                </li>
                <SidebarListRight icon={GrFormAdd} type="icon" />
            </ul>
        </div>
    )
}

export default SidebarRight;