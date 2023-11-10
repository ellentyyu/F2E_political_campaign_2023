import logo from '../assets/icon-logo.svg';

const Header = () => {
    return (
        // bg-coral-50
        <header className="p-5 bg-purple-300">
            <div className="container mx-auto">
                <nav className="flex h-5 bg-white rounded-full">
                    <a className="flex" href="#">
                        <img className="w-[52px] h-[43px] icon-standard" src={logo} alt="campaign logo" />
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
