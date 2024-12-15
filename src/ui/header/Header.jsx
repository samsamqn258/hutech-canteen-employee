import styled from 'styled-components';
import HeaderMenu from '../HeaderMenu';
import UserAvatar from '../../features/authentication/UserAvatar';

const StyledHeader = styled.header`
    padding: 1.2rem 4.8rem;
    display: flex;
    align-items: center;
    gap: 1.4rem;
    justify-content: flex-end;
`;

export default function Header() {
    return (
        <StyledHeader>
            <UserAvatar />
            <HeaderMenu />
        </StyledHeader>
    );
}
