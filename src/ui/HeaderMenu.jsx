import styled from 'styled-components';
import Logout from '../features/authentication/Logout';

const StyledHeaderMenu = styled.ul`
    display: flex;
    gap: 0.4rem;
`;

export default function HeaderMenu() {
    return (
        <StyledHeaderMenu>
            <li>
                <Logout />
            </li>
        </StyledHeaderMenu>
    );
}
