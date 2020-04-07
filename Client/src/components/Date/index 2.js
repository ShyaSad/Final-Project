import React from 'react';
import { Jumbotron } from 'reactstrap';
import moment from 'moment';
import './Date.css';


const Calendar = (props) => {
  const month = moment().format('MMMM');
  // eslint-disable-next-line
  const day = moment().format('Do');
  const d = moment().format('D');

  return (
    <div>
      <Jumbotron>
        <h1 id='calNumber'>{d}</h1>
        <h6 id='calMonth'>{month}</h6>
      </Jumbotron>
    </div>
  );
};

export default Calendar;
