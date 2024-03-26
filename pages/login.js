import { useSession, signIn, signOut } from "next-auth/react";

export default function LogIn() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        <p>you are logged in with {session.user.email}</p>
        <button onClick={() => signOut()}>SIGN OUT</button>
      </>
    );
  } else {
    return (
      <>
        <p>you are not signed in.</p>
        <button onClick={() => signIn()}>SIGN IN</button>
      </>
    );
  }
}
