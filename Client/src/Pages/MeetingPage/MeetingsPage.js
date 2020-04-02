// when the meetings are via api SQL or Mongo

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
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item" onClick={()=>setPage(page-1)}>
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item" onClick={()=>setPage(1)}>
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={()=>setPage(2)} href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={()=>setPage(3)} href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={()=>setPage(page+1)} href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
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
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

