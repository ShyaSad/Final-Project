import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from 'reactstrap';
import seed from "../../utils/dailyReflectionSeed";
import ReflectionCard from "../../components/ReflectionCard";
import Date from "../../components/Date";
import moment from "moment";
import "./Inspiration.css";
import bg from '../../assets/daily-reflections.jpg'

const Reflections = () => {
  const month = moment().format("MMMM");
  const day = moment().format("Do");
  const d = moment().format("D");
  // eslint-disable-next-line
  const [reflections, setReflections] = useState(seed);
  const [filteredReflections, setFilteredReflections] = useState([]);

  useEffect(() => {
    setFilteredReflections(
      reflections.filter((a) => a.date === `${month} ${d}`)
    );
  },[reflections]);

  useEffect(()=>{
    document.body.style.backgroundImage = `url(${bg})`

  },[])

  return (
    <Fragment >
      <Container id='insp'>
          <Row>
            <Col xs="2" id="dateBlock">
              <Date mo={month} day={day}/>
            </Col>
            <Col xs="8">
              {filteredReflections.map((data) => (
                <ReflectionCard data={data} key={data.date}/>
              ))}
            </Col>
            <Col xs="2"></Col>
          </Row>
      </Container>
    </Fragment>
  );
};

export default Reflections;
