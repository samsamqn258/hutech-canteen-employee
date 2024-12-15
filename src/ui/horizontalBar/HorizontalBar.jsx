import HorizotalBarItem from './HorizontalBarItem';
import { MENU_ITEMS } from '../../utils/constants';

const HorizotalBar = () => {
    const authData = JSON.parse(localStorage.getItem('authData'));
    const role = authData.user.roles;
    const items = MENU_ITEMS[role];

    return (
        <div className="flex flex-row ">
            {items.map((item) => (
                <HorizotalBarItem
                    key={item.to}
                    label={item.label}
                    to={item.to}
                />
            ))}
        </div>
    );
};

export default HorizotalBar;
