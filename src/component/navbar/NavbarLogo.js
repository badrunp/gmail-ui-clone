import gmailImage from '../../assets/logo_gmail_lockup_default_1x_r2.png';
import { FcMenu } from 'react-icons/fc'

function NavbarLogo() {
    return (
        <div className="flex flex-row items-center pr-20">
            <button className="block p-3 hover:bg-gray-200 rounded-full mx-1">
                <FcMenu className="w-6 h-6" />
            </button>
            <div className="image">
                <img src={gmailImage} alt="Gmail ui clone" />
            </div>
        </div>
    )
}

export default NavbarLogo;