import "./App.css";
import Container from "@mui/material/Container";
import { CssBaseline } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { css } from "@emotion/react";
import { useEffect } from "react";
import { fetchAccounts } from "./reducers/appSlice.ts";
import { useAppDispatch } from "./reducers/hooks.ts";

const Header = () => {
  return (
    <Paper
      elevation={3}
      component="header"
      sx={{
        backgroundColor: "lightblue",
        minHeight: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Typography
          variant="h5"
          component="h1"
          sx={{ fontFamily: "Ubuntu" }}
          color="gray"
        >
          Status Dashboard
        </Typography>
      </Container>
    </Paper>
  );
};

const Card = () => {
  return (
    <Box
      sx={css`
        width: 250px;
        border: 2px solid black;
        border-radius: 10px;
        padding-left: 20px;
        box-shadow: 5px 5px 1px black;
        position: relative;

        &:before {
          background: none;
          border-left: 8px solid green;
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: -1;
          border-radius: 5px;
        }
      `}
    >
      <Typography>ACCOUNTS</Typography>
      <Typography>accounts-3b9592810b01</Typography>
      <Typography>17:41:11</Typography>
    </Box>
  );
};

const Content = () => {
  return (
    <Box>
      <Container>
        <Card />
      </Container>
    </Box>
  );
};

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchAccounts());
      console.log("run");
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Content />
    </>
  );
}

export default App;
