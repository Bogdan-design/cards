import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";

export default function ButtonAppBar() {
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
            <Button variant={"contained"}
                    color={"secondary"}>
              Sing In
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}