
import React, { useState } from "react";
import seed from "../../utils/meetingSeed";
import MeetingCards from "../../components/MeetingCards";
import Dropdown from "../../components/Dropdown";
import "./Meetings.css";

// const date = new Date();

export default () => {
  // eslint-disable-next-line
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [meetings, setMeetings] = useState(seed);
  const [filteredMeetings, setFilteredMeetings] = useState(seed);

  const handleFilter =(arg)=>{
    // let [hour] = arg.split(":");
    // hour = +hour;
    console.log(arg)
      setFilteredMeetings(meetings.filter(a=>a.day === arg)/*.filter(b=>b.hour === date.getHours())*/);
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
