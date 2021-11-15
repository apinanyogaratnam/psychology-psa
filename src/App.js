import './App.css';
import './index.css';
import data from './data.json';
import image1 from './images/homeless1.jpg';
import image2 from './images/homeless2.jpg';
import image3 from './images/homeless3.jpg';

function App() {


  return (
    <div className="main">

      <div className="main-container">
        <h1>Are homeless people really drugs addicts and alcoholics?</h1>
      </div>

      <div className="main-container-content">

        <div className="text-content1">
          <p>
            <b>{data["1"]}</b>
          </p>
        </div>

        <a href="https://www.pexels.com/photo/man-in-green-jacket-lying-on-floor-8078366/" target="_blank" rel="noopener noreferrer">
          <img className="image image1-container" src={image1} alt=""/>
        </a>

        <div className="text-content1">
          <p>
            <b>{data["2"]}</b>
          </p>
        </div>

        <div className="images-container">
          <a href="https://www.pexels.com/photo/man-in-gray-sweater-sitting-on-ground-holding-a-sign-4809608/" target="_blank" rel="noopener noreferrer">
            <img className="image image1-container" src={image2} alt=""/>
          </a>
          <a href="https://www.pexels.com/photo/city-landscape-man-person-8078473/" target="_blank" rel="noopener noreferrer">
            <img className="image image1-container" src={image3} alt=""/>
          </a>
        </div>

        <div className="text-content1">
          <p>
            <b>{data["3"]}</b>
          </p>
        </div>

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
