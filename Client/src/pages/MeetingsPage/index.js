
import React, { useState } from "react";
import seed from "../../utils/meetingSeed.json";
// import rando from '../../utils/modifiedRandom.json'
import MeetingCards from "../../components/MeetingCards";
import Pagination from "../../components/Pagination";
import "./Meetings.css";

const date = new Date();

export default () => {
  // eslint-disable-next-line
  const [fav, setFav] = useState(0);
  // eslint-disable-next-line
  const [meetings, setMeetings] = useState(seed);
  const [filteredMeetings, setFilteredMeetings] = useState(seed);
  const [favMeetings, setFavMeetings] = useState([]);


  const handleSaveFav =(title)=>{
    const favMeeting = meetings.filter(a=> a.name === title);
    const newFav = favMeetings;
    newFav.push(...favMeeting)
    setFavMeetings(newFav)
  }

  const handleFilter =(arg)=>{
    console.log(date.getHours())
    const filtered = meetings.filter(a=>a.day === arg || a.day === 'Daily').filter(b=> Number(b.military) >= date.getHours()).sort((a,b)=> a.military < b.military ? -1 : a.military > b.military ? 1 : 0)
      setFilteredMeetings(filtered);
  }

  return (
    <>
      <Pagination handleFilter={handleFilter} fav={fav} setFav={setFav}/>
      <div className='meetingsDiv'>
            {fav ? 
            favMeetings.map((item,i) => (
              <MeetingCards key={i} meeting={item}/>
            ))
            :filteredMeetings.map((item,i) => (
          <MeetingCards key={i} meeting={item} saveFav={handleSaveFav} />
        ))}
      </div>
  
        
    </>
  );
};
