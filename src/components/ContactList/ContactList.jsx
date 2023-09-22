import { ContactListItem } from "components/ContactListItem/ContactListItem"
import { List } from "./ContactList.styled"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contactsSlice";

export const ContactList = () => {
const dispatch = useDispatch();

const filter = useSelector((state) => state.filter.filter);
  const contacts = useSelector((state) => state.contacts);

 const handleContactDelete = (id) => {
    dispatch(deleteContacts(id));
  };
  

   const filteredContacts = Array.isArray(contacts) ? contacts.filter((contact) =>
    typeof contact.name === "string" && contact.name.toLowerCase().includes(filter.toLowerCase())
  ) : [];

  return <List>
    {filteredContacts.map(contact => (
      <ContactListItem  key={contact.id} contact={contact} onContactDelete={handleContactDelete} />
          ))}
        </List>
}