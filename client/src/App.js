import styles from "./App.module.css";
import { useState, useEffect } from "react";
import TopicAdder from "./components/TopicAdder";
import { topicService } from "./services/topicService";
import TopicList from "./components/TopicList";

function App() {
  const [topics, setTopics] = useState([]);

  const getAllTopics = async () => {
    const { res, error } = await topicService.getAllTopics();
    if (!error) {
      // handle my normal logic over here
      setTopics(res);
    } else {
      // handle error over here
    }
  };

  useEffect(() => {
    getAllTopics();
  }, []);

  const handleFormSubmit = async (e, formState) => {
    e.preventDefault();
    const { res, error } = await topicService.createTopic(formState);
    if (!error) {
      setTopics((prevTopics) => [...prevTopics, res]);
    }
  };

  const handleVoting = async (id, direction) => {
    if (direction === "up") {
      const { res, error } = await topicService.upvoteTopic(id);
      if (!error) setTopics(res);
    } else if (direction === "down") {
      const { res, error } = await topicService.downvoteTopic(id);
      if (!error) setTopics(res);
    }
  };

  const handleDelete = async (id) => {
    const { res, error } = await topicService.deleteTopic(id);
    if (!error) {
      setTopics((prevTopics) => {
        return prevTopics.filter(topic => topic._id !== id);
      })
    }
  };

  return (
    <div className={styles.main_container}>
      <TopicAdder handleSubmit={handleFormSubmit} />
      {topics.length > 0 ? (
        <TopicList
          topics={topics}
          handleVoting={handleVoting}
          handleDelete={handleDelete}
        />
      ) : (
        <div className={styles.no_topics}>
          <h1>No topics!</h1>
        </div>
      )}
    </div>
  );
}

export default App;
