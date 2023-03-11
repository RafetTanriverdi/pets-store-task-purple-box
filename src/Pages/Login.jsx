import React, { useState,useEffect } from 'react'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { useNavigate, NavLink } from 'react-router-dom';



function Login() {
    const navigator = useNavigate();

    const [user, setuser] = useState("");
    const [password, setpassword] = useState("");
    const [output, setoutput] = useState([]);
 
    useEffect(() => {
      
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if(!localStorage.getItem("user") ){
            navigator("/register")
        
        }
        if(loggeduser){
            setoutput(loggeduser);
        }
    }, [])
    

    const handleLogin = (e) => {
        e.preventDefault();
        const input = {
          user,
          password
        };
        const matchedUser = output.find((user) => {
          return (
            (user.username === input.user || user.email === input.user) &&
            user.password === input.password
          );
        });
        if(!localStorage.getItem("user") ){
            navigator("/register")
        
        }
        if (matchedUser) {
          localStorage.setItem("loggedin", true);
          navigator("/");
        } else {
          alert("Wrong E-mail or Password");
        }



    }







    return (

        <form className='login-container' onSubmit={handleLogin}>
            <CssVarsProvider  >

                <Sheet
                    sx={{
                        width: 300,

                        py: 3, // padding top & bottom
                        px: 2, // padding left & right
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        borderRadius: 'sm',
                        boxShadow: 'md',
                    }}
                    variant="outlined"
                >
                    <div className='login-head'>
                        <Typography level="h4" component="h1">
                            <b>Login</b>
                        </Typography>
                    </div>
                    <FormControl>
                        <FormLabel>Email / Username</FormLabel>
                        <Input
                            // html input attribute
                            name="text"
                            type="text"
                            placeholder="johndoe@email.com /joe"
                            onChange={(e) => setuser(e.target.value)}
                            value={user}

                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                            // html input attribute
                            name="password"
                            type="password"
                            placeholder="password"
                            onChange={(e) => setpassword(e.target.value)}
                            value={password}

                        />
                    </FormControl>

                    <Button sx={{ mt: 1 /* margin top */ }} type="submit">Login</Button>
                    <Typography
                        endDecorator={<NavLink to="/register" className='lnk'>Register</NavLink>}
                        fontSize="sm"
                        sx={{ alignSelf: 'center' }}
                    >
                        Don&apos;t have an account?
                    </Typography>

                </Sheet>
            </CssVarsProvider>
        </form>

    );
}

export default Login