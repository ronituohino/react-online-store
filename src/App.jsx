import Home from "./components/home/Home"
import Content from "./components/content/Content"
import TopBar from "./components/top_bar/TopBar"
import Admin from "./components/admin/Admin"

import { Switch, Route, Redirect } from "react-router-dom"
import Account from "./components/account/Account"
import ItemPage from "./components/item_page/ItemPage"
import AccountRegister from "./components/account/AccountRegister"
import AccountLogin from "./components/account/AccountLogin"
import Checkout from "./components/checkout/Checkout"

import { Paper, Container } from "@mui/material"

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/:language/admin">
          <Admin />
        </Route>

        <Route path="/">
          <TopBar />

          <Container maxWidth="lg" sx={{ mt: 2 }}>
            <Switch>
              <Route path="/:language/product/:category/:id">
                <ItemPage />
              </Route>

              <Route path="/:language/product/:category">
                <Content />
              </Route>

              <Route path="/:language/account/register">
                <AccountRegister />
              </Route>

              <Route path="/:language/account/login">
                <AccountLogin />
              </Route>

              <Route path="/:language/account">
                <Account />
              </Route>

              <Route path="/:language/checkout/">
                <Checkout />
              </Route>

              <Route path="/:language/home">
                <Home />
              </Route>

              <Route path="/">
                <Redirect to="/en/home" />
              </Route>
            </Switch>
          </Container>
        </Route>
      </Switch>
    </>
  )
}

export default App
