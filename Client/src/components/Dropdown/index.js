import React, { useState, useEffect} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./Dropdown.css";

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected , setSelected] = useState('Daily');

  useEffect(()=>{
    props.handleFilter(selected)
  }, [selected])


  return (
    <Dropdown id="dropdown" isOpen={dropdownOpen} toggle={()=>setDropdownOpen(!dropdownOpen)}>
      <DropdownToggle id="daySelect" caret>
        {selected}
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Select Day</DropdownItem>
        <DropdownItem onClick={()=>setSelected('Monday')}>Monday</DropdownItem>
        <DropdownItem onClick={()=>setSelected('Tuesday')}>Tuesday</DropdownItem>
        <DropdownItem onClick={()=>setSelected('Wednesday')}>Wednesday</DropdownItem>
        <DropdownItem onClick={()=>setSelected('Thursday')}>Thursday</DropdownItem> 
        <DropdownItem onClick={()=>setSelected('Friday')}>Friday</DropdownItem> 
        <DropdownItem onClick={()=>setSelected('Saturday')}>Saturday</DropdownItem> 
        <DropdownItem onClick={()=>setSelected('Sunday')}>Sunday</DropdownItem> 
        <DropdownItem divider />
        <DropdownItem onClick={()=>setSelected('Daily')}>Daily</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Example;
