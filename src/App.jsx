import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseLine";
import ToDoList from "./ToDoList.jsx";
function App() {
  return (
    <Container maxWidth="x1">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My Todos</Typography>
        </Toolbar>
      </AppBar>
      <ToDoList />
    </Container>
  );
}

export default App;
