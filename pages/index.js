import { useUser } from "@auth0/nextjs-auth0/client";

export default function Index() {
  const { user, error, isLoading } = useUser();
  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (user) {
    return (
      <div>
        <h1>Welcome back!</h1>
        <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return (
    <div>
      <h1>Hello</h1>
      <p>
        Please <a href="/api/auth/login">Login</a>
      </p>
    </div>
  );
}
