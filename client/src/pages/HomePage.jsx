import { Typography, Box, Button, useTheme, Grid } from '@mui/material'
import Container from '../components/common/Container'
// import { useSelector, useDispatch } from "react-redux";









const HomePage = () =>
{
    const imageURL = 'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/hero_v3/hero_desktop.png'
    // const { user } = useSelector((state) => state.user)
    const theme = useTheme();
    return (

        <>

            <Box component="div"
                sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    // background: `rgb(225, 36, 64)`,
                    backgroundImage: `url(${imageURL})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                <Container>
                    <Box display={'flex'} justifyContent={'center'} >

                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >

                            <Typography fontWeight="900" fontSize="2rem" textAlign={'center'} margin={4} >
                                <span >  Discover restaurants and more near you.</span>
                            </Typography>

                        </Box>


                    </Box>

                    <Grid container display={'flex'} justifyContent={'center'}>
                        <Grid item md={5} >
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                                <Typography fontWeight="700" fontSize="2rem" textAlign={'center'} margin={1} >
                                    <span>Healthy delights</span>
                                </Typography>
                                <Typography fontWeight="700" fontSize="1.3rem" textAlign={'center'} margin={1} >
                                    Fresh food everyday
                                </Typography>
                                <Typography fontWeight="700" fontSize="1rem" textAlign={'center'} margin={1} >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum hic magni dignissimos corrupti provident! Maiores voluptates est nihil consectetur illum dolore quam nesciunt illo dolores. Vero debitis autem corrupti repellendus.
                                </Typography>
                                <Button variant='contained'>Order now</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box >

        </>

    )
}

export default HomePage