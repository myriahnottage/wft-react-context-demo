import { Link } from "react-router-dom";

const ContactCard = ({
  firstName = "",
  lastName = "",
  phoneNumber = "",
  profilePic = "",
  id,
}) => {
  return (
    <Link to={`/contacts/${id}`}>
      <div>
        <div>
          <img src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} />
        </div>
        <div>
          <p>
            {firstName} {lastName}
          </p>
          <p>{phoneNumber}</p>
        </div>
      </div>
      <div>
        <button>X</button>
      </div>
    </Link>
  );
};

export default ContactCard;
