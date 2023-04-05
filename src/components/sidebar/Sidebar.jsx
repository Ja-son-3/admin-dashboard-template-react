import { AccountCircleOutlined, Assessment, CreditCard, Dashboard, ExitToAppOutlined, LocalShipping, NotificationsNoneOutlined, Person2Outlined, Psychology, SettingsApplications, SettingsSystemDaydreamOutlined, Store } from "@mui/icons-material"
import "./sidebar.scss"


const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Admin</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <Dashboard className="icon" />
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <Person2Outlined className="icon" />
                    <span>Users</span>
                </li>
                <li>
                    <Store className="icon" />
                    <span>Products</span>
                </li>
                <li>
                    <CreditCard className="icon" />
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShipping className="icon" />
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <Assessment className="icon" />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneOutlined className="icon" />
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamOutlined className="icon" />
                    <span>System Health</span>
                </li>
                <li>
                    <Psychology className="icon" />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplications className="icon" />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlined className="icon" />
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppOutlined className="icon" />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar