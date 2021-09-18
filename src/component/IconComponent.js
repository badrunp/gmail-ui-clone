function IconComponent(props){
    const Icon = props.icon;
    const size = props.size || 'w-6 h-6';
    const color = props.color || 'text-gray-400';
    const className = props.className || '';
    return (
        <Icon className={color + ' ' + size + ' ' + className} />
    )
}

export default IconComponent;