import "../styles/Hero.css";
import HeroImage from "../assets/clothes.jpg";

function Hero() {
    return (
        <div className="Hero">
            <div className="Hero-left">
                <h1>Elevate Your Style</h1>
                <p>Discover trendy fashion at great prices.</p>
                <button>Shop Now</button>
            </div>
            <div className="Hero-right">
                <img src={HeroImage} alt="Featured product" />
            </div>
        </div>
    );
}

export default Hero;
