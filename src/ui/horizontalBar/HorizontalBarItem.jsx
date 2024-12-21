import { NavLink, useLocation } from 'react-router-dom';

const HorizontalBarItem = ({ label, to }) => {
    const location = useLocation();

    return (
        <NavLink
            to={to}
            className={() =>
                `px-4 py-4 text-2xl font-light m-3 rounded-3xl ${
                    location.pathname.startsWith(to)
                        ? 'bg-[#1a4fa0] text-white'
                        : 'text-white hover:bg-[#1a4fa0]'
                }`
            }
        >
            {label}
        </NavLink>
    );
};

export default HorizontalBarItem;
