import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AdminTopBar from './AdminTopBar';
import { Link, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import { useTranslation } from 'react-i18next';
import AdminSidebarIcon from './AdminSidebarIcon';

const drawerWidth = 240;

export default observer(function AdminSidebar() {
  const {commonStore: {userSidebarEntities}} = useStore();
  const {t} = useTranslation();

  return (
    <>
    <AdminTopBar />
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: "20%",
          display: {md:'block',xs:'none'},
          [`& .MuiDrawer-paper`]: { width: "20%", boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <Divider />
          <List>
            {userSidebarEntities.map((x) => (
              <Link key={x.name} to={x.route} style={{textDecoration:"none", color:"#000", opacity: 0.8}}>
                <ListItem  disablePadding >
                  <ListItemButton>
                    <ListItemIcon>
                      {<AdminSidebarIcon icon={x.icon} />}
                    </ListItemIcon>
                    <ListItemText  primary={t(x.name)} />
                  </ListItemButton>
                </ListItem>
               </Link>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{width:"80%", p:3}}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
    </>
  );
})