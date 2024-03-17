# FeatureX - Chrome Extension Module Template

This repository serves as a template for building modular Chrome extension features. It focuses on a clean separation of concerns between background tasks, content scripts, and messaging, all managed with Redux Toolkit for state management. The template is designed to make Chrome extension features easy to develop, maintain, and integrate.

## Features

- **Structured Design**: Clearly defined folder structure for background, content scripts, and messaging.
- **State Management**: Redux Toolkit integration for efficient state handling in the extension.
- **Standardized Messaging**: Predefined messages for consistent communication across the extension.
- **Exported Products**: Well-defined exports for easy integration into your Chrome extension.

## Exported Products

The module exports four main products designed for easy consumption:

- `backgroundActions`: Functions designed to be executed in the background script context.
- `contentFunctions`: Functions intended for use in content scripts, interacting with web page content.
- `messages`: Predefined message types for standardized communication between different parts of the extension.
- `store`: Redux store slices for managing state related to the module.

## Folder Structure
The repository is structured as follows:
```markdown
src/
|-- background/ # Background script logic
|-- content/ # Content script logic
|-- messaging/ # Messaging and communication
|-- store/ # Redux store slices and state management
```

## Integration Examples

### Background Script Integration

To use `backgroundActions` in your background script:

```javascript
import { backgroundActions as featureXActions } from 'featurex-module';

export const onBackgroundMessage = ({ type, payload = {} }, { tab, url }, sendResponse) => {
    (async () => {
        const actions = {
            [m.DOCUMENT_LOADED]: async () => onDocumentLoaded(payload, tab),
            ...featureXActions({ type, payload = {} }, { tab, url })
        }
        if (type in actions) {
            const response = await actions[type]();
            return sendResponse(response);
        }
    })();
    return true;
}
chrome.runtime.onMessage.addListener(onBackgroundMessage);
```

## Content Script Integration (listeners)
### For integrating content listeners into your content scripts:

```javascript
import { foreGroundActions as featureXActions } from 'featurex-module';

export const onForegroundMessage = ({ type, payload = {} }, { tab, url }, sendResponse) => {
    (async () => {
        const actions = {
            [m.DOCUMENT_LOADED]: async () => onDocumentLoaded(payload, tab),
             ...featureXActions({ type, payload = {} }, { tab, url })
        }
        if (type in actions) {
            const response = await actions[type]();
            return sendResponse(response);
        }
    })();
    return true;
}

chrome.runtime.onMessage.addListener(onForegroundMessage);
```

## Content Script Integration (functions)
### For integrating content functions into your content scripts:
Import the functions provided and use them as you would any other package.

```javascript
import { func } from 'featurex-module';

export const initialize = async () => {
    func() 
};
```

## Store Integration
### Integrating a Redux store slice from the module:
Redux actions can be imported from the package and dispatched as needed 

```javascript
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch } from 'react-redux';
import { store as featureXStore } from 'featurex-module';

const store = configureStore({
    reducer: {
        ...featureXStore.reducers
    }
});
```
## Contributing
Your contributions are invaluable to improving the quality and usability of this template. To complement your efforts, I've prepared an [Extension Template](https://github.com/EmmaHoll97/React-Chrome-Extension-Template) repository that you might find useful.