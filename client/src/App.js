import "./App.css";
import { useEffect, useState, useCallback } from "react";
import TopicAdder from "./components/TopicAdder";
import TopicList from "./components/TopicList";
import { topicService } from "./services/topicService";

function App() {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  const getAllTopics = async () => {
    const { res, error } = await topicService.getAllTopics();
    if (!error) {
      setTopics(res);
    } else {
      setError(res);
    }
  };

  const handleVoting = async (id, direction) => {
    if (direction === "up") {
      await topicService.upvoteTopic(id);
      setTopics((prevValue) => {
        const idTopic = prevValue.find((topic) => topic._id === id);
        idTopic.score += 1;
        const copyPrev = prevValue.filter((topic) => topic._id !== id);
        copyPrev.push(idTopic);
        return copyPrev.sort((a, b) => b.score - a.score);
      });
    } else if (direction === "down") {
      await topicService.downvoteTopic(id);
      setTopics((prevValue) => {
        const idTopic = prevValue.find((topic) => topic._id === id);
        idTopic.score -= 1;
        const copyPrev = prevValue.filter((topic) => topic._id !== id);
        copyPrev.push(idTopic);
        return copyPrev.sort((a, b) => b.score - a.score);
      });
    }
  };

  const handleDelete = async (id) => {
    await topicService.deleteTopic(id);
    setTopics((prevValue) => {
      const allButId = prevValue.filter((topic) => topic._id !== id);
      return allButId;
    });
  };

  const handleTopicSubmit = useCallback(async (e, topic) => {
    e.preventDefault();
    const { res } = await topicService.createTopic(topic);
    setTopics((prevValue) => [...prevValue, res].sort((a, b) => b.score - a.score));
  }, []);

  useEffect(() => {
    getAllTopics();
  }, []);

  console.log("app rendered", topics);

  return (
    <div className="main-container">
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <TopicAdder handleSubmit={handleTopicSubmit} />
      {topics.length > 0 ? (
        <TopicList
          topics={topics}
          handleVoting={handleVoting}
          handleDelete={handleDelete}
        />
      ) : (
        <div className="no-topics">
          <h1>No topics!</h1>
        </div>
      )}
    </div>
  );
}

export default App;
