import IconComponent from "../IconComponent";
import { IoOptions } from 'react-icons/io5';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRef } from "react";


function NavbarSearch() {

    const divRef = useRef();

    const handleFocus = () => {
        divRef.current.classList.remove('bg-gray-100')
        divRef.current.classList.add('bg-white')
        divRef.current.classList.add('shadow')
    }

    const handleBlur = () => {
        divRef.current.classList.add('bg-gray-100')
        divRef.current.classList.remove('bg-white')
        divRef.current.classList.remove('shadow')
    }

    return (
        <div className="flex-grow pl-1 pr-52 flex flex-row h-full items-center justify-start">
            <div ref={divRef} className="bg-gray-100 w-full px-1 rounded-md flex flex-row items-center justify-between transition ease-out duration-200" style={{ height: '46px' }}>
                <div className="px-1">
                    <button className="block hover:bg-gray-200 rounded-full p-2">
                        <IconComponent icon={AiOutlineSearch} />
                    </button>
                </div>
                <div className="flex-grow">
                    <form>
                        <input type="text" className="w-full focus:outline-none bg-transparent" placeholder="Telusuri Email" onFocus={handleFocus} onBlur={handleBlur} />
                    </form>
                </div>
                <div className="px-1">
                    <button className="block hover:bg-gray-200 rounded-full p-2">
                        <IconComponent icon={IoOptions} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavbarSearch;