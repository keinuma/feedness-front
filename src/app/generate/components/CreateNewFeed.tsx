"use client";

import { useState } from "react";

const CreateNewFeed = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleGenerate = async () => {
    if (!url) {
      setError("Please enter a URL, topic, or keyword");
      return;
    }

    if (!isValidUrl(url)) {
      setError("Please enter a valid URL");
      return;
    }

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
      alert("RSS feed generated successfully");
      setUrl("");
      setError("");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to generate RSS feed");
    }
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="text-2xl font-semibold mb-6 text-black">
        Create New Feed
      </h1>
      <div className="flex w-full max-w-md">
        <input
          type="text"
          placeholder="Enter URL, Topic or Keyword"
          className="flex-grow p-2 border border-gray-300 rounded-l text-black"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          onClick={handleGenerate}
          className="bg-orange-500 text-white px-4 py-2 rounded-r"
        >
          Generate
        </button>
      </div>
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
};

export default CreateNewFeed;
