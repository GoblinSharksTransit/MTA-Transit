import React from 'react';
import SubwayLineComponent from '../component/SubwayLineComponent';

const App = () => {
  const SubwayContainer = (props) => {
    // return <div className="SubwayContainer"></div>;

    const subwayLines = []
    for (let i = 0; i < props.trainLine.length; i++){
      subwayLines.push(<SubwayLineComponent bgColor = {props.bgColor[i]} trainLine = {props.trainLine[i]} />);
    }

    return (
      <div className='SubwayContainer'>
        Subway Lines{' '}
        {/* <SubwayLineComponent
          bgColor={props.bgColor}
          trainLine={props.trainLine}
        /> */}
        {subwayLines}
      </div>
    );
  };

  const trainLine = 'G';
  let bgColor = '';
  switch (trainLine) {
    case 1:
      bgColor = 'red';
      break;
    case 2:
      bgColor = 'red';
      break;
    case 3:
      bgColor = 'red';
      break;
    case 4:
      bgColor = 'green';
      break;
    case 5:
      bgColor = 'green';
      break;
    case 6:
      bgColor = 'green';
      break;
    case 'N':
      bgColor = 'yellow';
      break;
    case 'Q':
      bgColor = 'yellow';
      break;
    case 'R':
      bgColor = 'yellow';
      break;
    case 'W':
      bgColor = 'yellow';
      break;
    case 'B':
      bgColor = 'orange';
      break;
    case 'D':
      bgColor = 'orange';
      break;
    case 'F':
      bgColor = 'orange';
      break;
    case 'M':
      bgColor = 'orange';
      break;
    case 'A':
      bgColor = 'blue';
      break;
    case 'C':
      bgColor = 'blue';
      break;
    case 'E':
      bgColor = 'blue';
      break;
    case 'G':
      bgColor = 'lightgreen';
      break;
    case 'L':
      bgColor = 'gray';
      break;
    case 'J':
      bgColor = 'brown';
      break;
    case 'Z':
      bgColor = 'brown';
      break;
    case 7:
      bgColor = 'purple';
      break;
  }

  const lines = [1, 4, 7, 'A', 'B', 'G', 'L', 'J', 'N'];
  const colors = ['red', 'green', 'purple', 'blue', 'orange', 'lightgreen', 'gray', 'brown', 'yellow']

  console.log(bgColor);

  return (
    <div>
      <h1>Subway Alerts</h1>
      <SubwayContainer bgColor={colors} trainLine={lines} />
      <div></div>
    </div>
  );
};

export default App;
