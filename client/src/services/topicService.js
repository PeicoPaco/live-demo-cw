const baseURL = process.env.REACT_APP_BASE_URL;

export const topicService = {};

topicService.getAllTopics = () => {
  return fetch(`${baseURL}/topics/`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
};

topicService.createTopic = (topic) => {
  return fetch(`${baseURL}/topics/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(topic),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
};

topicService.upvoteTopic = (id) => {
  return fetch(`${baseURL}/topics/${id}/up`, {
    method: "PUT",
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
};

topicService.downvoteTopic = (id) => {
  return fetch(`${baseURL}/topics/${id}/down`, {
    method: "PUT",
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
};

topicService.deleteTopic = (id) => {
  return fetch(`${baseURL}/topics/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
};
