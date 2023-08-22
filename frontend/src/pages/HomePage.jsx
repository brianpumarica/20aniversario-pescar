import CategoryList from '../components/CategoryList';
import LogoutButton from '../components/log/LogoutButton';
import LoginButton from '../components/log/LoginButton';
import DashboardButton from '../components/dashboard/DashboardButton';
import RegisterButton from '../components/register/RegisterButton';

export const HomePage = () => {
    return (
        <div className='container'>
            <CategoryList />
            <LoginButton></LoginButton>
            <DashboardButton></DashboardButton>
            <RegisterButton></RegisterButton>
            <LogoutButton></LogoutButton>
        </div>
    );
}
