/**1. create next js app: npx create-next-app@latest
 * No(if typescript not use)
 * ESlint
 * Yes
 * Yes
 * Yes
 * Yes
 * No
 * */


/**
 * 2. "/" -> app / root
 * inside the app folder every folder name is a route and its case sensitive and its worked as a route if the file name is page.jsx
 * example:
 * app
 *    services
 *      page.jsx(function name can change/ and its recomended to change to relavent content)
 * 
 */

/**
 * 3. For navigate route inside jsx file its work with link
 *  example: <Link "/services">services</Link>
 * but if its router is conditional then its use router.push : the hook is from nabigation useRouter()
 * example:
 * const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
 */