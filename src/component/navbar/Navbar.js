import React from 'react';
import NavbarLogo from './NavbarLogo';
import { BiHelpCircle } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import fprofil from '../../assets/unnamed.jpg';
import NavbarListRight from './NavbarListRight';
import NavbarSearch from './NavbarSearch';

function Navbar() {
    return (
        <React.Fragment>
            <div className="relative w-full h-max overflow-hidden">
                <div className="h-16 border-b border-gray-200 px-2">
                    <div className="flex flex-row items-center h-full justify-between">
                        <NavbarLogo />
                        <NavbarSearch/>
                        <ul className="flex flex-row space-x-1 mr-1">
                            <NavbarListRight icon={BiHelpCircle} />
                            <NavbarListRight icon={AiOutlineSetting} />
                            <NavbarListRight icon={CgMenuGridO} />
                            <NavbarListRight imageList={true} image={fprofil} />
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar;