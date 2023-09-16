import React from 'react'
import { Stack, Box, Typography, Grid, Button } from '@mui/material'
import Container from '../common/Container'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const CardContainer = () =>
{
    return (
        <>
            <Container >
                <Grid container spacing={2} display={'flex'} justifyContent={'center'} height={"auto"}>
                    <Grid item padding={2} xs={11} md={3} sm={10}>

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} >
                            <img src="https://cdn.doordash.com/media/consumer/home/landing/new/ScootScoot.svg" alt="" />
                            <Typography fontWeight="700" fontSize="2rem" textAlign={'center'}>
                                Become a Dasher
                            </Typography>
                            <Typography fontWeight="500" fontSize="1.2rem" textAlign={'center'} >
                                As a delivery driver, you'll make reliable money—working anytime, anywhere.
                            </Typography>
                            <Button variant="text" fontWeight="500" >Start learning <ArrowRightAltIcon /></Button>
                        </Box>
                    </Grid>
                    <Grid item padding={2} xs={11} md={3} sm={10}>

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                            <img src="https://cdn.doordash.com/media/consumer/home/landing/new/Storefront.svg" alt="" />
                            <Typography fontWeight="700" fontSize="2rem" textAlign={'center'} >
                                Become a Partner
                            </Typography>
                            <Typography fontWeight="500" fontSize="1.2rem" textAlign={'center'} >
                                Grow your business and reach new customers by partnering with us.
                            </Typography>
                            <Button variant="text" fontWeight="500" >Sign up your store<ArrowRightAltIcon /></Button>
                        </Box>
                    </Grid>
                    <Grid item padding={2} xs={11} md={3} sm={10}>

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                            <img src="https://cdn.doordash.com/media/consumer/home/landing/new/ScootScoot.svg" alt="" />
                            <Typography fontWeight="700" fontSize="2rem" textAlign={'center'}>
                                Become a Dasher
                            </Typography>
                            <Typography fontWeight="500" fontSize="1.2rem" textAlign={'center'} >
                                As a delivery driver, you'll make reliable money—working anytime, anywhere.
                            </Typography>
                            <Button variant="text" fontWeight="500" >Get the app<ArrowRightAltIcon /></Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container>

                <Grid container spacing={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Grid item padding={2} xs={10} md={4} lg={5} sm={10}>

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>

                            <Typography fontWeight="700" fontSize="2rem" textAlign={'center'}>
                                Everything you crave, delivered.
                            </Typography>

                            <Typography fontWeight="700" fontSize="1.5rem" textAlign={'center'} padding={1}>
                                Your favorite local restaurants
                            </Typography>
                            <Typography fontWeight="500" fontSize="1.2rem" textAlign={'center'} padding={1}>
                                Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try.
                            </Typography>
                            <Button variant="contained" mt={2}>Find restourant</Button>
                        </Box>
                    </Grid>
                    <Grid item padding={2} xs={10} md={5} lg={6} sm={10}>

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                            <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/download_the_app_desktop.png" alt="" width={'100%'} height={'100%'} />

                        </Box>
                    </Grid>
                </Grid>

            </Container>
            <Container>

                <Grid container spacing={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>

                    <Grid item padding={3} xs={10} md={5} lg={6} sm={10}>

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                            <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/dashpass_desktop.png" alt="" width={'100%'} height={'100%'} />

                        </Box>
                    </Grid>
                    <Grid item padding={3} xs={10} md={4} lg={5} sm={10} >

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>

                            <Typography fontWeight="700" fontSize="2rem" textAlign={'center'}>
                                DashPass is delivery for less
                            </Typography>


                            <Typography fontWeight="500" fontSize="1.2rem" textAlign={'center'} padding={1}>
                                Members get a $0 delivery fee on DashPass orders, 5% back on pickup orders, and so much more. Plus, it's free for 30 days.
                            </Typography>
                            <Button variant="contained" mt={2}>Get DashPass</Button>
                        </Box>
                    </Grid>

                </Grid>

            </Container>


        </>
    )
}

export default CardContainer