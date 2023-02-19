import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import {Fab, Fade, ListItemIcon, useScrollTrigger} from "@mui/material";
import DoubleArrowTwoToneIcon from "@mui/icons-material/DoubleArrowTwoTone";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {ReactElement} from "react-markdown/lib/react-markdown";

interface IReactElement {
    children: ReactElement;
}

interface Props {
    children: React.ReactElement;
}

function ScrollTop(props: Props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };
    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

export default function Layout({children}: IReactElement) {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMenuOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Link to="/">
                <Typography variant="h6">
                    SpinoGraphQL
                </Typography>
            </Link>
            <Divider/>
            <List>
                <ListItem key="prefaces" disablePadding>
                    <Link to="/prefaces">
                        <ListItemButton>
                            <ListItemIcon><DoubleArrowTwoToneIcon/></ListItemIcon>
                            <ListItemText>Prefaces</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem key="affectionDefinitions" disablePadding>
                    <Link to="/affection-definitions">
                        <ListItemButton>
                            <ListItemIcon><DoubleArrowTwoToneIcon/></ListItemIcon>
                            <ListItemText>Affection Definitions</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem key="Axioms" disablePadding>
                    <Link to="/axioms">
                        <ListItemButton>
                            <ListItemIcon><DoubleArrowTwoToneIcon/></ListItemIcon>
                            <ListItemText>Axioms</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem key="Definitions" disablePadding>
                    <Link to="/definitions">
                        <ListItemButton>
                            <ListItemIcon><DoubleArrowTwoToneIcon/></ListItemIcon>
                            <ListItemText>Definitions</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem key="Postulates" disablePadding>
                    <Link to="/postulates">
                        <ListItemButton>
                            <ListItemIcon><DoubleArrowTwoToneIcon/></ListItemIcon>
                            <ListItemText>Postulates</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem key="Propositions" disablePadding>
                    <Link to="/propositions">
                        <ListItemButton>
                            <ListItemIcon><DoubleArrowTwoToneIcon/></ListItemIcon>
                            <ListItemText>Propositions</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box>
            <CssBaseline/>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={menuOpen}
                    onClose={handleDrawerToggle}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main">
                <Toolbar id="back-to-top-anchor" />
                <main className="Container">{children}</main>
            </Box>
            <ScrollTop {...children}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </Box>
    );
}