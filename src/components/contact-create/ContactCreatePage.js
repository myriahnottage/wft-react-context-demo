import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import ContactCreateForm from "./ContactCreateForm";

const ContactCreatePage = () => {

    const { authenticated } = useContext(AuthContext); // Consume the context

    if (!authenticated) {
        return null;
    }

    return (
        <div>
            <ContactCreateForm />
        </div>
    )
}

export default ContactCreatePage;