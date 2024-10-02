import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head'; // Import Head from Next.js
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Index = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerList = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Home', 'About', 'Product', 'Contact', 'Blog', 'Logout', 'Subscribe'].map((text) => (
                    <ListItem button key={text}>
                        <Link href={`/${text}`} passHref>
                            <ListItemText primary={text} />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            {/* Add Head for SEO or page metadata */}
            <Head>
                <title>Tingle</title>
                <meta name="description" content="Tingle is a job portal offering HR email contacts and vacancy details for computer science students in Delhi NCR." />
                <meta name="keywords" content="Job Portal, HR Contacts, Computer Science, Delhi, NCR, Tingle" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" /> {/* Include favicon if available */}
            </Head>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "black" }}>
                    <Toolbar>
                        {/* Hamburger menu for mobile view */}
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* Drawer for mobile navigation */}
                        <Drawer
                            anchor="left"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                        >
                            {drawerList()}
                        </Drawer>

                        {/* Website name */}
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            Tingle
                        </Typography>

                        {/* Navigation links with rounded and colored buttons */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                            <Link href="/Home" passHref>
                                <Button sx={buttonStyles("red")}>Home</Button>
                            </Link>
                            <Link href="/about" passHref>
                                <Button sx={buttonStyles("blue")}>About</Button>
                            </Link>
                            <Link href="/Product" passHref>
                                <Button sx={buttonStyles("green")}>Profile</Button>
                            </Link>
                            <Link href="/Contact" passHref>
                                <Button sx={buttonStyles("purple")}>Contact</Button>
                            </Link>
                            <Link href="/blog" passHref>
                                <Button sx={buttonStyles("orange")}>Blog</Button>
                            </Link>
                            <Link href="/Logout" passHref>
                                <Button sx={buttonStyles("grey")}>Logout</Button>
                            </Link>
                            <Link href="/Subscribe" passHref>
                                <Button sx={buttonStyles("red")}>Subscribe</Button> {/* Updated to red */}
                            </Link>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

// Button styling function for reusable design
const buttonStyles = (color) => ({
    backgroundColor: color,
    color: 'white',
    borderRadius: '20px', // Rounded corners
    padding: '8px 16px', // Add some padding
    textTransform: 'none', // Disable uppercase text transformation
    fontSize: '16px',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: darkenColor(color), // Darker shade on hover
    },
});

// Utility function to darken the color for hover state
const darkenColor = (color) => {
    const colors = {
        red: '#b30000', // Darker red
        blue: '#0033cc',
        green: '#006600',
        purple: '#660066',
        orange: '#cc5200',
        grey: '#666666',
    };
    return colors[color] || color;
};

export default Index;
