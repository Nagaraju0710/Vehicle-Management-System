import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Heading,
    Spacer,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    useColorMode,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { CgSearch } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";

import { color } from "framer-motion";
import React, { useState } from "react";
export default function Navbar() {
    const localUser = JSON.parse(localStorage.getItem("user")) || {
        name: false,
        isAuth: false,
        token: false,
    };

    const [user, setUser] = useState(localUser);
    const { isAuth, name, token } = user;

    const logoutHandler = () => {
        localStorage.clear();
        setUser({
            name: false,
            isAuth: false,
            token: false,
        });
        window.location.reload();
    };

    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Dashboard",
            path: "/dashboard",
        },
        ,
        {
            title: "Vehicles",
            path: "/vehicles",
        },
        {
            title: "Vendors",
            path: "/vendors",
        },
        {
            title: "Login",
            path: "/login",
        },
        {
            title: "Products",
            path: "/products",
        },

    ];

    return (
        <div>
            <Box >
                <Flex>
                    <Box>
                        <Tabs size='sm' variant='' width={isAuth ? '1280px' : '1280px'} bg='#293440' color='#fff'>
                            <TabList justifyContent='space-around'>
                                <Box
                                    onClick={() => {
                                        window.location.href = "/";
                                    }}
                                    style={{ width: "100px", cursor: "pointer" }}
                                >
                                    <img
                                        style={{ width: "100px", marginTop: "4px", marginLeft: '-4rem' }}
                                        src={logo}
                                        alt=''
                                    />
                                </Box>
                                <Box display='flex' height='60px'>
                                    {isAuth && (
                                        <Tab>
                                        <NavLink style={{ fontWeight: '400', fontSize: '15px', }} to='/'>Home</NavLink>
                                    </Tab>
                                    )}
                                    
                                    {isAuth && (
                                        <Tab>
                                            <NavLink style={{ fontWeight: '400', fontSize: '15px' }} to='/dashboard'>Dashboard</NavLink>
                                        </Tab>
                                    )}

                                    {isAuth && (
                                        <Tab>
                                            <NavLink style={{ fontWeight: '400', fontSize: '15px' }} to='/vehicles'>Vehicles</NavLink>
                                        </Tab>
                                    )}
                                    {isAuth && (
                                        <Tab>
                                            <NavLink style={{ fontWeight: '400', fontSize: '15px' }} to='/vendors'>Vendors</NavLink>
                                        </Tab>
                                    )}
                                    {isAuth && (
                                        <Tab>
                                            <NavLink style={{ fontWeight: '400', fontSize: '15px' }} to='/products'>Products</NavLink>
                                        </Tab>
                                    )}

                                    {!isAuth && (
                                        <Tab>
                                            <NavLink style={{
                                                fontWeight: '400', fontSize: '25px', bg: '#beec7f1a', color: "#A0CE5F",
                                                marginTop: "10px",
                                                fontWeight: "400",
                                            }} to='/login'>Login</NavLink>
                                        </Tab>
                                    )}


                                </Box>
                                {isAuth && (
                                    <Button
                                        bg='#beec7f1a'
                                        border='1px #cccc solid'
                                        _hover={{ bg: '#fff' }}
                                        style={{
                                            color: "#A0CE5F",
                                            marginTop: "10px",
                                            fontWeight: "400",
                                        }}
                                        onClick={logoutHandler}
                                    >
                                        LogOut
                                    </Button>
                                )}{" "}
                            </TabList>
                        </Tabs>
                    </Box>
                </Flex>
            </Box>
        </div>
    );
}
