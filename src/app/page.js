import Image from "next/image";
import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <h1>
        <LoginButton>

        </LoginButton>

      </h1>
      <p className="font-bold text-xl ">From Client Component</p>
      <UserInfo></UserInfo>
      {JSON.stringify(session)}
    </div>
  );
}
