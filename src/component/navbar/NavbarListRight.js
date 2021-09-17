import IconComponent from "../IconComponent";

function NavbarListRight(props) {
    const icon = props.icon || null;
    const image = props.image;
    const imageList = props.imageList;

    if (imageList) {
        return (
            <li>
                <button className="block text-gray-600 p-1 hover:bg-gray-200 rounded-full ml-1">
                    <img src={image} alt="gmail ui clone" className="rounded-full" />
                </button>
            </li>
        )
    }

    return (
        <li>
            <button className="block text-gray-600 p-2 hover:bg-gray-200 rounded-full">
                <IconComponent icon={icon} />
            </button>
        </li>
    )
}

export default NavbarListRight;