import Login from "../pages/Login";
import index from "../pages/admin/dashboard/index";
import Edit from "../pages/admin/products/Edit";
import List from "../pages/admin/products/List";
import PageNotFound from "../pages/PageNotFound";
export const mainRoutes=[
{
path:'/Login',
component:Login
},
{
    path:"/404",
    component:PageNotFound

}]

export const adminRoutes=[{
    path:'/admin/dashboard',
    component:index
    },
    {
    path:'/admin/products',
    component:Edit
    },
    {
    path:'/admin/products/edit/:id',
    component:List,
    exact:true
    }


]
    
    