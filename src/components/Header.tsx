import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { css } from "@emotion/react";

export const Header = () => {
  return (
    <Paper
      elevation={3}
      component="header"
      sx={css`
        background-color: lightblue;
        min-height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: hsla(285, 42%, 33%, 1);
        background: linear-gradient(
          90deg,
          hsla(285, 42%, 33%, 1) 0%,
          hsla(333, 54%, 51%, 1) 100%
        );
        background: -moz-linear-gradient(
          90deg,
          hsla(285, 42%, 33%, 1) 0%,
          hsla(333, 54%, 51%, 1) 100%
        );
        background: -webkit-linear-gradient(
          90deg,
          hsla(285, 42%, 33%, 1) 0%,
          hsla(333, 54%, 51%, 1) 100%
        );
        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#663177", endColorstr="#C63F7B", GradientType=1 );
      `}
    >
      <Container>
        <Typography
          variant="h5"
          component="h1"
          sx={{ fontFamily: "Ubuntu" }}
          color="white"
        >
          Status Dashboard
        </Typography>
      </Container>
    </Paper>
  );
};
