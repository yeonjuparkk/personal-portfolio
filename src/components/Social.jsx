import { linkedin, instagram } from "../assets";
import "./Social.css";

const Social = () => {

  return (
    <div className="portfolio__social section__padding">
      <div>
        <a href="https://www.linkedin.com/in/yeonju-park-276753137" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/yeonju_park_photography/" target="_blank" rel="noreferrer">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
    </div>
  );
}

export default Social;
