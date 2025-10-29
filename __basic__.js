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

/**
 * 7. for use dynamic must to write folder with this []
 * ---- if we need apply for all pages then we need to write spread operation "..."
 * example: [...slugs]
 * slugs is nothing but its a name of the folder which is recomended
 */

/**
 * 8. for not-found and loading page
    * next js provide it autometically when imidiate inside the app if we write file name not-found.jsx its work for not found page automatically
    * but for dynamic route like details items its need a dynamic id and if its provide user false id then its not work as a not found page its should be handled manually in the details page using condition
    * example -> see->> service->[id]-page.jsx
    * 
  * and also if file name is loading then its worked as a loading data times before fethcing the content
 */

/**
 * 9. in react js midleware means->
 * for the react js application request from clinet side midleware works to validate these request (like token or something) and if its true/valid then express js handle further process , that means its work request response cycle function is midlware
 * 
 * -> In next JS midlware means->
 * for next js application request from next js client side midlware works to validate and if its valid then go through next Js Server
 * note: next midleware workes for nextJS client and nextJs server layer , so nextjs midleware not works for nexts client and express js midleware
 * in this case if next js client server give any request for expresJs Server then the midleware works the expressJS one not next JS midlware 
 */

/**
 * 10. Next js MiddleWare creation
 * for creating nextJs middleware wee need to make a file isnide the src folder (must) the name must be middleware.js or ts 
 */

/**
 * 11. redirect vs rewrite
 * redrect will change the uri/url/pathname like if user try to access admin route then mddleware redirect it into login page and pathname also change to /login, on the other hand
 * rewrite will not change the path name if user try to something access admin authorization then redirect to login page and  path name will not change it will stay as user which path actually tries to access and its help to user if he login as admin redirect the actual path where he/ shee wants to go/access
 * 
 */

/**
 * 12. Rendaring
 * process of transforming code into the visual and interactive web pages that users see and interact with on their browser
 * 
 * --? react js works only client side rendering
 * --> NExtJs works client side and pre_rendering
 * 
 * -->CLient side rendering:
 *  web page is rendered by the users browser instead of the server
 * --> Pre-Rendering
 *  Process of generating a websites content or parts of it before a user requests them
 * 
 * ---> Pree-Rendering 2 types(SEO friendly)
 * 1. Server side Rendering(SSR)
 *    web server generates the complete HTML for a page each time a user request it
 * 2. Static Site Generation(SSG)
 *    Websites HTML pages are pre-buildat build time, before being deploted to a server
 * 
 * 
 * 
 * ****Client Side Rendering:****
 * When we run npm run build before deploy, its creat dist file where available a html file and reactJs code will convert JvaScript code and also available img,jason file
 * when user/browser request to web Server(ntify,vercel, etc.) then these code will come into clinet/browser and in browser execute first the Javascript code and works to fetching process from bacnkend/DB 
 * and after all process its convert as html and css file
 * that means javascript executing process is done by client/browser so its need help of the browser V8 engine
 * Note: the search engine is not waiting for executig the javaScript code they axpect that html, css file so its not SEO freandly
 * 
 * 
 */

/**
 * 13.
 * In nextJs all of the hooks should be in client side and user interect should be in client side
 * and data fetching should be in server side
 */

/**
 * 14. MetaData
 * any search engine read the meta data for knowing the purpose of the website
 */

/**
 * 15. NextJs Image tag
 * normal image tag load all once at a time and its not reduce the size of the image
 * *******NextJs Image*********
 * i. NextJs Image tag load only the neccesery image and imideate image which maybe show after little bit time which makes ui fast
 * ii. NextJs Image tag also optimize / reduce size of the image
 * iii. NextJs Image tag also make the type of the image is 'webp'
 */
/**
 * 16. Create API - Route Handlers
 * for create route inside
 * app
 *  api
 *    items
 *      [id] // dynamic
 *        route.jsx
 *      route.jsx
 * 
 * monogDB--> iside src create a folder name
 * lib
 *    dbConnect.js
 * 
 * DBNAME and DBURL should be inside the .env.local file and in next js backtick not allowd so just replace dbname and pass and also avoid qoute
 */



/**
 * 17. Caching and Revalidating
 * -->in NextJS 15+ data not automatically cached , so we need forcefully cached
 *     example:
         const res = await fetch("http://localhost:3000/api/items", {
            cache: "force-cache",
  });

   -->and if force-cache is apply then must need Revalidating in server side api otherwise new add one will not show in the ui
    example:
    export async function POST(req) {
      const postedData = await req.json();
      const result = await dbConnect("products").insertOne(postedData);
      revalidatePath("/products")
      return Response.json(result );
    }
    
 */

/**
 * 18. Loading Spinner and Redirect
 * --> for loading specific route we should need a name loading inside this folder then it will work as laoding before fething data
 * --> Redirect works for server side and router push for client side for redirecting
 * and if we need to redirect to dashboared like nasted route from simple route then wee need to work on next.config.mjs file
 *  example:
 *  async redirects() {
    return [
      // Basic redirect
      {
        source: '/products/add',
        destination: '/dashboared/products/add',
        permanent: true,
      },
      
    ]
  },
 */

/**
 * 19. NextAuth initial setup
 * install next-auth (follow nextauth doc)
 * inside the api folder
 *    auth
 *      [...nextauth]
 *        route.js
 *          here inside the route.js copy the code from nextauth docs inside provider folder copy route handler code
 *          then find name credential and full providers code
 */