import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import RateReviewIcon from '@mui/icons-material/RateReview';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import logo from '../../images/logo.PNG'
import DashboardIcon from '@mui/icons-material/Dashboard';
import HandymanIcon from '@mui/icons-material/Handyman';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import Shop2OutlinedIcon from '@mui/icons-material/Shop2Outlined';
import { NavLink, Outlet } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import { Button } from 'react-bootstrap';

const drawerWidth = 240;

function Dashboard(props) {
    // const [isAdmin, setisAdmin] = React.useState(false)
    const { isAdmin, logOut, user } = UseAuth()

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    // const { isAdmin } = UseAuth()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>
                <NavLink to="/home">
                    <img src={logo} alt="logo" style={{ width: "100px" }} />
                </NavLink>

            </Toolbar>
            <Divider />
            <List>
                <ListItem className="nav-style shadow">
                    <NavLink to="/dashboard" className="d-flex nav-link nav-hover text-dark"  >
                        <DashboardIcon />
                        <Typography variant="p">Dashboard</Typography>
                    </NavLink>
                </ListItem>
                {
                    isAdmin && <Box>
                        <ListItem className="nav-style shadow">
                            <NavLink to="makeadmin" className="d-flex nav-link nav-hover text-dark"  >
                                <AdminPanelSettingsOutlinedIcon />
                                <Typography variant="p">Make Admin</Typography>
                            </NavLink>
                        </ListItem>
                        <ListItem className="nav-style shadow">
                            <NavLink to="addproducts" className="d-flex nav-link nav-hover text-dark"  >
                                <AddIcon />
                                <Typography variant="p">Add Product</Typography>
                            </NavLink>
                        </ListItem>
                        <ListItem className="nav-style shadow">
                            <NavLink to="manageproducts" className="d-flex nav-link nav-hover text-dark"  >
                                <HandymanIcon />
                                <Typography variant="p">Manage Products</Typography>
                            </NavLink>
                        </ListItem>
                        <ListItem className="nav-style shadow">
                            <NavLink to="manageorders" className="d-flex nav-link nav-hover text-dark"  >
                                <HandymanIcon />
                                <Typography variant="p">Manage Orders</Typography>
                            </NavLink>
                        </ListItem>
                        <ListItem className="nav-style shadow">
                            <NavLink to="caruselitem" className="d-flex nav-link nav-hover text-dark"  >
                                <AddIcon />
                                <Typography variant="p">Add Carusel Item</Typography>
                            </NavLink>
                        </ListItem>
                        <ListItem className="nav-style shadow">
                            <NavLink to="managecarusel" className="d-flex nav-link nav-hover text-dark"  >
                                <HandymanIcon />
                                <Typography variant="p">Manage Carusel</Typography>
                            </NavLink>
                        </ListItem>
                    </Box>
                }
                <ListItem className="nav-style shadow">
                    <NavLink to="ratings" className="d-flex nav-link nav-hover text-dark"  >
                        <RateReviewIcon />
                        <Typography variant="p">Rating</Typography>
                    </NavLink>
                </ListItem>
                <ListItem className="nav-style shadow">
                    <NavLink to="myorder" className="d-flex nav-link nav-hover text-dark"  >
                        <Shop2OutlinedIcon />
                        <Typography variant="p">My Order</Typography>
                    </NavLink>
                </ListItem>
                <ListItem className="nav-style shadow">
                    <Button variant="outline-dark" onClick={logOut}><LogoutOutlinedIcon /> Logout</Button>
                </ListItem>


            </List>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <AccountCircleOutlinedIcon />
                    <Typography variant="h6" noWrap component="div">
                        {user.displayName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet></Outlet>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
