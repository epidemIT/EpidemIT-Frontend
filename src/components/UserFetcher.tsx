import { cookies } from "next/headers";

export interface User {
  id: string;
  full_name: string;
  email: string;
  bio: string;
  photo: string;
}

interface UserFetcherProps {
  children: ({ user }: { user: User | null }) => JSX.Element;
}

export default async function UserFetcher({ children }: UserFetcherProps) {
  const cookie = cookies();
  const token = cookie.get("token");

  // Fetch the user data from the API
  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + `/users/current`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    }
  );

    if (!response.ok) {
    return children({ user: null });
    }

    const user = await response.json();

    console.log("user", user)

  // Pass the user data as props to the child components
  return children({ user });
}
