import "./App.css";
// import Container from "@mui/material/Container";
import { AppBar, Container, Grid2, Grow, Typography } from "@mui/material";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

function App() {
  return (
    <Container className="App" maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
        <img src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid2
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid2 item xs={12} sm={7}>
              <Posts />
            </Grid2>
            <Grid2 item xs={12} sm={4}>
              <Form />
            </Grid2>
          </Grid2>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
