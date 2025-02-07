import { useState } from 'react'
import './dashboard.css'

export default function Dashboard() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  function openMenu(){
    setOpenMobileMenu(prevMobileOpen => !openMobileMenu)
  }

  return (
    <>
        {/* <!-- Sidebar --> */}
    <div className="flex h-screen">
        {/* <!-- Sidebar - for large screens --> */}
        <div className="w-64 max-sm:hidden bg-gray-800 text-white fixed min-sm:relative min-sm:block min-sm:h-auto">
            <div className="px-6 py-4">
                <h2 className="text-2xl font-bold">Dashboard</h2>
            </div>
            <nav className='flex-none'>
                <div className='grid grid-flow-col grid-rows-3 gap-1'>
                    <div className='row-span-3'>Avatar</div>
                    <div className='col-span-2'>
                        <span className='text-stone-100'>Welcome, Fernando</span>
                    </div>
                    <div className='col-span-2 row-span-2'>
                    {/* for the svg images https://www.svgrepo.com/svg/495728/sms */}
                        <a href='' className=''>
                        <svg className='size-5 inline mx-3 mt-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z" fill="#f2f2f2"></path> </g></svg>
                        </a>
                        <a href=''>
                        <svg className='size-5 inline mx-3 mt-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#f2f2f2"></path> <path d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z" fill="#f2f2f2"></path> </g></svg>
                        </a>
                        <a href=''>
                        <svg viewBox="0 0 22 22" className='size-5 inline mx-3 mt-2' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.1 9.2214C18.29 9.2214 17.55 7.9414 18.45 6.3714C18.97 5.4614 18.66 4.3014 17.75 3.7814L16.02 2.7914C15.23 2.3214 14.21 2.6014 13.74 3.3914L13.63 3.5814C12.73 5.1514 11.25 5.1514 10.34 3.5814L10.23 3.3914C9.78 2.6014 8.76 2.3214 7.97 2.7914L6.24 3.7814C5.33 4.3014 5.02 5.4714 5.54 6.3814C6.45 7.9414 5.71 9.2214 3.9 9.2214C2.86 9.2214 2 10.0714 2 11.1214V12.8814C2 13.9214 2.85 14.7814 3.9 14.7814C5.71 14.7814 6.45 16.0614 5.54 17.6314C5.02 18.5414 5.33 19.7014 6.24 20.2214L7.97 21.2114C8.76 21.6814 9.78 21.4014 10.25 20.6114L10.36 20.4214C11.26 18.8514 12.74 18.8514 13.65 20.4214L13.76 20.6114C14.23 21.4014 15.25 21.6814 16.04 21.2114L17.77 20.2214C18.68 19.7014 18.99 18.5314 18.47 17.6314C17.56 16.0614 18.3 14.7814 20.11 14.7814C21.15 14.7814 22.01 13.9314 22.01 12.8814V11.1214C22 10.0814 21.15 9.2214 20.1 9.2214ZM12 15.2514C10.21 15.2514 8.75 13.7914 8.75 12.0014C8.75 10.2114 10.21 8.7514 12 8.7514C13.79 8.7514 15.25 10.2114 15.25 12.0014C15.25 13.7914 13.79 15.2514 12 15.2514Z" fill="#f2f2f2">
                            </path> 
                            </g></svg>
                        </a>
                    </div>
                </div>
            </nav>
            <ul className="mt-6">
                <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Dashboard</li>
                <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Settings</li>
                <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Profile</li>
                <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Messages</li>
                <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Logout</li>
            </ul>
        </div>

        {/* <!-- Main Content --> */}
        {/* <div className="flex-1 lg:ml-64"> */}
        <div className="flex-1 lg:mx-5">
            {/* <!-- Header --> */}
            <div className="bg-white shadow-md p-4 flex justify-between items-center">
                {/* <!-- Hamburger Menu for small screens --> */}
                <button id="hamburger" className={`lg:hidden text-gray-800 focus:outline-none ${!openMobileMenu ? undefined : 'sm:hidden' }`} onClick={openMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                <p className="text-[28px] max-md:text-[20px] font-semibold max-sm:text-[24px]">Welcome Dashboard</p>
                <div className="flex items-center">
                    <div className='mr-2'><button className="bg-blue-500 text-white px-4 py-2 rounded">Notifications</button></div>
                    <div className='ml-2'><button className="bg-blue-500 text-white px-4 py-2 rounded">User</button></div>
                    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">Notifications</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">User</button> */}
                </div>
            </div>

            {/* <!-- Content Section --> */}
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-4">Statistics</h3>
                        <p className="text-gray-600">Some key statistics about the system.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                        <p className="text-gray-600">List of recent activities performed by users.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <p className="text-gray-600">Links to commonly used features or pages.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Mobile Sidebar Toggle (Hidden on large screens) --> */}
    <div id="mobile-sidebar" className={`lg:hidden min-sm:hidden fixed inset-0 bg-gray-800 opacity-95 z-50 ${openMobileMenu ? '' : 'hidden'}`}>
        <div className="w-64 bg-gray-800 text-white h-full">
            <div className="px-6 pt-4">
                <button id="hamburger" className={`text-stone-50 focus:outline-none`} onClick={openMenu}>
                <svg viewBox="0 0 24 24" className='h-12 w-12' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z" fill="#ffff"></path> </g></svg>
                </button>
            </div>
            <div className="px-6 pb-4">
                <h2 className="text-2xl font-bold">Dashboard</h2>
            </div>
            <ul className="mt-2">
                <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Dashboard</li>
                <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Settings</li>
                <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Profile</li>
                <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Messages</li>
                <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Logout</li>
            </ul>
        </div>
    </div>

    
    </>
  )
}


