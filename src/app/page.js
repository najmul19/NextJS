import Image from "next/image";
import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>
        <LoginButton></LoginButton>
      </h1>
      <p className="font-bold text-xl ">From Client Component</p>
      <UserInfo></UserInfo>
      <p className="font-bold text-xl ">From Server Component</p>
      {JSON.stringify(session)}
    </div>
  );
}
