import React from 'react';
import SubwayLineComponent from '../component/SubwayLineComponent';
import { useState, useEffect } from 'react';

const App = () => {
  const SubwayContainer = (props) => {
    // return <div className="SubwayContainer"></div>;

    const subwayLines = [];
  
    for (let i = 0; i < props.trainStatus.length; i++){
      subwayLines.push(
        <SubwayLineComponent
        bgColor={props.bgColor}
        trainLine={props.trainLine}
        trainStatus={props.trainStatus[i]}
        start={props.start[i]}
        end={props.end[i]}
        />
      )
    }
    
    // for (let i = 0; i < props.trainLine.length; i++) {
    //   subwayLines.push(
    //     <SubwayLineComponent
    //       bgColor={props.bgColor[i]}
    //       trainLine={props.trainLine[i]}
    //     />
    //   );
    // }

    return (
      <div className='SubwayContainer'>
        Subway Lines{' '}
        {/* <SubwayLineComponent
          bgColor={props.bgColor}
          trainLine={props.trainLine}
        /> */}
        {/* <SubwayLineComponent bgColor={props.bgColor} trainLine={props.trainLine} trainStatus={props.trainStatus}/> */}
        {subwayLines}
      </div>
    );
  };

  const [trainLine, setTrainLine] = useState('')
  const [trainStatus, setTrainStatus] = useState([])
  const [start, setStart] = useState([])
  const [end, setEnd] = useState([])




  // useEffect (()=> {
  //   const result = fetch('/subway', { method: 'GET' })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((response) => {
  //     return response;
  //   })
  //   .catch((err) => {
  //     console.log('error');
  //   });
  // }, [])

useEffect (() => {
  fetchData();
}, [])

const fetchData = async () => {
  try {
    const response = await fetch('/subway')
    const result = await response.json()
    console.log('abcd', result[1].message)
    setTrainLine(result[0])
    const trainStatuses = []
    const trainStart = []
    const trainEnd = []
    for (let i = 1; i < result.length; i++){
      trainStatuses.push(result[i].message)
      trainStart.push(result[i].start)
      trainEnd.push(result[i].end)

    }
    setTrainStatus(trainStatuses)
    setStart(trainStart)
    setEnd(trainEnd)


  } catch (error) {
    console.log("error")
  }
}


// console.log(object)
// console.log('abc', Object.keys(object))
// let trainStatus = trainInfo[1].message

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

  console.log('bgColor : ', bgColor)


  // const lines = result[0];
  // const colors = [
  //   'red',
  //   'green',
  //   'purple',
  //   'blue',
  //   'orange',
  //   'lightgreen',
  //   'gray',
  //   'brown',
  //   'yellow',
  // ];

  console.log(bgColor);

  return (
    <div>
      <h1>Subway Alerts</h1>
      <SubwayContainer bgColor={bgColor} trainLine={trainLine} trainStatus={trainStatus} start={start} end={end}/>
      <div></div>
    </div>
  );
};

export default App;
