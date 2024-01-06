import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardBody from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function SignUpForm() {
    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh', background: '#00000029', }}>
            <Grid item xs={12} sm={8} md={6} lg={5}>
                <Card style={{ borderRadius: '1rem' }}>
                    <CardBody>
                        <div className="mb-md-5 mt-md-4 pb-5">
                            <Typography variant="h4" component="h2" className="fw-bold mb-2 text-uppercase">
                                {/* BuzzTalk🐝 */}
                                My-app
                            </Typography>
                            <Typography variant="body1" className="text-white-50 mb-5">
                                Create an account to get started!
                            </Typography>
                            <Grid container spacing={2} mb={4}>
                                <Grid item xs={6}>
                                    <TextField
                                        type="text"
                                        id="firstName"
                                        className="form-control form-control-lg"
                                        label="First Name"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        type="text"
                                        id="lastName"
                                        className="form-control form-control-lg"
                                        label="Last Name"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} mb={4}>
                                <Grid item xs={6}>
                                    <TextField
                                        select
                                        id="gender"
                                        className="form-select form-select-lg"
                                        label="Gender"
                                        variant="outlined"
                                        value={'male'}
                                        fullWidth
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </TextField>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        type="date"
                                        id="birthdate"
                                        className="form-control form-control-lg"
                                        // label="Birthdate"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                            <TextField
                                type="email"
                                id="email"
                                className="form-control form-control-lg"
                                label="Email"
                                variant="outlined"
                                fullWidth
                                mb={4}
                            />
                            <Button variant="outlined" size="large" type="submit">
                                Sign Up
                            </Button>
                        </div>
                        <div>
                            <Typography variant="body2" className="mb-0">
                                Already have an account?{' '}
                                <a href="/login" className="text-white-50 fw-bold">
                                    Login
                                </a>
                            </Typography>
                        </div>
                    </CardBody>
                </Card>
            </Grid>
        </Grid>
    );
};