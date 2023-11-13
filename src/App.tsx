import "./App.css";
import Container from "@mui/material/Container";
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./reducers/hooks.ts";
import { mapDispatchToProps } from "./reducers/api/actions.ts";
import { Header } from "./components/Header.tsx";
import { ApiCard } from "./components/ApiCard.tsx";
import { selectApiState } from "./reducers/api/selectors.ts";
import Grid from "@mui/material/Grid";
import { apiRefreshInterval } from "./const.ts";

const Content = () => {
  const apiData = useAppSelector(selectApiState);
  return (
    <Box sx={{ minHeight: "100vh", paddingTop: "40px", background: "#FAF6F0" }}>
      <Container>
        <Grid container rowSpacing={4}>
          {Object.entries(apiData).map(([apiName, info]) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                container
                justifyContent="center"
                alignItems="flex-start"
              >
                <ApiCard apiName={apiName} info={info} key={apiName} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

function App() {
  const dispatch = useAppDispatch();
  mapDispatchToProps(dispatch);

  useEffect(() => {
    const interval = setInterval(() => {
      mapDispatchToProps(dispatch);
    }, apiRefreshInterval * 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Content />
    </>
  );
}

export default App;
