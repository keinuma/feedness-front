"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const RssFeeds = () => {
  const [feeds, setFeeds] = useState<{ url: string }[]>([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const response = await fetch("/api/feeds");
        const data = await response.json();
        setFeeds(data.feeds);
      } catch (error) {
        console.error("Error fetching feeds:", error);
      }
    };

    fetchFeeds();
  }, []);

  return (
    <div className="flex flex-col items-center mt-12 bg-white min-h-screen">
      <h1 className="text-2xl font-semibold mb-6 text-black">RSS Feeds</h1>
      <ul className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
        {feeds.length === 0 ? (
          <li className="text-gray-500">No feeds available</li>
        ) : (
          feeds.map((feed, index) => (
            <li
              key={index}
              className="border-b border-gray-300 py-2 text-black"
            >
              {feed.url}
            </li>
          ))
        )}
      </ul>
      <Link
        href="/generate"
        className="mt-6 text-blue-500 underline cursor-pointer px-4 py-2 rounded hover:bg-blue-100 transition"
      >
        Create New Feed
      </Link>
    </div>
  );
};

export default RssFeeds;
