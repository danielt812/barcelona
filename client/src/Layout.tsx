import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Brightness4, Brightness7 } from "@mui/icons-material";

type Mode = "light" | "dark";

interface LayoutProps {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
}

export default function Layout({ mode, setMode }: LayoutProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: "Explore", path: "/explore" },
    { label: "Food", path: "/food" },
    { label: "Trips", path: "/trips" },
  ];

  return (
    <>
      <AppBar
        position="static"
        color="primary"
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{ justifyContent: "space-between" }}
          >
            <Typography
              variant="h6"
              noWrap
            >
              Barcelona, Spain
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
            >
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  color="inherit"
                  sx={{
                    borderBottom: currentPath === item.path ? "2px solid white" : "none",
                    borderRadius: 0,
                  }}
                >
                  {item.label}
                </Button>
              ))}

              {/* Theme Toggle Button */}
              <IconButton
                onClick={() => setMode((prev) => (prev === "light" ? "dark" : "light"))}
                color="inherit"
              >
                {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container
        component="main"
        sx={{ py: 4 }}
      >
        <Outlet />
      </Container>
    </>
  );
}
