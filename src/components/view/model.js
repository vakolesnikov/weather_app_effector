import { createStore } from 'effector';
import { initApp, startUpdate } from 'src/common-events/events';

export const showUpdateLoader = createStore(false)
    .on(initApp.done, () => false)
    .on(startUpdate, () => true);
