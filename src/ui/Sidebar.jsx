import styled from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';

const StyledSidebar = styled.aside`
    background-color: var(--color-grey-0);
    padding: 2.8rem 2.6rem;
    grid-row: 1/-1;
    border-right: 1px solid var(--color-grey-100);
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`;

export default function Sidebar() {
    return (
        <StyledSidebar>
            <Logo />
            <MainNav />
        </StyledSidebar>
    );
}
