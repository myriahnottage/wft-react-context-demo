import { useParams } from "react-router";

import ContactDetailsCard from "./ContactDetailsCard";

const ContactDetailsPage = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((item) => item.id === +id);

  return (
    <div>
      <ContactDetailsCard contact={contact} />
    </div>
  );
};

export default ContactDetailsPage;
