import React, {useState} from "react";
import {ReactElement} from "react-markdown/lib/react-markdown";
import {
    Box,
    Divider,
    Drawer,
    IconButton, ListItemButton,
    ListItemIcon,
    Typography
} from "@mui/material";
import {Link} from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DoubleArrowTwoToneIcon from '@mui/icons-material/DoubleArrowTwoTone';

interface IReactElement {
    children: ReactElement;
}

export default function Layout({children}: IReactElement) {
    const [open, setState] = useState(true);

    // @ts-ignore
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    return (
        <>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon/>
            </IconButton>
            <header className="Header">
                <Typography variant="h6">
                    <Link to="/">SpinoGraphQL</Link>
                </Typography>
            </header>
            <main className="Container">{children}</main>
            <Drawer
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}
            >
                <Box>

                    <IconButton>
                        <CloseIcon onClick={toggleDrawer(false)}/>
                    </IconButton>

                    <Divider/>

                    <Box>
                        <ListItemButton>
                            <Link to="/affection-definitions">
                                <ListItemIcon><DoubleArrowTwoToneIcon/></ListItemIcon>
                                Affection Definitions
                            </Link>
                        </ListItemButton>
                        <ListItemButton>
                            <Link to="/axioms">
                                <ListItemIcon><DoubleArrowTwoToneIcon/></ListItemIcon>
                                Axioms
                            </Link>
                        </ListItemButton>
                        <ListItemButton>
                            <Link to="/definitions">
                                <ListItemIcon><DoubleArrowTwoToneIcon/></ListItemIcon>
                                Definitions
                            </Link>
                        </ListItemButton>
                        <ListItemButton>
                            <Link to="/postulates">
                                <ListItemIcon><DoubleArrowTwoToneIcon/></ListItemIcon>
                                Postulates
                            </Link>
                        </ListItemButton>
                        <ListItemButton>
                            <Link to="/propositions">
                                <ListItemIcon><DoubleArrowTwoToneIcon/></ListItemIcon>
                                Propositions
                            </Link>
                        </ListItemButton>
                    </Box>

                </Box>

            </Drawer>

        </>
    );
}
