
import React, { useState } from "react";
import seed from "../../utils/meetingSeed";
import MeetingCard from "../../components/MeetingCards";
import Dropdown from '../../components/Dropdown';

const date = new Date();
const hour = date.getHours();
const day = date.getUTCDay();
console.log(day, hour);

export default () => {
  const [page, setPage] = useState(1);
  const [meetings, setMeetings] = useState(seed);
  const [filteredMeetings, setFilteredMeetings] = useState(seed);

  const handleFilter =(arg)=>{
      setFilteredMeetings(meetings.filter(a=>a.day === arg))
  }

  return (
    <>
      <Dropdown handleFilter={handleFilter}/>
      {filteredMeetings
        .sort((a, b) =>
          a.time.split(":")[0] < b.time.split(":")[0]
            ? 1
            : a.time.split(":")[0] > b.time.split(":")[0]
            ? -1
            : 0
        )
        .map(item => (
          <MeetingCard key={item.code} meeting={item} />
        ))}
    </>
  );
};
