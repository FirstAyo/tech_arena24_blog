import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from 'react-router-dom';
import menuLinks from '../menuLists.json';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

function Header() {

    const path = useLocation().pathname;

    return (

        <Navbar className="">
            <div className="w-[100%] flex items-center justify-between gap-3 border-b-2 border-gray-400">
                <Link className='bg-gray-700 text-white py-2 text-4xl uppercase font-bold text-center lg:w-[50%] whitespace-nowrap'>Tech Arena24</Link>
                <form className="hidden lg:inline lg:w-[50%]">
                    <TextInput
                        type="text"
                        placeholder="Search..."
                        rightIcon={AiOutlineSearch}
                        className=""
                    />
                </form>
                <div>
                    <Button className="self-end lg:hidden">
                        <AiOutlineSearch />
                    </Button>
                </div>
                <div>
                    <Button className="hidden sm:inline">
                        <FaMoon />
                    </Button>
                </div>
                <Navbar.Toggle />
            </div>

            {/* mobile menu that appears when toggle button is clicked */}
            <div>
                <Navbar.Collapse>
                    {menuLinks.map((menuLink) => (
                        <Navbar.Link className="flex flex-col md:hidden" active={path === menuLink.path} as={'div'}>
                            <Link to={menuLink.path} key={menuLink.id} className='py-1 px-7 font-semibold'>{menuLink.menu}</Link>
                        </Navbar.Link>
                    ))}
                </Navbar.Collapse>
            </div>

            {/* menu that shows in large screens */}
            <div className='hidden w-[100%] mx-auto lg:flex lg:justify-between py-2 border-b-2 border-gray-400'>
                {menuLinks.map((menuLink) => (
                    <Link to={menuLink.path} key={menuLink.id} className='py-1 px-7 font-semibold'>{menuLink.menu}</Link>
                ))}
            </div>
        </Navbar>
    )
}

export default Header
