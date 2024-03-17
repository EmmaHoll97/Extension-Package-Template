## Features

- **Standardized Messaging**: This system establishes a uniform messaging flow to minimize human error during development. It routes all communication between different components of the extension (like content scripts, popups, and the background script) through the background script, providing a centralized and reliable message handling mechanism.
- **Secure Communication**: The design mitigates cross-site scripting risks by standardizing how messages are exchanged between frames, making it particularly suitable for extensions involving complex iframe embedding.

## Structure

The messaging system is encapsulated within the `messaging` folder and includes these essential files:

- `index.js`: Acts as the gateway for message handling by exporting functions from `send.js` and `messages.js`.
- `messages.js`: Introduces a `Messages` class that lists the types of messages the extension uses.
- `send.js`: Features the `Send` class, which extends `Messages`. It provides functions for message transmission and facilitates communication with tabs.

Additionally, key functions within `send.js` include:

- `send()`: A standardized method for dispatching messages to the background script, streamlining the communication process.
- `tabMessage()`: A utility for sending messages to any tab or a specific frame, enhancing message targeting capabilities.
- `getTabIds()`: This function retrieves the IDs of all frames within a specific tab. It supports `tabMessage` by supplying necessary identifiers for targeted messaging.
