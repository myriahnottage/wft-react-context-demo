import React, { useState, useEffect } from "react";

// Third-party
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

// Components
import LoginPage from "./login";
import RegisterPage from "./register";
import ContactsPage from "./contacts";
import ContactDetailsPage from "./contact-details";
import ContactCreatePage from "./contact-create";
import NotFoundPage from "../components/errors/NotFoundPage";
import PrivateRoute from "../components/auth/PrivateRoute";

// Utilities
import { getContacts } from "../utils/contacts";

// Context
import AuthContext from "../context/AuthContext";

const mockContacts = [
  {
    id: 1,
    firstName: "Culley",
    lastName: "Snelman",
    profilePic: "https://i.pravatar.cc/300?u=1",
    phoneNumber: "351-346-6140",
    email: "csnelman0@blog.com",
    address: "09 Eggendart Parkway",
  },
  {
    id: 2,
    firstName: "Tammara",
    lastName: "Allcorn",
    profilePic: "https://i.pravatar.cc/300?u=2",
    phoneNumber: "676-783-9239",
    email: "tallcorn1@senate.gov",
    address: "78145 Brentwood Court",
  },
  {
    id: 3,
    firstName: "Cassandry",
    lastName: "Roze",
    profilePic: "https://i.pravatar.cc/300?u=3",
    phoneNumber: "223-879-6692",
    email: "croze2@w3.org",
    address: "2079 Morrow Parkway",
  },
  {
    id: 4,
    firstName: "Koressa",
    lastName: "Galey",
    profilePic: "https://i.pravatar.cc/300?u=4",
    phoneNumber: "761-858-5580",
    email: "kgaley3@economist.com",
    address: "5 Hanover Alley",
  },
];

function HomePage() {
  return (
    <div>
      <h1>Welcome Home</h1>
    </div>
  );
}

function BackButton() {
  const history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return <button onClick={handleClick}>&laquo; Back</button>;
}

function App() {
  const [contacts, setContacts] = useState([]);
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const storedContacts = getContacts();

    setContacts(storedContacts.length ? storedContacts : mockContacts);
  }, []);

  function login(username, password) {
    console.log(username, password);

    // if good
    setAuthenticated(true);

    //else
    // setAuthenticated(null);
  }

  function logout() {
    setAuthenticated(null);
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>

          <BackButton />
        </nav>

        <AuthContext.Provider value={{ login, authenticated }}>
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route path="/login" component={LoginPage} />

            <Route path="/register">
              <RegisterPage />
            </Route>
            <PrivateRoute
              path="/contacts/:id"
              component={() => <ContactDetailsPage contacts={contacts} />}
            />

            <PrivateRoute path="/contacts/new" component={ContactCreatePage} />
            <PrivateRoute
              path="/contacts"
              component={() => <ContactsPage contacts={contacts} />}
            />
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </AuthContext.Provider>
      </div>
    </Router>
  );
}

export default App;
