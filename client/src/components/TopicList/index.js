import styles from "./styles.module.css";
import Topic from "../Topic";

function TopicList({ topics, handleVoting, handleDelete }) {
  return (
    <div className={styles.topic_list_container}>
      {topics.map((topic) => (
        <Topic
          key={topic._id}
          topic={topic}
          handleVoting={handleVoting}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TopicList;
