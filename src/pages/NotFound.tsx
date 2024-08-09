import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex flex-column mb-3">
        <h1>404 NOT FOUND</h1>
        <p>The page does not exist.</p>

        <img
          src="https://media.tenor.com/yBXd1JUx66sAAAAC/obi-wan-star-wars.gif"
          alt="Obi-Wan at the Jedi Archives."
          className="img-fluid"
        />
      </div>

      <Button variant="light" onClick={() => navigate(-1)}>
        &laquo; Return
      </Button>
    </>
  );
};

export default NotFound;
