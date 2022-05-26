import styles from "./styles.module.css";
import moment from "moment";

function Topic({ topic, handleVoting, handleDelete }) {
  return (
    <div className={styles.topic_container}>
      <div className={styles.topic_trash_can}>
        <i
          onClick={() => handleDelete(topic._id)}
          className="fa-solid fa-trash-can"
        ></i>
      </div>
      <div className={styles.topic_info}>
        <div className={styles.topic_score}>
          <div
            className={styles.top_arrow}
            onClick={() => handleVoting(topic._id, "up")}
          ></div>
          <div className={styles.score_number}>{topic.score}</div>
          <div
            className={styles.down_arrow}
            onClick={() => handleVoting(topic._id, "down")}
          ></div>
        </div>
        <div className={styles.topic_details}>
          <h2>{topic.topic}</h2>
          <div className={styles.topic_date}>
            <span>CREATED ON</span>{" "}
            {moment(topic.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topic;
