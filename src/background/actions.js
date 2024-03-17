import { onDocumentLoaded } from "./listeners"
import { m } from "../messaging/send"

export const actions = ({ type, payload = {} }, { tab, url }, sendResponse) => ({
    [m.DOCUMENT_LOADED]: async () => onDocumentLoaded(payload, tab),
})