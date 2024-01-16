import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link, NavLink} from 'react-router-dom'
import './index.scss';

function ProjectCards(props){
    return(
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body className="card-text-zone">
                <Card.Title className="card-title">{props.title}</Card.Title>
                <Card.Text className="card-tags" 
                    style={{ textAlign: "center", 
                            fontStyle:"italic", 
                            color:"lightgray", 
                            fontSize:"12px", 
                            border:"1px solid white", 
                            borderRadius:"10px",
                            padding:"5px",
                            wordSpacing:"2px"
                        }}>
                    {props.tags}
                </Card.Text>
                <Card.Text className="card-text" style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                <Link to={props.projectLink} style={{textDecoration:"none"}}>
                    <Button variant="primary" href={props.projectLink} target="_self">
                    {"View Project"}
                </Button>
                </Link>
                
            </Card.Body>
        </Card>
    )
}

export default ProjectCards