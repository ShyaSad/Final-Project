import React, { useState, useEffect } from "react";
import seed from "../../utils/dailyReflectionSeed";
import ReflectionCard from "../../components/ReflectionCard/ReflectionCard";
import Date from "../../components/Dates/Dates";
import moment from 'moment';

// const date = new Date();
// const month = date.getMonth();
// const day = date.getUTCDay();

const Reflections = () => {
  const month = moment().format('MMMM');
  const day = moment().format('Do');
  const d = moment().format('D')
  const [reflections, setReflections] = useState(seed);
  const [filteredReflections, setFilteredReflections] = useState([]);

  useEffect(()=>{

    setFilteredReflections(reflections.filter(a=> a.date === `${month} ${d}`))
  })


  return (
    <>
        <Date mo={month} day={day}/>
        {filteredReflections.map(data=><ReflectionCard data={data}/>)}
        
    </>
  );
};

export default Reflections;
