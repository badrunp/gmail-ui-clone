
import { MdInbox } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { GoPencil } from 'react-icons/go';
import { useEffect, useState } from 'react';
import IconComponent from '../IconComponent';

const datas = [
    { id: 1, icon: MdInbox, title: 'Utama', notif: 0, description: '', className: 'text-gray-500' },
    { id: 2, icon: FaUserFriends, title: 'Sosial', notif: 12, description: 'Facebook, Youtube, Instagram,...', className: 'text-white bg-blue-500' },
    { id: 3, icon: GoPencil, title: 'Promo', notif: 10, description: 'Icon8 Team, Traco From Trello,...', className: 'text-white bg-green-500' },
]


function MainInbox() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(datas);
    }, [items])

    return (
        <div className="w-full h-auto relative overflow-hidden">
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
        </div>
    )
}

export default MainInbox;