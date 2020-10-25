Creating a template for a future E-Commerce store focused on brazilian costumers that live in america.

10/01/2020: Beginning of the creation process, created the app using create-react-app, add react bootstrap Navbar and a Header component.
Added responsive section for T-shirts.

10/02/2020: Created function to map over database to display items. Also added Modal function to be the form of showing more information about the displayed items.

10/03/2020: Changed the modal to Material UI for better display and dynamics, still on the process of adding it to the Map function generating the products list.<br />
Also added price functionality to the items so that if there's no price listing on the data nothing will show.

10/04/2020: Fixed display of images to correct sizes, removed links decorations on products. Also added Lorem Picsum for random images on display of products for easier view of product list.

10/05/2020: Added React Router creating individual pages for the categories as well as pages for the items. <br />
Added a home page with a selection of featured itens from the database. <br />
Merged the databases and made the necessary adjustments, also fixed the links on the Navbar.

10/06/2020: Added support for Netlify in order to deploy the webpage and show the customer the preview. Also decided to drop the Modal idea as per customer request.

10/07/2020: Started to work on React Redux and Node.js backend.

10/09/2020: Fixed styling elements that was changing colors due to Link usage. Also fixed links on Navbar. <br />
Started to work on an API idea, instead of getting data from a JS file get it from an API, made a branch to try it out. <br />
Made another branch for the development of the backend so it fixes the issue with Netlify failing to deploy.

10/11/2020: Found that Google Analytics does not work correctly with the regular boilerplate for ReactGA, will fix in the future. <br/>
Added item detail for every item, when clicked on the item it now opens a dynamic page with all the info from the item, will work on styling later.

10/12/2020: Added styling to item detail page. Added sidebar component.

10/13/2020: Added Footer with styling using linear gradient colors from the brazilian flag, also changed the colors of the navbar to match. <br />
Fixed a lot of styling all around the webpage, like changing the size of the font all around, giving some space between the footer and the button on the item detail page, fixing display size bugs. <br />
Redone the whole navbar component with Bootstrap so that now it correctly collapses depending on the size of the screen. <br />
Started to work on Cart page and Log In page.

10/14/2020: Fixed button to go up and styling on the footer component.

10/17/2020: Working on Context API in order to add the Cart component.

10/21/2020: Working on adding a Cart, Subtotal and Checkout process.

10/22/2020: Finished Cart, Subtotal and Checkout component. <br />
Added Sign in component with Firebase and added all the functionality around it. <br />
deployed as unfinished build thro Firebase at https://brazilboutique-ba097.web.app/

10/24/2020: Webpage finalized. <br />
Technologies used: <br />

- Bootstrap for the Navbar<br />
- ContextAPI handle the cart and general information<br />
- React Router<br />
- React Currency Format <br />
- Firebase as a hosting service and user authenticator <br />
- FontAwesome <br />
