import React, { useEffect, useState } from "react";
import axios from "axios";

const SingleDeptHeadCard = ({ match }) => {
  const [head, setHead] = useState(null);

  useEffect(() => {
    const fetchHead = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/getHead/${match.params.id}`
        );
        setHead(response.data);
      } catch (error) {
        console.error("Error fetching department head:", error);
      }
    };

    fetchHead();
  }, [match.params.id]);

  if (!head) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="card"
      style={{
        width: "300px",
        height: "350px",
        textAlign: "center",
        overflowY: "scroll",
        margin: "10px",
      }}
    >
      <img
        className="card-img-top"
        src={`http://localhost:3001/images/${head.image}`}
        alt={`Department ${head._id}`}
        style={{ maxWidth: "150px", maxHeight: "150px", margin: "0 auto" }}
      />
      <div className="card-body">
        <h4 className="card-title m-2">{head.name}</h4>
        <h5 className="card-title m-2">{head.department}</h5>
        <p className="card-text">Employee Number: {head.number}</p>
        <p className="card-text">Employee Age: {head.age}</p>
        <p className="card-text">{head.description}</p>
      </div>
    </div>
  );
};

export default SingleDeptHeadCard;
