import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";

export default function Login() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen shadow-2xl gap-11 bg-gray-50">
            <Logo />
            <Heading as="h1">Đăng nhập tài khoản</Heading>
            <LoginForm />
        </main>
    );
}
