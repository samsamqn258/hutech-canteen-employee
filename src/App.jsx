import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import QRScanner from './pages/QRScanner';

import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/layout/AppLayout';
import { Toaster } from 'react-hot-toast';
import ProtectedRouter from './ui/ProtectedRouter';
import Notifications from './ui/Notifications';

import CategorySales from './pages/Admin/CategorySales';

import PendingOrders from './features/order/PendingOrders';
import SuccessOrders from './features/order/SuccessOrders';
import CompletedOrders from './features/order/CompletedOrders';
import CancelOrders from './features/order/CancelOrders';
import GroupOrder from './features/order/GroupOrder';
import './index.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <GlobalStyles />
            <BrowserRouter>
                <Notifications />
                <Routes>
                    <Route
                        element={
                            <ProtectedRouter>
                                <AppLayout />
                            </ProtectedRouter>
                        }
                    >
                        <Route
                            index
                            element={<Navigate replace to="/groupOrder/:orderId?" />}
                        />
                        <Route path="/groupOrder/:orderId?" element={<GroupOrder />} />
                        <Route path="/qrScanner" element={<QRScanner />} />
                        <Route
                            path="/pendingOrders"
                            element={<PendingOrders />}
                        />
                        <Route
                            path="/successOrders"
                            element={<SuccessOrders />}
                        />
                        <Route
                            path="/completedOrders"
                            element={<CompletedOrders />}
                        />
                        <Route
                            path="/cancelOrders"
                            element={<CancelOrders />}
                        />

                        <Route
                            path="/categorySales"
                            element={<CategorySales />}
                        />

                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
            <Toaster />
        </QueryClientProvider>
    );
}

export default App;
