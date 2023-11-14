import imgCandidate from '../assets/img-banner-miao.png';

const Banner = () => {
  return (
    <div className="banner px-4 py-32">
        <div className="container mx-auto">
            <div className='flex flex-col justify-center items-center'>
                <h2 className="mb-4 section-title lg:text-8xl">台灣的明天<br className="lg:hidden" />喵先鋪路</h2>
                <div className="flex flex-col md:flex-row justify-center items-center mb-4">
                    <h3 className="section-subtitle-main mr-0 mb-2 md:mr-4 md:mb-0">2024 立委參選人</h3>
                    <div className="flex items-center px-4 py-3 shadow-primary rounded-2xl">
                        <i className="shrink-0 w-10 h-10 mr-4 icon-standard bg-number"></i>
                        <h1 className="text-[28px] leading-[150%] lg:text-[40px] font-bold text-coral-700">喵立翰 Miao Li-Han</h1>
                    </div>
                </div>
                <img className='banner__img img-fit' src={imgCandidate} alt="candidate portrait" />
            </div>
        </div>
    </div>
  )
};

export default Banner;