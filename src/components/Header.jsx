const Header = () => {
    return (
        <header className="w-full h-[72px] md:h-[100px] bg-coral-50">
            <div className='fixed top-0 left-0 right-0 md:top-4 md:left-6 md:right-6 z-50'>
                <div className="container mx-auto">
                    <nav className="flex justify-between items-center px-6 py-3 bg-white md:rounded-2xl">
                        <a className="flex items-center" href="#">
                            <i className="w-[34px] h-[28px] md:w-[52px] md:h-[43px] mr-2 icon-standard bg-logo"></i>
                            <h1 className="text-xl md:text-2xl font-bold text-coral-700">
                                喵立翰 Miao Li-Han
                            </h1>
                        </a>
                        <ul className='hidden lg:flex items-center lg:gap-1 xl:gap-4'>
                            <li>
                                <a className='p-2 text-lg text-slate-700' href="#">候選人主張</a>
                            </li>
                            <li>
                                <a className='p-2 text-lg text-slate-700' href="#">最新活動</a>
                            </li>
                            <li>
                                <a className='p-2 text-lg text-slate-700' href="#">政策議題</a>
                            </li>
                            <li>
                                <a className='p-2 text-lg text-slate-700' href="#">小額捐款</a>
                            </li>
                            <li>
                                <a className='p-2 text-lg text-slate-700' href="#">民眾服務信箱</a>
                            </li>
                        </ul>
                        <div className='hidden md:flex item-center gap-4'>
                            <a href="#">
                                <i className="w-8 h-8 icon-standard fb"></i>
                            </a>
                            <a href="#">
                                <i className="w-8 h-8 icon-standard ig"></i>
                            </a>
                            <a href="#">
                                <i className="w-8 h-8 icon-standard yt"></i>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
