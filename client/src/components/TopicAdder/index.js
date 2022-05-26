import styles from "./styles.module.css";
import { useState } from "react";

const initialFormState = {
  topic: "",
}
function TopicAdder({ handleSubmit }) {
  const [formState, setFormState] = useState(initialFormState);

  const handleFormChanges = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, formState)
        setFormState(initialFormState);
      }}
      className={styles.form_topics}
    >
      <input
        name="topic"
        value={formState.topic}
        type="text"
        placeholder="Title"
        onChange={handleFormChanges}
      />
      <button type="submit">Add Topic</button>
    </form>
  );
}

export default TopicAdder;
