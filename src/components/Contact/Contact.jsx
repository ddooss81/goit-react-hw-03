import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from './Contact.module.css';

export default function Contact({ contact, onDelete }) {
  const { id, name, number } = contact;

  return (
    <li className={css.listItem}>
      <div className={css.contactInfo}>
        <p className={css.contactItem}><FaUser /> {name}</p>
        <p className={css.contactItem}><FaPhoneAlt /> {number}</p>
       </div>
       <button className={css.deleteBtn} type="button" onClick={() => onDelete(id)}>Delete</button>
    </li>
  )
}
