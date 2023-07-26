import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Container } from "@mui/material";
import { useAppSelector } from "app/hooks";
import { selectIsSignIn } from "app/app.selectors";
import { useActions } from "common/hooks/useAppActions";
import { authThunks } from "features/auth/auth.slice";

export default function ButtonAppBar() {

  const isSignIn = useAppSelector(selectIsSignIn)
  const {logOut} = useActions(authThunks)

  const logOutHandler = () =>{
    logOut({})
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/*<MenuIcon/>*/}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CARDS
            </Typography>
            {isSignIn ? <Button onClick={logOutHandler} variant={"contained"}
                                color={"secondary"}>
              Log Out
            </Button> : <Button  variant={"contained"}
                                color={"secondary"}>
              Sing In
            </Button>  }

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}