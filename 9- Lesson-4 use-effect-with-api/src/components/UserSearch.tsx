import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

export default function UserSearch() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setUsers([]);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?name_like=${query}`,
          { signal }
        );

        if (!response.ok) throw new Error("Failed to fetch users");

        const data: User[] = await response.json();
        setUsers(data);
      } catch (err: any) {
        if (err.name === "AbortError") {
          // * Request was aborted — ignore
          console.log("Request has been aborted");
          return;
        }
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    // * Cleanup: abort the previous request when query changes or component unmounts
    return () => controller.abort();
  }, [query]);

  return (
    <div className="p-4">
      <input
        type="text"
        className="border px-3 py-2 rounded w-full mb-3"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id} className="border-b py-1">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
