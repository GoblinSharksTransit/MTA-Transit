import React from 'react';

const App = () => {
  const SubwayContainer = (props) => {
    // return <div className="SubwayContainer"></div>;
    return <div className='SubwayContainer'>Subway Lines</div>;
  };
  return (
    <div>
      <h1>Subway Alerts</h1>
      <SubwayContainer />
    </div>
  );
};

export default App;
