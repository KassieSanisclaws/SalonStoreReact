import { useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";


const ProtectedRoutes = ({ path, exact, children }) => {
    const auth = useSelector((state) => state.authenticate);
    const {userInfo} = auth;

    return userInfo ? (
      <Routes>
      <Route path={path} exact={exact}>
        {children}
      </Route>
      </Routes>
       ) : (
         <Navigate to="/login"/>
       );
   };





// const ProtectedRoutes = () => {
//   const userInfo = useSelector((state) => state.auth);
//   console.log(userInfo);
//   const location = useLocation();
//   const { auth } = useAuth(); 

//   return (
//     auth?.userInfo
//         ? <Outlet/>
//         : <Navigate to="/login" state={{ from: location }} replace/>
//   )
// };


export default ProtectedRoutes;