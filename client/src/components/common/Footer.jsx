import { Paper, Stack, Button, Box, Typography, Grid, Link, useTheme } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import menuConfigs from "../../configs/menu.configs";
// import { Link } from "react-router-dom";
import Container from './Container'

const Footer = () =>
{
    const theme = useTheme()
    return (
        <>
            <Container>
                <Paper square={true} sx={{ padding: '2rem' }}>

                    <Box marginX={10}>
                        <Grid container display={'flex'} justifyContent={'space-between'} spacing={5}>



                            <Grid item >
                                <Typography fontWeight={500} marginBottom={1}>Top Cities</Typography>
                                <Typography>


                                    <Link href="#" underline="hover" >
                                        New Yor City
                                    </Link>
                                </Typography>
                                <Typography>

                                    <Link href="#" underline="hover" >
                                        Los Angeles
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Toronto
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Chicago
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Houston
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Brooklyn
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        San Diego
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Las Vegas
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item>


                                <Typography>

                                    <Link href="#" underline="hover">
                                        San Francisco
                                    </Link>
                                </Typography>
                                <Typography>

                                    <Link href="#" underline="hover">
                                        Seattle
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Atlanta
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Queens
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Vancouver,BC
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Miami
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        San Antonia
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Phoenix
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item>


                                <Typography>

                                    <Link href="#" underline="hover">
                                        Denver
                                    </Link>
                                </Typography>
                                <Typography>

                                    <Link href="#" underline="hover">
                                        Austin
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Washington,DC
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Dallas
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Melbourne
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Sydney
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Montreal
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        All Cities
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontWeight={500} marginBottom={1}>Top Cuisines Near You</Typography>

                                <Typography>

                                    <Link href="#" underline="hover">
                                        Pizza Near Me
                                    </Link>
                                </Typography>
                                <Typography>

                                    <Link href="#" underline="hover">
                                        Chinese Food Near Me
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Sushi Near Me
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Cafe Near Me
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Mexican Food Near Me
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Thai Food Near Me
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Lunch Near Me
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Seafood Near Me
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item>


                                <Typography>

                                    <Link href="#" underline="hover">
                                        Indian Food Near Me
                                    </Link>
                                </Typography>
                                <Typography>

                                    <Link href="#" underline="hover">
                                        Dessert Near Me
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Burgers Near Me
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Asian Food Near Me
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Italian Food Near Me
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Vegan Food Near Me
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Sandwiches Near Me
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Restaurant Near Me
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box margin={10}>
                        <Grid container display={'flex'} justifyContent={'space-between'} spacing={5}>
                            <Grid item>
                                <Typography fontWeight={500} marginBottom={1}>Popular Category</Typography>

                                <Typography>

                                    <Link href="#" underline="hover">
                                        Alcohol Delivery
                                    </Link>
                                </Typography>
                                <Typography>

                                    <Link href="#" underline="hover">
                                        Back To School Delivery
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Beauty Stores
                                    </Link>
                                </Typography>

                            </Grid>
                            <Grid item>


                                <Typography>

                                    <Link href="#" underline="hover">
                                        Beauty Supply
                                    </Link>
                                </Typography>
                                <Typography>

                                    <Link href="#" underline="hover">
                                        Catering Near Me
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Convenience Stores
                                    </Link>
                                </Typography>

                            </Grid>
                            <Grid item>


                                <Typography>

                                    <Link href="#" underline="hover">
                                        Dashmart Near Me
                                    </Link>
                                </Typography>
                                <Typography>

                                    <Link href="#" underline="hover">
                                        Flower Delivery
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Grocery Delivery
                                    </Link>
                                </Typography>

                            </Grid>
                            <Grid item>


                                <Typography>

                                    <Link href="#" underline="hover">
                                        Pet Store Near Me
                                    </Link>
                                </Typography>
                                <Typography>

                                    <Link href="#" underline="hover">
                                        Retail Stores Near Me
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box margin={10} >
                        <Grid container display={'flex'} justifyContent={'space-between'} spacing={5}>
                            <Grid item>
                                <Typography fontWeight={500} marginBottom={1}>Get to know Us</Typography>

                                <Typography>

                                    <Link href="#" underline="hover">
                                        About Us
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Careers
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Inventers
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Company Blog
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Company Blog
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Engineering Blog
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Merchant Blog
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Gift Card
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Package Pickup
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Promotions
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Dasher Central
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        LinkedIn
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Glassdoor
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Accessibility
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Newsroom
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontWeight={500} marginBottom={1}>Let Us Help You</Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Newsroom
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Account Deatils
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Order History
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Help
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontWeight={500} marginBottom={1}>Doing Business</Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Become a Dasher
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        List Your Business
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Get Dashers for Deliveries
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href="#" underline="hover">
                                        Get DoorDash for Work
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Stack
                        alignItems='center'
                        justifyContent='space-between'
                        direction={{ xs: "column", md: 'row' }}
                        sx={{ height: 'max-content' }}
                    >
                        <Logo />
                        <Box>
                            {menuConfigs.main.map((item, index) => (
                                <Button
                                    key={index}
                                    sx={{ color: "inherit" }}
                                    component={Link}
                                    to={item.path}
                                >
                                    {item.display}
                                </Button>
                            ))}
                        </Box>
                    </Stack>
                </Paper>
            </Container>
        </>
    )
}

export default Footer