import "./styles.css";
import Topic from "../Topic";
import { useMemo } from "react";

function TopicList({ topics, handleVoting, handleDelete }) {
  console.log("TopicList rendered");


  return (
    <div className="topic-list-container">
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
