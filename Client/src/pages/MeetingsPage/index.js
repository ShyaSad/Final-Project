
import React, { useState } from "react";
import seed from "../../utils/modified.json";
// import rando from '../../utils/modifiedRandom.json'
import MeetingCards from "../../components/MeetingCards";
import Dropdown from "../../components/Dropdown";
import "./Meetings.css";

const date = new Date();

export default () => {
  // eslint-disable-next-line
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [meetings, setMeetings] = useState(seed);
  const [filteredMeetings, setFilteredMeetings] = useState(seed);

  const handleFilter =(arg)=>{
    console.log(date.getHours())
    const filtered = meetings.filter(a=>a.day === arg).filter(b=> Number(b.military) >= date.getHours()).sort((a,b)=> a.military < b.military ? -1 : a.military > b.military ? 1 : 0)
      setFilteredMeetings(filtered);
  }

  return (
    <>
      <Dropdown handleFilter={handleFilter}/>
      {filteredMeetings.map((item,i) => (
          <MeetingCards key={i} meeting={item} />
        ))}
        
    </>
  );
};
