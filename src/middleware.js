import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const dummyUserData = {
        role: "admin",
        email: "test@admin.com"
    }
  let isServicesPage = request.nextUrl.pathname.startsWith("/services");
  // console.log("PATHNAME: ",request.nextUrl.pathname.startsWith("/services"))
  let isAdmin = dummyUserData.role=="admin"
  if(isServicesPage && !isAdmin){
    return NextResponse.redirect(new URL("/login", request.url))
  }
  return NextResponse.next(); // client request will come in to midlware andd without any checking its through next step
}

 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }