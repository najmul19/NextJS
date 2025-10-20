/**
 * Note: in next js if we use any hook then must to write a section in top of the page which is "use client"
 * 1. create next js app: npx create-next-app@latest
 * No(if typescript not use)
 * ESlint
 * Yes
 * Yes
 * Yes
 * Yes
 * No
 * */


/**
 * //static route
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
 * but if its router is conditional then its use router.push : the hook is from nabigation useRouter() and need in top of the page "use client"
 * example:
 * const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
 */

/**
 * 4.-->> Dynamic Route
 * for making dynamic route we need to create folder for any services like details of the pruduct 
 * first we need to create a folder under that services folder with [] for example: [id] and insed that we need to create a file name page.jsx
 * example:
 * const ServiceDetailPage = ({params}) => {
    const id = params.id;
    return (
        <div>
            <h1>ServiceDetailPage</h1>
            <p>Id: {id}</p>
        </div>
    );
};
 */

/**
 * 5. in next js (folderName) its ignore so under () it will directly goes inside folder as route
 * example:
 * (auth)
 *      login
 *          login.jsx
 * ->----> that means "/login" will work as route like under app route name is login
 */

/**
 * 6. in next js we can found path name from usePathname() and top of the page should write "use client"
 */
