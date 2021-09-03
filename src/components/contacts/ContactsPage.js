import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import ContactsList from "./ContactsList";

const ContactsPage = ({ contacts=[] }) => {


    const { authenticated } = useContext(AuthContext);

    if (!authenticated) {
        return null;
    }

    return <ContactsList contacts={contacts} />
}

export default ContactsPage;