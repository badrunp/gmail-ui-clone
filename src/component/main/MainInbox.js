
import { MdInbox } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { GoPencil } from 'react-icons/go';
import { useEffect, useState } from 'react';
import IconComponent from '../IconComponent';
import { RiCheckboxBlankLine,RiMailCheckFill,RiArrowDownCircleFill } from 'react-icons/ri';
import { AiOutlineStar, AiFillClockCircle } from 'react-icons/ai';
import {MdDelete} from 'react-icons/md';
import MainButton from './MainButton';


const dataNotif = [
    { id: 1, icon: MdInbox, title: 'Utama', notif: 0, description: '', className: 'text-gray-500' },
    { id: 2, icon: FaUserFriends, title: 'Sosial', notif: 12, description: 'Facebook, Youtube, Instagram,...', className: 'text-white bg-blue-500' },
    { id: 3, icon: GoPencil, title: 'Promo', notif: 10, description: 'Icon8 Team, Traco From Trello,...', className: 'text-white bg-green-500' },
]

const dataInboxs = [
    {
        boxIcon: RiCheckboxBlankLine,
        starIcon: AiOutlineStar,
        title: 'Niagahoster Updates',
        description: 'Fitur dan penawaran terbaru September 2021 - 4 fitur terbaru Niagahoster cek info selengkapnya',
        date: '18 Sep',
        read: false,
        clockIcon: AiFillClockCircle,
        mailIcon: RiMailCheckFill,
        deleteIcon: MdDelete,
        arsipIcon: RiArrowDownCircleFill
    },
    {
        boxIcon: RiCheckboxBlankLine,
        starIcon: AiOutlineStar,
        title: 'Niagahoster Updates',
        description: 'Fitur dan penawaran terbaru September 2021 - 4 fitur terbaru Niagahoster cek info selengkapnya',
        date: '18 Sep',
        read: true,
        clockIcon: AiFillClockCircle,
        mailIcon: RiMailCheckFill,
        deleteIcon: MdDelete,
        arsipIcon: RiArrowDownCircleFill
    },
    {
        boxIcon: RiCheckboxBlankLine,
        starIcon: AiOutlineStar,
        title: 'Niagahoster Updates',
        description: 'Fitur dan penawaran terbaru September 2021 - 4 fitur terbaru Niagahoster cek info selengkapnya',
        date: '18 Sep',
        read: true,
        clockIcon: AiFillClockCircle,
        mailIcon: RiMailCheckFill,
        deleteIcon: MdDelete,
        arsipIcon: RiArrowDownCircleFill
    },
    {
        boxIcon: RiCheckboxBlankLine,
        starIcon: AiOutlineStar,
        title: 'Niagahoster Updates',
        description: 'Fitur dan penawaran terbaru September 2021 - 4 fitur terbaru Niagahoster cek info selengkapnya',
        date: '18 Sep',
        read: false,
        clockIcon: AiFillClockCircle,
        mailIcon: RiMailCheckFill,
        deleteIcon: MdDelete,
        arsipIcon: RiArrowDownCircleFill
    },
    {
        boxIcon: RiCheckboxBlankLine,
        starIcon: AiOutlineStar,
        title: 'Niagahoster Updates',
        description: 'Fitur dan penawaran terbaru September 2021 - 4 fitur terbaru Niagahoster cek info selengkapnya',
        date: '18 Sep',
        read: false,
        clockIcon: AiFillClockCircle,
        mailIcon: RiMailCheckFill,
        deleteIcon: MdDelete,
        arsipIcon: RiArrowDownCircleFill
    },
    {
        boxIcon: RiCheckboxBlankLine,
        starIcon: AiOutlineStar,
        title: 'Niagahoster Updates',
        description: 'Fitur dan penawaran terbaru September 2021 - 4 fitur terbaru Niagahoster cek info selengkapnya',
        date: '18 Sep',
        read: false,
        clockIcon: AiFillClockCircle,
        mailIcon: RiMailCheckFill,
        deleteIcon: MdDelete,
        arsipIcon: RiArrowDownCircleFill
    },
    {
        boxIcon: RiCheckboxBlankLine,
        starIcon: AiOutlineStar,
        title: 'Niagahoster Updates',
        description: 'Fitur dan penawaran terbaru September 2021 - 4 fitur terbaru Niagahoster cek info selengkapnya',
        date: '18 Sep',
        read: false,
        clockIcon: AiFillClockCircle,
        mailIcon: RiMailCheckFill,
        deleteIcon: MdDelete,
        arsipIcon: RiArrowDownCircleFill
    },
    {
        boxIcon: RiCheckboxBlankLine,
        starIcon: AiOutlineStar,
        title: 'Niagahoster Updates',
        description: 'Fitur dan penawaran terbaru September 2021 - 4 fitur terbaru Niagahoster cek info selengkapnya',
        date: '18 Sep',
        read: false,
        clockIcon: AiFillClockCircle,
        mailIcon: RiMailCheckFill,
        deleteIcon: MdDelete,
        arsipIcon: RiArrowDownCircleFill
    },
    {
        boxIcon: RiCheckboxBlankLine,
        starIcon: AiOutlineStar,
        title: 'Niagahoster Updates',
        description: 'Fitur dan penawaran terbaru September 2021 - 4 fitur terbaru Niagahoster cek info selengkapnya',
        date: '18 Sep',
        read: false,
        clockIcon: AiFillClockCircle,
        mailIcon: RiMailCheckFill,
        deleteIcon: MdDelete,
        arsipIcon: RiArrowDownCircleFill
    },
    {
        boxIcon: RiCheckboxBlankLine,
        starIcon: AiOutlineStar,
        title: 'Niagahoster Updates',
        description: 'Fitur dan penawaran terbaru September 2021 - 4 fitur terbaru Niagahoster cek info selengkapnya',
        date: '18 Sep',
        read: false,
        clockIcon: AiFillClockCircle,
        mailIcon: RiMailCheckFill,
        deleteIcon: MdDelete,
        arsipIcon: RiArrowDownCircleFill
    },
    {
        boxIcon: RiCheckboxBlankLine,
        starIcon: AiOutlineStar,
        title: 'Niagahoster Updates',
        description: 'Fitur dan penawaran terbaru September 2021 - 4 fitur terbaru Niagahoster cek info selengkapnya',
        date: '18 Sep',
        read: false,
        clockIcon: AiFillClockCircle,
        mailIcon: RiMailCheckFill,
        deleteIcon: MdDelete,
        arsipIcon: RiArrowDownCircleFill
    },
    {
        boxIcon: RiCheckboxBlankLine,
        starIcon: AiOutlineStar,
        title: 'Niagahoster Updates',
        description: 'Fitur dan penawaran terbaru September 2021 - 4 fitur terbaru Niagahoster cek info selengkapnya',
        date: '18 Sep',
        read: false,
        clockIcon: AiFillClockCircle,
        mailIcon: RiMailCheckFill,
        deleteIcon: MdDelete,
        arsipIcon: RiArrowDownCircleFill
    },
    {
        boxIcon: RiCheckboxBlankLine,
        starIcon: AiOutlineStar,
        title: 'Niagahoster Updates',
        description: 'Fitur dan penawaran terbaru September 2021 - 4 fitur terbaru Niagahoster cek info selengkapnya',
        date: '18 Sep',
        read: false,
        clockIcon: AiFillClockCircle,
        mailIcon: RiMailCheckFill,
        deleteIcon: MdDelete,
        arsipIcon: RiArrowDownCircleFill
    },
    {
        boxIcon: RiCheckboxBlankLine,
        starIcon: AiOutlineStar,
        title: 'Niagahoster Updates',
        description: 'Fitur dan penawaran terbaru September 2021 - 4 fitur terbaru Niagahoster cek info selengkapnya',
        date: '18 Sep',
        read: false,
        clockIcon: AiFillClockCircle,
        mailIcon: RiMailCheckFill,
        deleteIcon: MdDelete,
        arsipIcon: RiArrowDownCircleFill
    },
    {
        boxIcon: RiCheckboxBlankLine,
        starIcon: AiOutlineStar,
        title: 'Niagahoster Updates',
        description: 'Fitur dan penawaran terbaru September 2021 - 4 fitur terbaru Niagahoster cek info selengkapnya',
        date: '18 Sep',
        read: false,
        clockIcon: AiFillClockCircle,
        mailIcon: RiMailCheckFill,
        deleteIcon: MdDelete,
        arsipIcon: RiArrowDownCircleFill
    },
    {
        boxIcon: RiCheckboxBlankLine,
        starIcon: AiOutlineStar,
        title: 'Niagahoster Updates',
        description: 'Fitur dan penawaran terbaru September 2021 - 4 fitur terbaru Niagahoster cek info selengkapnya',
        date: '18 Sep',
        read: false,
        clockIcon: AiFillClockCircle,
        mailIcon: RiMailCheckFill,
        deleteIcon: MdDelete,
        arsipIcon: RiArrowDownCircleFill
    },
    {
        boxIcon: RiCheckboxBlankLine,
        starIcon: AiOutlineStar,
        title: 'Niagahoster Updates',
        description: 'Fitur dan penawaran terbaru September 2021 - 4 fitur terbaru Niagahoster cek info selengkapnya',
        date: '18 Sep',
        read: false,
        clockIcon: AiFillClockCircle,
        mailIcon: RiMailCheckFill,
        deleteIcon: MdDelete,
        arsipIcon: RiArrowDownCircleFill
    },
    {
        boxIcon: RiCheckboxBlankLine,
        starIcon: AiOutlineStar,
        title: 'Niagahoster Updates',
        description: 'Fitur dan penawaran terbaru September 2021 - 4 fitur terbaru Niagahoster cek info selengkapnya',
        date: '18 Sep',
        read: false,
        clockIcon: AiFillClockCircle,
        mailIcon: RiMailCheckFill,
        deleteIcon: MdDelete,
        arsipIcon: RiArrowDownCircleFill
    },
]

function MainInbox() {
    const [items, setItems] = useState([]);
    const [inboxs, setInboxs] = useState([]);

    useEffect(() => {
        setItems(dataNotif);
        setInboxs(dataInboxs);
    }, [items])

    return (
        <div className="relative overflow-x-hidden overflow-y-auto" style={{height: '500px'}}>
            <div className="grid grid-cols-4 border-b border-gray-200">
                {items.length > 0 && items.map((item, index) => {
                    const firstItem = index === 0 ? 'border-b-2 border-red-500' : 'border-b-2 border-transparent';
                    const textRed = index === 0 ? 'text-red-500' : '';
                    return (
                        <div key={item.id} className={"flex flex-row items-center py-2 px-5 hover:bg-gray-100 cursor-pointer space-x-4 overflow-hidden " + firstItem}>
                            <div className="flex-none">
                                <IconComponent icon={item.icon} size="w-5 h-5" color={textRed} />
                            </div>
                            <div className="flex flex-col items-start space-y-1">
                                <div className="flex flex-row items-center space-x-2">
                                    <h4 className={"block text-sm font-medium " + textRed}>{item.title}</h4>
                                    {item.notif !== 0 && (
                                        <p className={"block text-xs px-1 font-medium rounded-sm " + item.className}>{item.notif} baru</p>
                                    )}
                                </div>
                                {item.description !== '' && (
                                    <p className="block text-xs text-gray-400 truncate">{item.description}</p>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="flex flex-col items-start">
                {inboxs.length > 0 && inboxs.map((item, index) => {
                    const read = item.read ? 'bg-gray-50' : 'font-semibold';
                    return (
                        <div className={"flex flex-row items-center relative justify-between px-3 border-b border-gray-200 w-full space-x-10 cursor-pointer group hover:shadow " + read}>
                            <div className="flex flex-row items-center space-x-2">
                                <div className="flex flex-row items-center">
                                    <MainButton icon={item.boxIcon} color="text-gray-400" />
                                    <MainButton icon={item.starIcon} color="text-gray-400" />
                                </div>
                                <h5 className="block text-sm truncate">{item.title}</h5>
                            </div>
                            <div className="flex-grow">
                                <h5 className="block text-sm truncate">{item.description}</h5>
                            </div>
                            <h5 className="block text-sm group-hover:hidden">{item.date}</h5>
                            <div className="hidden flex-row items-center group-hover:flex absolute right-0">
                                <MainButton icon={item.arsipIcon} color="text-gray-400" />
                                <MainButton icon={item.deleteIcon} color="text-gray-400" />
                                <MainButton icon={item.mailIcon} color="text-gray-400" />
                                <MainButton icon={item.clockIcon} color="text-gray-400" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MainInbox;