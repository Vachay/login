import React from 'react';
import { AppBar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, makeStyles, TextField, Toolbar, Typography } from '@material-ui/core';
import Lock from '@mui/icons-material/Lock';

import useStyle from './style';

const App = () => {
    const classes = useStyle();
    return (
        <>
            <CssBaseline />
            <main>
                <div className={classes.con}>
                    <Container maxWidth="sm" >
                        <div className={classes.head} align="center">
                            <Lock />
                            <Typography variant='h5'>
                                Sign in
                            </Typography>
                        </div>

                        <Box>
                            <TextField className={classes.input} label='Username' variant='outlined' fullWidth />
                            <TextField className={classes.input} label='Passworld' variant='outlined' fullWidth />
                            <FormControlLabel className={classes.remember} control={<Checkbox value="remember" />} label="Remember me" />
                            <Button type='submit' variant='contained' fullWidth>Sign in</Button>
                            <Grid className={classes.footer}>
                                <Grid item >
                                    <Link href='#'>
                                        Fogot Passworld?
                                    </Link>
                                </Grid>

                                <Grid item >
                                    <Link href='#'>
                                        Don't have an account? Sign Up?
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </div>

            </main>
        </>
    );
}

export default App;