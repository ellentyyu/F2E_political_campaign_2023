import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Banner />
            <Carousel />
        </>
    );
}

export default App;
