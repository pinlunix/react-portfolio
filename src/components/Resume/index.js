import './index.scss';
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/Lam_Resume.pdf"

const Resume = () => {
    return(
        <div className="resume-section">
            <div>
                <h1 style={{textAlign:"center"}}>
                    Resume
                </h1>
                <Row className="center" style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        Download CV
                    </Button>
                </Row>
                <div className="center">
                    <object data={pdf} type="application/pdf" width="100%" height="100%">
                        <p>Victoria Lam's Resume <a href={pdf}></a></p>
                    </object>
                </div>
                
            </div>
        </div>
    )
}

export default Resume