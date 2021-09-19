import { MdArrowDropDown } from 'react-icons/md';
import { RiCheckboxBlankLine, RiMore2Fill, RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import {HiPencil} from 'react-icons/hi';
import { IoReload } from 'react-icons/io5';
import React from "react";
import MainButton from './MainButton';

function MainTop() {
    return (
        <React.Fragment>
            <div className="flex flex-row items-center space-x-2">
                <div className="flex flex-row items-center">
                    <MainButton icon={RiCheckboxBlankLine} rounded="rounded" />
                    <MainButton icon={MdArrowDropDown} rounded="rounded" />
                </div>
                <div className="flex flex-row items-center space-x-1">
                    <MainButton icon={IoReload} rounded="rounded-full" />
                </div>
                <div className="flex flex-row items-center space-x-1">
                    <MainButton icon={RiMore2Fill} rounded="rounded-full" />
                </div>
            </div>
            <div className="flex flex-row items-center space-x-2">
                <div className="flex flex-row items-center space-x-1">
                    <button type="button" className="flex flex-row items-center hover:bg-gray-100 p-2 rounded">
                        <span className="block text-gray-600 text-sm">1-50 dari 724</span>
                    </button>
                </div>
                <div className="flex flex-row items-center space-x-1">
                    <MainButton icon={RiArrowLeftSLine} rounded="rounded-full" />
                </div>
                <div className="flex flex-row items-center space-x-1">
                    <MainButton icon={RiArrowRightSLine} rounded="rounded-full" />
                </div>
                <div className="flex flex-row items-center">
                    <MainButton icon={HiPencil} rounded="rounded" />
                    <MainButton icon={MdArrowDropDown} rounded="rounded" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainTop;