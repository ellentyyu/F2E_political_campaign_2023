import SectionTitle from './utils/SectionTitle';
import imgMain from '../assets/img-main-view.png';

const MainView = () => {
    return (
        <div className="px-6 py-16 bg-coral-400">
            <div className="container mx-auto">
                <div className="lg:flex">
                    <div className="lg:w-1/2 px-6 py-10 lg:pr-16 bg-white rounded-t-3xl lg:rounded-tr-none lg:rounded-bl-3xl">
                        <SectionTitle title="候選人主張" subtitle="ADVOCATE" />
                        <h4 className="my-8 text-2xl font-bold">
                            我堅信 ! 藉由推動更完善的
                            <span className="inline-block text-coral-700">
                                貓咪福利
                            </span>
                            和相關政策，更是間接地投資於
                            <span className="inline-block text-coral-700">
                                台灣的未來
                            </span>
                            。
                        </h4>
                        <p className='leading-6'>
                            畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。 因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
                        </p>
                    </div>
                    <img className='w-full lg:w-1/2 h-[240px] md:h-[480px] lg:h-auto img-fit rounded-b-3xl lg:rounded-bl-none lg:rounded-tr-3xl' src={imgMain} alt="main view point image" />
                </div>
            </div>
        </div>
    );
};

export default MainView;
