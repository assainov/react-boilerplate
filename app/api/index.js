export function createLink({ topicName, url, description }) {
  return fetch(`/api/topics/${topicName}/links`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url, description, topicName }),
  }).then(response => response.json());
}

export function fetchLinksFromServer(topicName) {
  return fetch(`/api/topics/${topicName}/links`).then(response => response.json());
}
