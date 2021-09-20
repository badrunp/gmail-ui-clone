import IconComponent from "../IconComponent";

function MainButton(props) {
    const icon = props.icon;
    const rounded = props.rounded;
    const color = props.color || 'text-gray-600';
    let classRounded = 'p-2 rounded-full';
    if(rounded === 'rounded'){
        classRounded = 'px-1 py-2 rounded'
    }else if(rounded === 'rounded-full'){
        classRounded = 'p-2 rounded-full'
    }
    return (
        <button type="button" className={"flex flex-row items-center hover:bg-gray-100 group " + classRounded}>
            <IconComponent icon={icon} size="w-5 h-5" color={color} className="group-hover:text-gray-800" />
        </button>
    )
}

export default MainButton;