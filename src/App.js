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
            {data["1"]}
          </p>
        </div>

        <img className="image image1-container" src={image1} alt=""/>

        <div className="text-content1">
          <p>
            {data["2"]}
          </p>
        </div>

        <div className="images-container">
          <img className="image image1-container" src={image2} alt=""/>
          <img className="image image1-container" src={image3} alt=""/>
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
