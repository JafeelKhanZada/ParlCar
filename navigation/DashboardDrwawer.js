import { createDrawerNavigator } from "react-navigation-drawer"
import AddNew from "../Components/Dashboard/AddNewAdds"
import Dashboard from "../Screens/Dashboard/Dashboard"
import DashboardDrawe from "../Components/Drwawer/DashboardDrawer"
export const DashboardDrawer = createDrawerNavigator({
    Dashboard: {
        screen: Dashboard
    },
    AddNew: {
        screen: AddNew
    },
},
    {
        initialRouteName: 'Dashboard',
        contentComponent: DashboardDrawe,
        drawerType: "slide"
    })