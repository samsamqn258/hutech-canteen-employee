import { useState } from 'react';

import FormRowVertical from '../../ui/form/FormRowVertical';
import Form from '../../ui/form/Form';
import Input from '../../ui/Input';
import SpinnerMini from '../../ui/SpinnerMini';

import Button from '../../ui/Button';
import AllShopIdList from '../../ui/list/AllShopIdList';
import useLoginEmployee from './useLoginEmployee';
import useShops from './useShops';
import useLoginManager from './useLoginManager';

export default function LoginForm() {
    const [email, setEmail] = useState('nv2@gmail.com');
    const [password, setPassword] = useState('123456');
    const [shopId, setShopId] = useState('');
    const [accountType, setAccountType] = useState('employee');
    const { isLoginEmployee, loginEmployee } = useLoginEmployee();
    const { isLoginManager, loginManager } = useLoginManager();

    const { shops, isLoading } = useShops();

    const isWorking = isLoginEmployee || isLoginManager;

    if (isLoading) {
        return <SpinnerMini />;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!email || !password) {
            return;
        }

        if (accountType === 'employee') {
            loginEmployee(
                { email, password, shop_id: shopId },
                {
                    onSettled: () => {
                        setEmail('');
                        setPassword('');
                        setShopId('');
                    },
                }
            );
        } else if (accountType === 'manager') {
            loginManager(
                { email, password, shop_id: shopId },
                {
                    onSettled: () => {
                        setEmail('');
                        setPassword('');
                        setShopId('');
                    },
                }
            );
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormRowVertical label="Loại tài khoản">
                <div className="flex items-center gap-4 justify-between">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="accountType"
                            value="employee"
                            checked={accountType === 'employee'}
                            onChange={() => setAccountType('employee')}
                            disabled={isWorking}
                        />
                        Nhân viên
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="accountType"
                            value="manager"
                            checked={accountType === 'manager'}
                            onChange={() => setAccountType('manager')}
                            disabled={isWorking}
                        />
                        Quản lý
                    </label>
                </div>
            </FormRowVertical>
            <FormRowVertical label="Tài khoản">
                <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isWorking}
                />
            </FormRowVertical>
            <FormRowVertical label="Mật khẩu">
                <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isWorking}
                />
            </FormRowVertical>
            <div className="mb-8">
                <AllShopIdList data={shops} onChange={setShopId} />
            </div>
            <FormRowVertical>
                <Button>{isWorking ? <SpinnerMini /> : 'Đăng nhập'}</Button>
            </FormRowVertical>
        </Form>
    );
}
