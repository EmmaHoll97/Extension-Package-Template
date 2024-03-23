import { Messages } from "./messaging/messages";
import { actions as backgroundActions } from "./src/background/actions";
import { actions as foregroundActions } from "./src/content/actions";
import { demoFeature as feature } from "./src/content/feature";
import store from './src/store';
import featureData from "./feature.config.json";

const messages = new Messages();
const featureData = () => featureData;

export {
    messages,
    backgroundActions,
    foregroundActions,
    feature,
    store,
    featureData
}