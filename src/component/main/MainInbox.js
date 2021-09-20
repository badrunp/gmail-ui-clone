
import { MdInbox } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { GoPencil } from 'react-icons/go';
import { useEffect, useState } from 'react';
import IconComponent from '../IconComponent';

const datas = [
    { id: 1, icon: MdInbox, title: 'Utama', notif: 0, description: '' },
    { id: 2, icon: FaUserFriends, title: 'Sosial', notif: 12, description: 'Facebook, Youtube, Instagram, Twiter' },
    { id: 3, icon: GoPencil, title: 'Promo', notif: 10, description: 'Icon8 Team, Traco From Trello, Heroicon' },
]


function MainInbox() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(datas);
    }, [items])

    return (
        <div className="w-full h-auto relative overflow-hidden">
            <div className="grid grid-cols-4 border-b border-gray-200">
                {items.length > 0 && items.map((item, index) => (
                    <div key={item.id} className="flex flex-row items-center py-4 px-5 hover:bg-gray-200 cursor-pointer">
                        <IconComponent icon={item.icon} size="w-5 h-5" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainInbox;