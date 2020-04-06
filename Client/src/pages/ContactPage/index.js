import React from "react";
// import Example from "../../components/Navbar";
import {Container} from 'reactstrap';
import {Jumbotron} from 'reactstrap';
import ContactCard from "../../components/ContactCard";
import './style.css';
import "./Contact.css";

// import "./OtherGroups.css"
const ContactGroups = () => {
  const contacts = [{ "name": "  Greg Plumblee", "title": "Front-End Developer", "url": "https://github.com/gplumblee", "email": "gplumblee@hotmail.com"  },
  { "name": "Jose Antonio Morales", "title": "Front-End Developer", "url": "https://github.com/VisualDesign3r", "email": "visualdesign3r@gmail.com" },
  { "name": "Shya Sadeghi-Tabrizi ", "title": "Back-End Developer", "url": "https://github.com/ShyaSad", "email": "shyasadeghi@gmail.com"},
  { "name": "Kevin Reyes", "title": "Front-End Developer", "url": "https://github.com/kevin-reyes", "email": "kev.andrew.reyes@gmail.com"},]
  const contactResourceCards = contacts.map(contact => <ContactCard name= {contact.name} title={contact.title} url={contact.url} email={contact.email}/>)  ;
  return (
    <React.Fragment>

      <Container className="contact-container"> 
      <h1 className="text-center" >Contact</h1>
        {contactResourceCards}

          {/* <div className="position">
           
          </div> */}
          
       
      </Container>
    </React.Fragment>
  )
}
export default ContactGroups;

