import React, { useState, useEffect } from "react";
import seed from "../../utils/dailyReflectionSeed";
import ReflectionCard from "../../components/ReflectionCard";
import Date from "../../components/Date";
import moment from 'moment';
import './style.css';

// const date = new Date();
// const month = date.getMonth();
// const day = date.getUTCDay();

const Reflections = () => {
  const month = moment().format('MMMM');
  const day = moment().format('Do');
  const d = moment().format('D');
  const [reflections, setReflections] = useState(seed);
  const [filteredReflections, setFilteredReflections] = useState([]);

  useEffect(()=>{

    setFilteredReflections(reflections.filter(a=> a.date === `${month} ${d}`))
  })


  return (
    <div className='row'>
        <div id='dateBlock' className='col-2'>
          <Date mo={month} day={day}/>
        </div>
        <div className='col-10'>
          {filteredReflections.map(data=><ReflectionCard data={data}/>)}
        </div>
    </div>
  );
};

export default Reflections;
