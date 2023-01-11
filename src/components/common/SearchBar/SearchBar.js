import React from 'react';
import { BiSearchAlt } from "react-icons/bi";

function SearchBar() {
    return (
        <form className="max-w-sm pr-4">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-2 pl-3 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    pattern="\d{4}-\d{1,2}-\d{1,2}" 
                />
                <div className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-3 cursor-pointer">
                    <BiSearchAlt/>
                </div>
            </div>
        </form>
    );
}

export default SearchBar;