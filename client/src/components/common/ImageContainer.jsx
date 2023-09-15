
import React from 'react'
import Container from './Container'
import { Box, Typography, Button } from '@mui/material'


const ImageContainer = () =>
{
    const imageURL = 'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/grocery_desktop.png'
    return (
        <Container >
            <Box component="div"
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    // background: `rgb(225, 36, 64)`,
                    backgroundImage: `url(${imageURL})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',


                }}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} margin={10}>
                    <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} >

                        <Typography fontWeight="800" fontSize="2rem" textAlign={'center'} margin={2}>
                            Get grocery and convenience store essentials
                        </Typography>
                        <Typography fontWeight="700" fontSize="1.5rem" textAlign={'center'}>
                            Grocery delivery, exactly how you want it.
                        </Typography>


                        <Typography margin={2} fontWeight="700" fontSize="1.2rem" textAlign={'center'} >
                            Shop from home and fill your cart with fresh produce, frozen entrees, deli delights, and more.
                        </Typography>
                        <Button variant="contained" >Shop Groceries</Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default ImageContainer