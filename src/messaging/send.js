import { Messages } from "./messages";

class Send extends Messages {
    constructor() {
        super();
    }
    async send(type, payload = {}) {
        const data = await chrome.runtime.sendMessage({
            type, payload
        });
        return data;
    }
    getTabIds(active = true, currentWindow = true) {
        return new Promise(resolve => {
            chrome.tabs.query({ active, currentWindow }, (tabs) => {
                const ids = tabs.map(tab => tab.id);
                resolve(ids)
            });
        })
    }
    tabMessage(tabId, type, payload = {}, onlyParent = false) {
        return new Promise((resolve, reject) => {
            // Define options for sendMessage
            let options = onlyParent ? { frameId: 0 } : undefined;
            // Send message to the tab
            chrome.tabs.sendMessage(tabId, { type, payload }, options, response => {
                // Check for an error
                if (chrome.runtime.lastError) {
                    // Log the error and reject the promise
                    resolve(null);
                } else {
                    // Resolve the promise with the response
                    resolve(response);
                }
            });
        })
    }
}
export const m = new Send();