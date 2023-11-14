const Banner = () => {
  return (
    <div className="px-4 py-32">
        <div className="container">
            <h2 className="section-title lg:text-8xl">台灣的明天<br className="lg:hidden" />喵先鋪路</h2>
            <div className="md:flex justify-center">
                <h3 className="section-subtitle">2024 立委參選人</h3>
                <div className="flex">
                    <i className="w-10 h-10 icon-standard bg-number"></i>
                    <h1 className="text-[28px] leading-[42px] font-bold text-coral-700">喵立翰 Miao Li-Han</h1>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Banner;