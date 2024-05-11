
import profile from '../../../images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between p-4  border-b-2 max-w-8xl mx-auto'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;