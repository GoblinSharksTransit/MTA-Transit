import React from 'react';
import SubwayLineComponent from '../component/SubwayLineComponent';

const App = () => {
  const SubwayContainer = (props) => {
    // return <div className="SubwayContainer"></div>;
    return <div className='SubwayContainer'>Subway Lines <SubwayLineComponent/> </div>;
  };
  return (
    <div>
      <h1>Subway Alerts</h1>
      <SubwayContainer />
      <div>
      </div>
    </div>
  );
};

export default App;
