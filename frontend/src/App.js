
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";


/*******************************Showcase*************************************** */
import VeiwRMproducts from './Components/readyMadeProducts/VeiwRproducts';
import LanchingScreen from './Screens/LanchingScreen';
import Home from './Screens/Home/Home';
import ReadymadeProducts from './Components/readyMadeProducts/readyMadeProducts';
import Showcase from './Components/Showcase/Showcase';
import AddRShowProducts from './Components/Showcase/ShowcaseProducts/AddShowcaseProducts';
import AddRMtoShow from './Components/Showcase/ShowcaseProducts/AddRMtoShow';
import AllShowcaseItems from './Components/Showcase/ShowcaseProducts/AllShowCaseProducts';
import UpdateShowcaseProduct from './Components/Showcase/ShowcaseProducts/UpdateShowcaseProduct';
import VeiwJewelerryItem from './Components/Showcase/ShowcaseProducts/Veiws/VeiwJewelryItem';
import AdminMain from './Screens/AdminMainPage';
import OnboardingScreen from './Screens/OnboardingScreen';
import ShowcaseReportGen from './Components/Showcase/ShocaseReport';
import CartComponent from './Components/Showcase/Cart/Cart';
import CompareView from './Components/Showcase/ShowcaseProducts/Veiws/CompareView';
import LoginScreen from './Screens/LoginScreen';
import Collections from './Components/Showcase/Collections';
import AdminHome from './Components/Admin/AdminHome';
import ShowcaseCategories from './Components/Showcase/Collections/ShowcaseCategories';
import Signin from './User/Containers/Signin';
import Signup  from './User/Containers/Signup';
import { isUserLoggedIn } from './User/actions';
/*******************************Showcase*************************************** */
/*******************************Inventory*************************************** */

import Inventory from "./InventoryManage/Inventory/Inventory";
import AddMaterial from "./InventoryManage/Add Material/AddMaterial";
import Materials from "./InventoryManage/Material Details/Materials";
import UpdateMaterial from "./InventoryManage/UpdateMaterial/UpdateMaterial";




import AddSupplier from "./InventoryManage/Add Supplier/AddSupplier";
import Suppliers from "./InventoryManage/Supplier Details/Suppliers";
import UpdateSupplier from "./InventoryManage/UpdateSupplier/UpdateSupplier";

import AddReserve from "./InventoryManage/Add Reserve/AddReserve";
import Reserves from "./InventoryManage/Reserve Details/Reserves";
import UpdateReserve from "./InventoryManage/UpdateReserve/UpdateReserve";

import AddMaterialout from "./InventoryManage/Add Materialout/AddMaterialout";
import Materialouts from "./InventoryManage/Materialout Details/Materialouts";
import UpdateMaterialout from "./InventoryManage/UpdateMaterialout/UpdateMaterialout";

import AddMaterialin from "./InventoryManage/Add Materialin/AddMaterialin";
import Materialins from "./InventoryManage/Materialin Details/Materialins";
import UpdateMaterialin from "./InventoryManage/UpdateMaterialin/UpdateMaterialin";






/*******************************Inventory*************************************** */





function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const token = window.localStorage.getItem('token');
  const user = JSON.parse(window.localStorage.getItem("user"));

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
   
    }
  }, []);


  return (


<div>

 <Routes>
  {/***************************Showcase******************************* */}
 <Route path='/signup' exact Component={Signup}/>
 <Route path='/signin' exact Component={Signin}/>
 <Route path='/cart' exact Component={CartComponent}/>
 <Route path='/compare' exact Component={CompareView}/> 
 <Route path='/report' exact Component={ShowcaseReportGen}/> 
 <Route path='/show/view/:id' exact Component={VeiwJewelerryItem}/>
 <Route path='/show/update/:id' exact Component={UpdateShowcaseProduct}/>
 <Route path='/show/View' exact Component={AllShowcaseItems}/>
 <Route path='/show/Cat' exact Component={ShowcaseCategories}/>
 <Route path='/show/add' exact Component={AddRMtoShow}/>
 <Route path='/show/addP/:id' exact Component={AddRShowProducts}/>

  <Route path='/show' exact Component={Showcase}/>
  <Route path='/RMP/update/:id' exact Component={VeiwRMproducts}/>
<Route path='/RMP' exact Component={ReadymadeProducts}/>
{/***************************Showcase******************************* */}

{/***************************Inventory******************************* */}
<Route path="/inventory" element={<Inventory/>}/>
          <Route path="/maininventory" element={<Inventory/>}/>
          <Route path="/addmaterial" element={<AddMaterial/>}/>
          <Route path="/materialdetails" element={<Materials/>}/>
          <Route path="/materialdetails/:id" element={<UpdateMaterial/>}/>

       

          <Route path="/addsupplier" element={<AddSupplier/>}/>
          <Route path="/supplierdetails" element={<Suppliers/>}/>
          <Route path="/supplierdetails/:id" element={<UpdateSupplier/>}/>

          <Route path="/addreserve" element={<AddReserve/>}/>
          <Route path="/reservedetails" element={<Reserves/>}/>
          <Route path="/reservedetails/:id" element={<UpdateReserve/>}/>

          <Route path="/addmaterialout" element={<AddMaterialout/>}/>
          <Route path="/materialoutdetails" element={<Materialouts/>}/>
          <Route path="/materialoutdetails/:id" element={<UpdateMaterialout/>}/>

          <Route path="/addmaterialin" element={<AddMaterialin/>}/>
          <Route path="/materialindetails" element={<Materialins/>}/>
          <Route path="/materialindetails/:id" element={<UpdateMaterialin/>}/>

{/***************************Inventory******************************* */}



<Route path='/admin' exact Component={AdminHome}/>
<Route path='/home/collection' exact Component={Collections}/>
<Route path='/home' exact Component={Home}/>

<Route path='/3' exact Component={OnboardingScreen}/>
<Route path='/1' exact Component={LoginScreen}/>
<Route path="/logged" element={user && (user.role=='customer')? <Navigate to="/home" />:user && (user.role=='admin')? <Navigate to="/admin" />:<LanchingScreen/>} />
<Route path='/' element={token && user ? <Navigate to="/logged" /> : <LanchingScreen/>}/>

 </Routes>
</div>


   
  );
}

export default App;
