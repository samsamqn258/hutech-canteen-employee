import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../header/Header';
import HorizotalBar from '../horizontalBar/HorizontalBar';
import Logo from '../Logo';

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
`;

export default function AppLayout() {
    return (
        <StyledAppLayout>
            {/* <Sidebar /> */}
            <div className=" bg-[#003b95] flex flex-row items-center justify-between px-20 py-8">
                <div className="flex flex-row items-center gap-14">
                    <Logo />
                    <HorizotalBar />
                </div>

                <Header />
            </div>
            <main className="w-full h-full bg-gray-50">
                <div className="w-4/5 mx-auto">
                    <Outlet />
                </div>
            </main>
        </StyledAppLayout>
    );
}
