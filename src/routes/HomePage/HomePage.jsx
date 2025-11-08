import "./homePage.scss";
import Img from "../../assets/heroimg.png";
import Searchbar from "../../components/SearchBar/Searchbar";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate and Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            non maxime, rerum, corporis molestiae laudantium voluptatibus
            maiores alias soluta deleniti molestias assumenda ipsa perferendis
            deserunt in, odio aliquam at placeat?
          </p>
          <Searchbar />
          <div className="mainbox">
            <div className="box">
              <h2>19+</h2>
              <h3>Years of Experience</h3>
            </div>
            <div className="box">
              <h2>200</h2>
              <h3>Awards Gained</h3>
            </div>
            <div className="box">
              <h2>1200+</h2>
              <h3>Properties Ready</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="imgContainer">
        <img src={Img} alt="hero" />
      </div>
    </div>
  );
};

export default HomePage;
