import React, { useEffect, useState } from "react";
import client from "../api/client";
import Error from "./Error";
import SkeletonCard from "./SkeletonCard";

interface Post {
  id: number;
  title: string;
  body: string;
}

const AxiosClientSkeleton: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await client.get<Post[]>("/posts");
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (error) return <Error />;

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Posts</h2>
      <ul className="space-y-4">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : posts.map((post) => (
              <li key={post.id} className="p-4 bg-white rounded shadow">
                <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                <p className="text-gray-700">{post.body}</p>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default AxiosClientSkeleton;
