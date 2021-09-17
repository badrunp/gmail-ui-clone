import React, { useState } from 'react';
import { GrAdd, GrFormAdd } from 'react-icons/gr';
import SidebarList from './SidebarList';
import { AiFillStar, AiFillClockCircle } from 'react-icons/ai';
import { MdSend, MdKeyboardArrowDown, MdInbox, MdKeyboard } from 'react-icons/md';
import { IoMdDocument, IoMdVideocam, IoMdArrowDropdown } from 'react-icons/io';
import fprofil from '../../assets/unnamed.jpg';
import { useEffect } from 'react';
import IconComponent from '../IconComponent';
import { BaseUrl } from '../../config/url';
import {FaUserAlt, FaPhoneAlt} from 'react-icons/fa';
import {IoChatboxEllipses} from 'react-icons/io5';

const dataList1 = [
    { id: 1, icon: MdInbox, active: true, title: 'Kotak Masuk', count: 578 },
    { id: 2, icon: AiFillStar, active: false, title: 'Berbintang', count: 0 },
    { id: 3, icon: AiFillClockCircle, active: false, title: 'Ditunda', count: 0 },
    { id: 4, icon: MdSend, active: false, title: 'Terkirim', count: 0 },
    { id: 5, icon: IoMdDocument, active: false, title: 'Drap', count: 1 },
    { id: 6, icon: MdKeyboardArrowDown, active: false, title: 'Selengkapnya', count: 0 },
]

const dataList2 = [
    { id: 1, icon: IoMdVideocam, active: false, title: 'Rapat Baru', count: 0 },
    { id: 2, icon: MdKeyboard, active: false, title: 'Gabung Ke Rapat', count: 0 },
]

function Sidebar() {

    const [lists1, setList1] = useState([]);
    const [lists2, setList2] = useState([]);

    useEffect(() => {
        setList1(dataList1)
        setList2(dataList2)
    }, [lists1, lists2])

    return (
        <React.Fragment>
            <div className="py-4 flex flex-row w-full items-center justify-start px-2">
                <button className="rounded-full shadow-md flex items-center space-x-3 px-6 py-3 ring-1 ring-gray-100 hover:shadow-lg hover:bg-gray-50">
                    <GrAdd className="w-7 h-7" />
                    <span className="block text-sm font-medium text-gray-600">Tulis</span>
                </button>
            </div>
            <ul className="w-full overflow-hidden">
                {lists1.length > 0 && lists1.map((item, index) => (
                    <SidebarList key={item.id} active={item.active} title={item.title} icon={item.icon} count={item.count} />
                ))}
            </ul>
            <ul className="w-full pt-2 border-t border-gray-200">
                <li className={"pr-3 rounded-r-full pt-1 pb-2"} style={{ paddingLeft: '26px' }}>
                    <span className="block text-sm font-medium">Meet</span>
                </li>
                {lists2.length > 0 && lists2.map((item, index) => (
                    <SidebarList key={item.id} active={item.active} title={item.title} icon={item.icon} count={item.count} />
                ))}
            </ul>
            <ul className="w-full pt-2 border-t border-gray-200">
                <li className={"pr-3 rounded-r-full pt-1 pb-2"} style={{ paddingLeft: '26px' }}>
                    <span className="block text-sm font-medium">Hangout</span>
                </li>
                <li className={"pr-3 rounded-r-full pt-1 pb-2"} style={{ paddingLeft: '26px' }}>
                    <div className="flex flex-row items-center justify-between border-b border-gray-200 pb-2">
                        <div className="contents space-x-1 cursor-pointer group">
                            <div className="relative">
                                <img src={fprofil} alt="gmail ui clone" className="rounded-full w-7 h-7" />
                                <span className="block absolute w-3 h-3 bg-green-500 rounded-full -bottom-1 -right-1"></span>
                            </div>
                            <div className="flex-grow flex flex-row items-center space-x-1">
                                <span className="block text-gray-600 text-sm">Badrun</span>
                                <IconComponent icon={IoMdArrowDropdown} size="w-4 h-4" color="text-gray-400" className="group-hover:text-gray-600" />
                            </div>
                        </div>
                        <div>
                            <IconComponent icon={GrFormAdd} size="w-6 h-6" color="text-gray-400" />
                        </div>
                    </div>
                    <div className="py-3 text-center text-gray-600">
                        <p className="block text-xs font-medium">Tidak ada chat yang Terbaru <a href={BaseUrl} className="block text-blue-500">Mulai yang terbaru</a></p>
                    </div>
                </li>
            </ul>
            <ul className="w-full border-t border-gray-200 h-full">
                <li className={"pr-3 h-full"} style={{ paddingLeft: '26px' }}>
                    <div className="w-full flex flex-row justify-center items-center h-full">
                        <div className="px-3 py-2 h-full">
                            <IconComponent icon={FaUserAlt} size="w-4 h-4" color="text-gray-400" />
                        </div>
                        <div className="border-l border-r px-3 py-2 h-full shadow-inner">
                            <IconComponent icon={IoChatboxEllipses} size="w-4 h-4" color="text-gray-600" />
                        </div>
                        <div className="px-3 py-2 h-full">
                            <IconComponent icon={FaPhoneAlt} size="w-4 h-4" color="text-gray-400" />
                        </div>
                    </div>
                </li>
            </ul>

        </React.Fragment>
    )
}

export default Sidebar;