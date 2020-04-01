import React from 'react';

export default ({meeting})=>{
    return <article className="card-transparent">
    <div className="card-body">
      <h5 className="card-title">{meeting.name}</h5>
      <h6 className="card-subtitle mb-2">
        {meeting.day} at {meeting.time}
      </h6>
      <p className="card-text">
        {meeting.notes}
      </p>
      <button href={meeting.link} className="card-link">
        Zoom Link
      </button>
    </div>
  </article>
}