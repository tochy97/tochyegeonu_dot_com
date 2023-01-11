// Main
export const container = `flex flex-col place-items-center mt-[95px] mb-[75px] h-full w-full px-6 z-0 text-[20px]`;
export const innerContainer = "mt-3 text-xl px-6 border border-black py-6 rounded bg-gray-100 h-full w-[80vw]";
export const pageHeader = "font-medium text-3xl";
export const pageHeaderClickable = `${pageHeader} + w-fit font-bold hover:text-blue-500 cursor-pointer`;
export const pageTitle = "text-5xl font-bold mb-3 text-center";
export const pageDivider = "border-black w-100 my-3";
export const stack = 'grid grid-cols-1 gap-3';
export const centerContainer = "flex w-full place-content-center"
export const doubleStack = 'mt-3 grid grid-cols-2 md:gap-6';
export const innerText = "text-[19px] md:text-xl";
export const fixedSubBox = 'absolute top-[90px] lg:top-[160px] flex';
export const textContainer = "grid grid-cols-1 gap-4 place-items-center";
export const fixedOptionBox = 'fixed top-[96px] left-[30px] md:left-[20px]flex z-40';
export const scrollTracker = "fixed right-0 top-[75px] left-0 h-[10px] origin-[0%] z-20 bg-red-500";
export const star = "ring-blue-500 ring-offset-4 ring-offset-blue-100 z-30 cursor-grab active:cursor-grabbing";

//Common
export const modalContainer = "z-40 p-10 bg-white cursor-default outline outline-blue-500 outline-4";
export const modalIcons = 'md:ml-4 lg:ml-7 text-[20px] md:text-[35px] text-red-500';
export const modalHeaderContainer = "text-sm md:text-3xl px-5 py-2 md:flex flex justify-center";
export const modalContentContainer = 'mb-3 text-sm md:text-lg lg:text-2xl';

//Footer
export const footer = "fixed z-20 h-[65px] bottom-0 w-full flex place-content-center";
export const footerContainer = 'w-full flex pt-3 pb-5 flex gap-7 lg:gap-9 place-content-center bg-white hover:opacity-1 shadow-inner';
export const footerIcon = 'text-black hover:text-blue-500 text-2xl md:text-3xl cursor-pointer';

//Inputs
export const textField = "border-2 border-gray-500 rounded-lg py-2 px-3 w-full placeholder:text-[17px] focus:outline-blue-500";

//Button
export const button = "bg-gray-500 text-white px-3 py-1 cursor-pointer rounded-lg w-fit focus:outline-none focus:ring focus:ring-white";
export const disabledButton = `${button} cursor-default bg-gray-400`
export const closeButton = `${button} hover:bg-red-500 active:bg-red-600`;
export const submitButton = `${button} hover:bg-blue-500 active:bg-blue-600`;
export const pictureButton = "hover:text-red-600 ml-2 mt-3 cursor-pointer";

//History
export const historyContainer = "static mt-[135px] w-full px-12 md:p-24 text-2xl mt-16 overflow-y-scroll z-0 select-none";
export const monthContainer = "mb-12 border border-grey-100";
export const monthGrid = "w-full h-full grid grid-cols-7 divide-x divide-y";
export const monthHeader = "col-span-1 border-b-2 border-red-500 flex justify-evenly items-center xl:text-4xl py-4 lg:pt-8 lg:pb-3";
export const weekHeaderContainer = "w-full grid grid-cols-7 divide-x border-y border-grey-100 text-sm md:text-2xl";
export const weekContainer = "md:px-5 py-2 text-center";
export const dayContainer = "md:h-24 h-16 text-sm md:text-2xl px-5 py-2 cursor-pointer hover:shadow-xl md:flex";
export const calenderIcons = 'mt-1 md:ml-4 lg:ml-7 md:text-[23px] text-red-500';

// Nav
export const navBar = "fixed top-0 bg-white w-full h-[75px] flex flex-wrap items-center justify-between px-2 text-md z-50 shadow-lg";
export const navContainer = "container px-4 mx-auto flex flex-wrap items-center justify-between";
export const navComponentContainer = "w-fit py-6 drop-shadow-md";
export const navTitleContainer = "relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start";
export const navTitle = "font-bold leading-relaxed inli ne-block mx-4 whitespace-nowrap uppercase cursor-pointer hover:text-blue-500";
export const subNavTitle = "font-bold leading-relaxed inline-block mx-4 whitespace-nowrap uppercase cursor-context-menu hover:text-blue-500" ;
export const subNavHeader = "lg:flex flex-grow items-center text-black";
export const subNavContainer = 'flex absolute top-[75px] left-0 w-screen h-screen bg-white flex-col';
export const subNavComponent = "px-3 flex items-center text-sm uppercase font-semibold leading-snug hover:underline underline-offset-4";

//Games
export const gameContainer = "cursor-pointer flex flex-wrap w-[61em] justify-center";

//Snake
export const snakeContainter = "diso"