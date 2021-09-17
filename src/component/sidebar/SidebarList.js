import { BaseUrl } from "../../config/url";
import IconComponent from "../IconComponent";

function SidebarList(props) {
    const active = props.active;
    const isBgActive = active ? 'bg-red-100' : 'hover:bg-gray-100';
    const isTextActive = active ? 'text-red-500' : 'text-gray-600';
    const isFontActive = props.count > 0 ? 'font-bold' : '';
    const count = props.count !== 0 ? props.count : null
    const title = props.title;
    const icon = props.icon;
    return (
        <li className={"pr-3 rounded-r-full py-1 " + isBgActive} style={{ paddingLeft: '26px' }}>
            <div className={"flex flex-row space-x-4 items-center justify-between tracking-tight " + isTextActive + ' ' + isFontActive} >
                <IconComponent icon={icon} size="w-5 h-5" color={isTextActive} />
                <div className="flex-grow">
                    <a href={BaseUrl} className="block">{title}</a>
                </div>
                {count ? (
                    <span className="block text-sm">{count}</span>
                ) : null}
            </div>
        </li>
    )
}

export default SidebarList;