# A React application for a phonebook, where users can add and remove contacts and filter them by name.

The app consists of several components such as Container, ContactForm, Filter, and ContactList. It uses React hooks, such as useState and useEffect, to manage state and side effects.

The state of the app is managed by two pieces of state, "contacts" and "filter", which are updated with the "setContacts" and "setFilter" functions respectively.

The "addContact" function adds a new contact to the list of contacts if the name and number are not already in the list and are not empty.

The "removeContact" function removes a contact from the list based on the contact's ID.

The "changeFilter" function updates the filter state based on user input in the Filter component.

The "getVisibleContacts" function filters the list of contacts based on the current filter state.

Finally, the app uses two useEffect hooks to load and save the list of contacts from and to the browser's local storage.
