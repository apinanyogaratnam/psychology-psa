import './App.css';
import './index.css';
import data from './data.json';
import image1 from './images/homeless1.jpg';
import image2 from './images/homeless2.jpg';
import image3 from './images/homeless3.jpg';
import { Text } from './text';

function App() {


  return (
    <div className="main">

      <div className="main-container">
        <h1>Homeless are Alcohol/Drug Dependent: Myth or Reality</h1>
      </div>

      <div className="main-container-content">

        <Text index="1" />

        <a href="https://www.pexels.com/photo/man-in-green-jacket-lying-on-floor-8078366/" target="_blank" rel="noopener noreferrer">
          <img className="image image1-container" src={image1} alt=""/>
        </a>
        <p>click to view origin of image</p>

        <Text index="2" />
        <Text index="3" />
        <Text index="4" />
        <Text index="5" />

        <div className="images-container">
          <a href="https://www.pexels.com/photo/man-in-gray-sweater-sitting-on-ground-holding-a-sign-4809608/" target="_blank" rel="noopener noreferrer">
            <img className="image image1-container" src={image2} alt=""/>
          </a>
          <p>click to view origin of image</p>
          <a href="https://www.pexels.com/photo/city-landscape-man-person-8078473/" target="_blank" rel="noopener noreferrer">
            <img className="image image1-container" src={image3} alt=""/>
          </a>
          <p>click to view origin of image</p>
        </div>

        <Text index="6" />
        <Text index="7" />
        <Text index="8" />
        <Text index="9" />

      </div>

      <div className="resources-container">
        <h1>Resources</h1>
        {
          data["resources"].map((resource, index) => {
            return (
              <div className="spacing" key={index}>
                {resource}
              </div>
            );
          })
        }
      </div>

    </div>
  );
}

export default App;
