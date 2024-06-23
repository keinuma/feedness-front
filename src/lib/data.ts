type Feed = {
  url: string;
};

let feeds: Feed[] = [];

export const addFeed = (url: string) => {
  feeds.push({ url });
};

export const getFeeds = () => {
  return feeds;
};
