import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
  const token = await getToken({ req });
  // if(token){
  //   console.log("form midlware: ",token)
  // }
  const isTokenOk = Boolean(token);
  const isAdminUser = token?.role == "admin";
  const isAdminSpecificRoute = req.nextUrl.pathname.startsWith("/dashboared");
  if (isAdminSpecificRoute && !isAdminUser) {
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, req.url)
    );
  }

  return NextResponse.next(); // client req will come in to midlware and without any checking its through next step
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }
