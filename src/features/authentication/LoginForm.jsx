import { useState } from 'react';

import FormRowVertical from '../../ui/form/FormRowVertical';
import Form from '../../ui/form/Form';
import Input from '../../ui/Input';
import SpinnerMini from '../../ui/SpinnerMini';
import Button from '../../ui/Button';
import AllShopIdList from '../../ui/list/AllShopIdList';
import useLoginEmployee from './useLoginEmployee';
import useShops from './useShops';

export default function LoginForm() {
    const [email, setEmail] = useState('nv2@gmail.com');
    const [password, setPassword] = useState('123456');
    const [shopId, setShopId] = useState('');
    const { isLoginEmployee, loginEmployee } = useLoginEmployee();

    const { shops, isLoading } = useShops();

    if (isLoading) {
        return <SpinnerMini />;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!email || !password) {
            return;
        }

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
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormRowVertical label="Tài khoản">
                <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoginEmployee}
                />
            </FormRowVertical>
            <FormRowVertical label="Mật khẩu">
                <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoginEmployee}
                />
            </FormRowVertical>
            <div className="mb-8">
                <AllShopIdList data={shops} onChange={setShopId} />
            </div>
            <FormRowVertical>
                <Button>
                    {isLoginEmployee ? <SpinnerMini /> : 'Đăng nhập'}
                </Button>
            </FormRowVertical>
        </Form>
    );
}
