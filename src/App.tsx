import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
// @ts-ignore
import Logo from "./assets/cloudbank.webp"
import CssBaseline from "@mui/material/CssBaseline"
import Stack from "@mui/material/Stack"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import CloudBankMainLogo from "./components/icons/CloudbankMainLogo"
import HomeIcon from "./components/icons/HomeIcon"
import SendIcon from "./components/icons/SendIcon"
import InvestmentIcon from "./components/icons/InvestMentIcon"
import LoanIcon from "./components/icons/LoanIcon"
import CardsIcon from "./components/icons/CardsIcon"
import TransactionIcon from "./components/icons/TransactionIcon"
import MarketPlaceIcon from "./components/icons/MarketPlaceIcon"
import SettingsIcon from "./components/icons/SettingsIcon"
import LogoutIcon from "./components/icons/LogoutIcon"
import MenuIcon from "./components/icons/MenuIcon"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import OneMonthIllustration from "./components/illustrations/OneMonthIllustration"
import WorkingIllustration from "./components/illustrations/WorkingIllustration"
import OperationIllustration from "./components/illustrations/OperationIllustration"
import TntIllustration from "./components/illustrations/TnTIllustration"
import InfastructureIllustration from "./components/illustrations/InfastructureIllustration"
import PersonalIllustartion from "./components/illustrations/PersonalIllustration"
import PawnIllustration from "./components/illustrations/PawnIllustration"
import FXIllustartion from "./components/illustrations/FXIllustration"
import RoundLogo from "./components/icons/RoundLogo"

const drawerWidth = 242

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
}

const navItems = [
  {
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    name: "Send Money",
    icon: <SendIcon />,
  },
  {
    name: "Investment",
    icon: <InvestmentIcon />,
  },
  {
    name: "Loan",
    icon: <LoanIcon />,
  },
  {
    name: "Cards",
    icon: <CardsIcon />,
  },
  {
    name: "Transactions",
    icon: <TransactionIcon />,
  },
  {
    name: "Marketplace",
    icon: <MarketPlaceIcon />,
  },
  {
    name: "Settings",
    icon: <SettingsIcon />,
  },
]

const contents = [
  {
    title: "One Month Loan",
    description: "Access funds for personal upkeep for 30 days only",
    illustration: <OneMonthIllustration />,
  },
  {
    title: "Working Capital Overdraft",
    description: "Access continuous funds to grow your business stocks and inventory",
    illustration: <WorkingIllustration />,
  },
  {
    title: "Operation Overdraft",
    description: "Financing for your business operations",
    illustration: <OperationIllustration />,
  },
  {
    title: "T and T Spread Loan",
    description: "Purchase phones, generators and vehicles on a reasonable payment plan from T and T Deals Market",
    illustration: <TntIllustration />,
  },
  {
    title: "Infrastrusture Loan",
    description: "Facility for your business to purchase vehicles, assets, and building upgrades.",
    illustration: <InfastructureIllustration />,
  },
  {
    title: "Personal Loan",
    description: "Instant funds for your personal expenses.",
    illustration: <PersonalIllustartion />,
  },
  {
    title: "Pawn Loan",
    description: "Get cash value on temporary sale of your items within 72hours.",
    illustration: <PawnIllustration />,
  },
  {
    title: "FX line",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    illustration: <FXIllustartion />,
  },
]

export default function ResponsiveDrawer(props: Props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      button: {
        textTransform: "none",
      },
    },
  })

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Stack direction="column" justifyContent="space-between" spacing={2} sx={{ background: "#FFFFFF", flexGrow: 1 }}>
      <List>
        <ListItem>
          <img src={Logo} alt="logo" />
        </ListItem>
      </List>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} sx={{ color: "#489494" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<LogoutIcon />}</ListItemIcon>
            <ListItemText primary={"Log out"} sx={{ color: "#DB261B" }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh", background: "#E5E5E5" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
            display: { md: "none" },
            background: "#E5E5E5",
          }}
        >
          <Toolbar sx={{ display: { md: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Stack sx={{ flexGrow: 1 }} justifyContent={"center"} alignItems={"center"}>
              <RoundLogo />
            </Stack>
          </Toolbar>
        </AppBar>
        <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", md: "block" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            height: "100%",
            flexGrow: 1,
            p: 3,
            width: { md: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar sx={{ display: { md: "none" } }} />
          <Typography gutterBottom sx={{ fontSize: 24, fontWeight: 600, color: "#333333" }}>
            Loans
          </Typography>
          <Typography gutterBottom sx={{ fontSize: 16, fontWeight: 400 }}>
            <span style={{ color: "#008080" }}>Monday</span>, 21st February, 2021
          </Typography>
          <Box sx={{ flexGrow: 1, height: "100%" }}>
            <Grid container spacing={2}>
              {contents.map((item) => (
                <Grid key={item.title} item xs={12} sm={6} lg={3}>
                  <Paper elevation={0} sx={{ width: "100%", p: 2, borderRadius: "10px" }}>
                    <Stack
                      sx={{ height: "400px" }}
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                    >
                      {item.illustration}
                      <Typography
                        textAlign={"center"}
                        gutterBottom
                        sx={{ fontSize: 18, fontWeight: 500, color: "#008080" }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        textAlign={"center"}
                        gutterBottom
                        sx={{ fontSize: 16, fontWeight: 400, color: "#333333" }}
                      >
                        {item.description}
                      </Typography>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
