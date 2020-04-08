import React, { useState, useEffect} from 'react';
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "./Pagination.css";

const Day = ({setFav, fav, handleFilter}) => {
  const [selected, setSelected] = useState("Daily");

  useEffect(() => {
    handleFilter(selected);
  }, [selected]);

  return (
    <Pagination id="daySelect" justifyContent="center" aria-label="Select Day of the Week">

      <PaginationItem>
        <PaginationLink onClick={() => setSelected("Monday")}>
          Mon
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink onClick={() => setSelected("Tuesday")}>
          Tue
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink onClick={() => setSelected("Wednesday")}>
          Wed
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink onClick={() => setSelected("Thursday")}>
          Thur
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink onClick={() => setSelected("Friday")}>
          Fri
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
       <PaginationLink onClick={() => setSelected("Saturday")}>
          Sat
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink onClick={() => setSelected("Sunday")}>
          Sun
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink onClick={() => setFav(!fav)}>
          {fav ? 'View All Upcoming' : 'View Favorites'}
        </PaginationLink>
      </PaginationItem>
      
    </Pagination>
  );
};

export default Day;
