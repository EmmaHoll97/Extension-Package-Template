import { Messages } from "./messaging/messages";
import { actions as backgroundActions } from "./src/background/actions";
import { actions as foregroundActions } from "./src/content/actions";
import { demoFeature as feature } from "./src/content/feature";
import store from './src/store';
import featureConfigData from "./feature.config.json";

const messages = new Messages();
const featureData = () => featureConfigData;

export {
    messages,
    backgroundActions,
    foregroundActions,
    feature,
    store,
    featureData
}