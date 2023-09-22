import { ContactListItem } from "components/ContactListItem/ContactListItem"
import { List } from "./ContactList.styled"
import { useSelector } from "react-redux";


export const ContactList = ({ onContactDelete }) => {
const filter = useSelector((state) => state.filter.filter);
  const contacts = useSelector((state) => state.contacts);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return <List>
    {filteredContacts.map(contact => (
      <ContactListItem  key={contact.id} contact={contact} onContactDelete={onContactDelete} />
          ))}
        </List>
}