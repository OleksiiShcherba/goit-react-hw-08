import propsTypes from "prop-types";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contacts/operations";

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactElement}>
      <ul className={css.dataList}>
        <li className={css.name}>{name}</li>
        <li className={css.phone}>{phone}</li>
      </ul>
      <button
        className={css.deleteAction}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propsTypes = {
  id: propsTypes.string.isRequired,
  name: propsTypes.string.isRequired,
  phone: propsTypes.string.isRequired,
};

export default Contact;
