import './index.scss';
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/Lam_Resume.pdf"

const Resume = () => {
    return(
        <div fluid className="resume-section">
            <div>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    {/* <button href={pdf} target="_blank">
                        Download CV
                    </button> */}
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        Download CV
                    </Button>
                </Row>
            </div>
        </div>
    )
}

export default Resume