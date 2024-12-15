import { NavLink } from 'react-router-dom';

const HorizotalBarItem = ({ label, to }) => {
    return (
        <NavLink
            to={to}
            end
            className={({ isActive }) =>
                `px-4 py-4 text-2xl font-light m-3 rounded-3xl ${
                    isActive
                        ? 'bg-[#1a4fa0] text-white'
                        : 'text-white hover:bg-[#1a4fa0]'
                }`
            }
        >
            {label}
        </NavLink>
    );
};

export default HorizotalBarItem;
