export const fetchUsers = async (signal) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      signal,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await response.json();

  return data;
};