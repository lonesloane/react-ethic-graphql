import React from "react";
import { Link } from "react-router-dom";
import {Typography} from "@mui/material";

export default function Header() {
    return (
        <header className="Header">
            <Typography variant="h6" sx={{flexGrow: 1, fontWeight: 700}}>
                <Link to="/">SpinoGraphQL</Link>
            </Typography>
        </header>
    );
}
