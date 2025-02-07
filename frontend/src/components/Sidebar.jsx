import * as React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useLocation } from 'react-router-dom';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
    width: drawerWidth,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
        width: drawerWidth,
        backgroundColor: '#FFFFFF',
        borderRight: 'none',
    },
});

const menuItems = [
    { text: 'Dashboard', icon: <DashboardOutlinedIcon />, path: '/dashboard' },
    { text: 'Customer', icon: <GroupOutlinedIcon />, path: '/customer' },
    { text: 'Dealer', icon: <StorefrontOutlinedIcon />, path: '/dealer' },
    { text: 'Inventory', icon: <Inventory2OutlinedIcon />, path: '/inventory' },
    { text: 'Purchase', icon: <ShoppingCartOutlinedIcon />, path: '/purchase' },
    { text: 'Sales', icon: <AttachMoneyOutlinedIcon />, path: '/sales' },
];

export default function Sidebar() {
    const location = useLocation();

    return (
        <Drawer variant="permanent">
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 80, p: 2 }}>
                <img src="public/images/logo_salesync.png" alt="Company Logo" style={{ width: '80%', maxWidth: '150px' }} />
            </Box>
            <Divider />
            <Box sx={{ flexGrow: 1, p: 1.5 }}>
                <List>
                    {menuItems.map(({ text, icon, path }, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton
                                selected={location.pathname === path}
                                sx={{
                                    borderRadius: '12px',
                                    mx: 1,
                                    py: 1,
                                    backgroundColor: location.pathname === path ? '#E3E7FE' : 'transparent',
                                    color: location.pathname === path ? '#3F51B5' : 'inherit',
                                    '&:hover': { backgroundColor: '#E3E7FE' },
                                }}
                            >
                                <ListItemIcon sx={{ color: location.pathname === path ? '#3F51B5' : 'inherit' }}>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText primary={text} primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton selected={location.pathname === '/settings'} sx={{ borderRadius: '12px', mx: 1, py: 1, '&:hover': { backgroundColor: '#E3E7FE' } }}>
                        <ListItemIcon sx={{ color: location.pathname === '/settings' ? '#3F51B5' : 'inherit' }}>
                            <SettingsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', borderTop: '1px solid', borderColor: 'divider' }}>
                <Avatar alt="Tom Sandt" src="/static/images/avatar/7.jpg" sx={{ width: 36, height: 36 }} />
                <Box sx={{ ml: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>Tom Sandt</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 400 }}>tom.sandt@telekom.de</Typography>
                </Box>
                <LogoutRoundedIcon sx={{ ml: 'auto', cursor: 'pointer', color: 'gray', fontSize: '1.6rem' }} />
            </Box>
        </Drawer>
    );
}
