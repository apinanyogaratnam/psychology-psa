import data from './data.json';
import './index.css';

export const Text = ({index}) => {
    return (
        <div className="text-content1">
          <p>
            <b>{data[index]}</b>
          </p>
        </div>
    );
}