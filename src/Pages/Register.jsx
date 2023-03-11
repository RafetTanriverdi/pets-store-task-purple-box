import React, { useState, useEffect } from 'react'
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { useNavigate, NavLink } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const [input, setinput] = useState([]);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setinput(storedUser);
        }

    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
          alert("Please fill in all fields.");
          return;
        }
        const newUser = { username, email, password };
        const updatedUser = [...input, newUser];
        setinput(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setemail("");
        setusername("");
        setpassword("");
        navigate("/login");
      }

    return (

        <form className='register-container' onSubmit={handleSubmit}>
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
                            <b> Register </b>
                        </Typography>
                    </div>
                    <FormControl >
                        <FormLabel>Email</FormLabel>
                        <Input
                            // html input attribute

                            name="email"
                            type="email"
                            placeholder="johndoe@email.com "
                            onChange={(e) => setemail(e.target.value)}
                            value={email}


                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel> Username</FormLabel>
                        <Input
                            // html input attribute
                            name="username"
                            type="text"
                            placeholder="johndoe"
                            onChange={(e) => setusername(e.target.value)}
                            value={username}
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

                    <Button sx={{ mt: 1 /* margin top */ }} type="submit">Register</Button>
                    <Typography
                        endDecorator={<NavLink className='lnk' to='/login' >Login</NavLink>}
                        fontSize="sm"
                        sx={{ alignSelf: 'center' }}
                    >
                        Do you have an account?
                    </Typography>

                </Sheet>
            </CssVarsProvider>
        </form>

    )
}

export default Register