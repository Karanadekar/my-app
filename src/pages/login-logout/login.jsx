import React, { useState } from "react";
import Grid from 'material-ui-core/Grid';
import Card from 'material-ui-core/Card';
import CardBody from 'material-ui-core/CardContent';
import TextField from 'material-ui-core/TextField';
import Button from 'material-ui-core/Button';
import Typography from 'material-ui-core/Typography';

export default function Login() {

    // const history = useHistory();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Login form submitted:', formData);
    };

    return (
        <React.Fragment key={'Login Page'}>
            <Grid container alignItems="center" style={{ height: '100vh', background: '#00000029', justifyContent: 'center' }}>
                <Grid item xs={12} sm={8} md={6} lg={5}>
                    <Card style={{ borderRadius: '1rem' }}>
                        <CardBody>
                            <form onSubmit={handleSubmit}>
                                <Grid container direction="column" alignItems="center" spacing={4} sx={{ borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                    <Grid item>
                                        <Typography variant="h4" component="h2" className="fw-bold mb-2 text-uppercase">
                                            {/* BuzzTalk🐝 */}
                                            My-app
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1" className="text-white-50 mb-5">
                                            Missing keys! Unlock the door with your Username and Password, please.
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            type="text"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            label="Username"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            label="Password"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" className="small mb-5 pb-lg-2">
                                            <a href="#!" className="text-white-50">
                                                Forgot password?
                                            </a>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" size="large" type="submit">
                                            Login
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white">
                                                <i className="fab fa-facebook-f fa-lg"></i>
                                            </a>
                                            <a href="#!" className="text-white">
                                                <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                                            </a>
                                            <a href="#!" className="text-white">
                                                <i className="fab fa-google fa-lg"></i>
                                            </a>
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" className="mb-0">
                                            Don't have an account?{' '}
                                            <a href="/signup" className="text-white-50 fw-bold">
                                                Sign Up
                                            </a>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardBody>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}