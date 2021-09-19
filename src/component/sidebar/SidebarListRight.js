import IconComponent from "../IconComponent";

function SidebarListRight(props) {
    const image = props.image || null;
    const type = props.type;
    const icon = props.icon || null;

    let content;
    if (type === 'image') {
        content = <img src={image} alt="gmail ui clone" />
        
    } else {
        content = <IconComponent icon={icon} />
        
    }
    return (
        <li>
            <button className="w-10 hover:bg-gray-100 rounded-full" style={{ padding: '10px' }}>
                {content}
            </button>
        </li>
    )
}

export default SidebarListRight;