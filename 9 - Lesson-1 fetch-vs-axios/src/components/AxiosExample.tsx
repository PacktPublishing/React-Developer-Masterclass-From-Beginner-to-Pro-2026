import React, { useEffect, useState } from "react";
import axios from "axios";
interface Post {
  id: number;
  title: string;
  body: string;
}

const AxiosExample: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response) throw new Error("Network response was not ok");
        return response.data;
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <div className="text-center mt-8 text-blue-500">Loading...</div>;
  if (error)
    return <div className="text-center mt-8 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Posts</h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosExample;
