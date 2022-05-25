import "./styles.css";
import { useState } from "react";
import { memo } from "react";

function TopicAdder({ handleSubmit }) {
  const [topic, setTopic] = useState("");

  console.log("rendered topic adder");
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, topic);
        setTopic("");
      }}
      className="form-topics"
    >
      <input
        placeholder="Thread title"
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button disabled={topic.length === 0 && true} type="submit">
        Add Topic
      </button>
    </form>
  );
}

export default memo(TopicAdder);
