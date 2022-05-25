import "./styles.css";
import moment from "moment";


function Topic({ topic, handleVoting, handleDelete }) {

  console.log('Topic rendered');
  return (
    <div className="topic-container">
      <div className="topic-trash-can">
        <i
          onClick={() => handleDelete(topic._id)}
          className="fa-solid fa-trash-can"
        ></i>
      </div>
      <div className="topic-info">
        <div className="topic-score">
          <div
            className="top-arrow"
            onClick={() => handleVoting(topic._id, "up")}
          ></div>
          <div className="score-number">{topic.score}</div>
          <div
            className="down-arrow"
            onClick={() => handleVoting(topic._id, "down")}
          ></div>
        </div>
        <div className="topic-details">
          <h2>{topic.topic}</h2>
          <div className="topic-date">
            <span>CREATED ON</span>{" "}
            {moment(topic.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topic;
