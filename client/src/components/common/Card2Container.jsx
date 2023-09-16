import React from 'react'
import { Stack, Box, Typography, Grid, Button } from '@mui/material'
import Container from './Container'
const Card2Container = () =>
{
    return (
        <>
            <Container>

                <Grid container spacing={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Grid item padding={2} xs={10} md={4} lg={5} sm={10} >

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} >

                            <Typography fontWeight="800" fontSize="2rem" textAlign={'center'} padding={1}>
                                Convenience stores at your doorstep
                            </Typography>


                            <Typography fontWeight="500" fontSize="1.2rem" textAlign={'center'} padding={1} marginBottom={1}>
                                Stock up on snacks, household essentials, candy, or vitamins — all delivered in under an hour.
                            </Typography>
                            <Button variant="contained" mt={2}>Shop now</Button>
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
                <Box display={'flex'} justifyContent={'center'}  >
                    <Typography fontWeight="800" fontSize="2.5rem" textAlign={'center'} >
                        Helping you with to-dos and gifting
                    </Typography>
                </Box>
                <Grid container spacing={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>

                    <Grid item padding={2} xs={10} md={5} lg={5} sm={10} >

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                            <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/package_pickup_desktop.png" alt="" width={'100%'} height={'100%'} />

                        </Box>
                    </Grid>
                    <Grid item padding={2} xs={10} md={5} lg={5} sm={10}>

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                            <img src="https://img.cdn4dd.com/s/managed/catex/bts-backpack.png" alt="" width={'100%'} height={'100%'} />

                        </Box>
                    </Grid>
                </Grid>

            </Container>
            {/* ========================================================================== */}
            <Container>

                <Grid container spacing={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Grid item padding={2} xs={10} md={5} lg={5} sm={10} >

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} >

                            <Typography fontWeight="700" fontSize="2rem" textAlign={'center'} >
                                Return packages from home
                            </Typography>


                            <Typography fontWeight="500" fontSize="1.2rem" textAlign={'center'} padding={1} >
                                Request a package pickup with just a few taps and get your returns dropped off at carriers like UPS, FedEx, and USPS.
                            </Typography>
                            <Button variant="contained" mt={2}>Try package pickup</Button>
                        </Box>
                    </Grid>
                    <Grid item padding={2} xs={10} md={5} lg={5} sm={10} >

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} >

                            <Typography fontWeight="700" fontSize="2rem" textAlign={'center'} padding={1}>
                                Back to school shopping
                            </Typography>


                            <Typography fontWeight="500" fontSize="1.2rem" textAlign={'center'} padding={1} >
                                From school snacks to notebooks, find everything on your back to school list.
                            </Typography>
                            <Button variant="contained" mt={2}>Shop Now</Button>
                        </Box>
                    </Grid>

                </Grid>

            </Container>
            {/* ====================================================================== */}
            <Container>

                <Grid container spacing={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>

                    <Grid item padding={2} xs={10} md={5} lg={5} sm={10} >

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                            <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/alcohol_desktop.png" alt="" width={'100%'} height={'100%'} />

                        </Box>
                    </Grid>
                    <Grid item padding={2} xs={10} md={5} lg={5} sm={10}>

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                            <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/pet_supplies_desktop.png" alt="" width={'100%'} height={'100%'} />

                        </Box>
                    </Grid>
                </Grid>

            </Container>
            {/* ========================================================================== */}
            <Container>

                <Grid container spacing={2} display={'flex'} justifyContent={'center'} >
                    <Grid item padding={2} xs={10} md={5} lg={5} sm={10} >

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} >

                            <Typography fontWeight="700" fontSize="2rem" textAlign={'center'} padding={1}>
                                Restock the minibar
                            </Typography>


                            <Typography fontWeight="500" fontSize="1.2rem" textAlign={'center'} padding={1} marginBottom={1}>
                                Request a Hosting a get-together or need or need a special cocktail ingredient? Get liquor, beer, mixers, champagne, and wine delivered fast.*
                            </Typography>
                            <Button variant="contained" mt={2}>Shop Alcohol</Button>
                            <Typography fontWeight="500" fontSize="1rem" textAlign={'center'} padding={1} marginBottom={1}>
                                *Must be 21+. Enjoy responsibly.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item padding={2} xs={10} md={5} lg={5} sm={10} >

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} >

                            <Typography fontWeight="800" fontSize="2rem" textAlign={'center'} padding={1}>
                                What your pets need, and want
                            </Typography>


                            <Typography fontWeight="500" fontSize="1.2rem" textAlign={'center'} padding={1} marginBottom={1}>
                                Finally, something cat people and dog people agree on — pet supplies delivery. Shop pet food, chew toys, and even costumes.
                            </Typography>
                            <Button variant="contained" mt={2}>Get Pet Supplies</Button>
                        </Box>
                    </Grid>

                </Grid>

            </Container>
            {/* ====================================================================== */}
            <Container>
                <Box display={'flex'} justifyContent={'center'}  >
                    <Typography fontWeight="700" fontSize="2.5rem" textAlign={'center'} >
                        Unlocking opportunity for Dashers and businesses
                    </Typography>
                </Box>
                <Grid container spacing={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Grid item padding={2} xs={10} md={4} lg={5} sm={10}>

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>

                            <Typography fontWeight="700" fontSize="2rem" textAlign={'center'} padding={1}>
                                Sign up to dash and get paid
                            </Typography>

                            <Typography fontWeight="500" fontSize="1.2rem" textAlign={'center'} padding={1}>
                                Deliver with the #1 Food and Drink App in the U.S., set your own schedule, and start earning cash anytime, anywhere.
                            </Typography>

                            <Button variant="contained" mt={2}>Become a Dasher</Button>
                        </Box>
                    </Grid>
                    <Grid item padding={2} xs={10} md={5} lg={6} sm={10}>

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                            <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/download_the_app_desktop.png" alt="" width={'100%'} height={'100%'} />

                        </Box>
                    </Grid>
                </Grid>

            </Container>
            {/* ============================================================================== */}
            <Container>
                <Box display={'flex'} justifyContent={'center'}  >
                    <Typography fontWeight="800" fontSize="2.5rem" textAlign={'center'} >
                        Unlocking opportunity for Dashers and businesses
                    </Typography>
                </Box>
                <Grid container spacing={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Grid item padding={2} xs={10} md={5} lg={6} sm={10}>

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                            <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/download_the_app_desktop.png" alt="" width={'100%'} height={'100%'} />

                        </Box>
                    </Grid>
                    <Grid item padding={2} xs={10} md={4} lg={5} sm={10}>

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>

                            <Typography fontWeight="700" fontSize="2rem" textAlign={'center'} padding={1}>
                                Grow your business with DoorDash
                            </Typography>

                            <Typography fontWeight="500" fontSize="1.2rem" textAlign={'center'} padding={1}>
                                Businesses large and small partner with DoorDash to reach new customers, increase order volume, and drive more sales.
                            </Typography>

                            <Button variant="contained" mt={2}>Become a Partner</Button>
                        </Box>
                    </Grid>

                </Grid>

            </Container>
        </>
    )
}

export default Card2Container