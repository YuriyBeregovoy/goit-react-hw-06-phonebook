import { ContactListItem } from "components/ContactListItem/ContactListItem"
import { List } from "./ContactList.styled"

export const ContactList = ({contacts, onContactDelete}) => {
  return <List>
    {contacts.map(contact => (
      <ContactListItem  key={contact.id} contact={contact} onContactDelete={onContactDelete} />
          ))}
        </List>
}