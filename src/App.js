import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Product from './Component/Product/Product';
import Main from './LayOut/Main';
import Friends from './Component/Friends/Friends';
import FriendsDetails from './Component/FriendsDetails/FriendsDetails';
import Friend from './Component/Friend/Friend';
import Posts from './Component/Posts/Posts';
import PostDetails from './Component/PostDetails/PostDetails';


function App() {
  const router = createBrowserRouter([
    {path:'/',
     element:<Main></Main>,
     children: [
      {path:'/' , element:<Home></Home>},
      {path:'/home' , element:<Home></Home>},
      {path: '/about', element:<About></About>},
      {path:'/friend',
      loader:async ()=>{
        return fetch ('https://jsonplaceholder.typicode.com/users')
      },
       element: <Friends></Friends>},
       {path:'/friends/:friendID',
        loader: async ({params})=>{
          return fetch (`https://jsonplaceholder.typicode.com/users/${params.friendID}`)

        },
        element:<FriendsDetails></FriendsDetails>},
        {path:'/posts',
        loader: async () =>{
          return fetch('https://jsonplaceholder.typicode.com/posts')
        },
        element: <Posts></Posts> },
        {
          path:'/post/:postID',
          loader: async ({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`)
          },
          element:<PostDetails></PostDetails>
        }

    ] },
    
    {path: '/product', element:<Product></Product>},
    {path: '*', element: <div>Not Found</div>}
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
