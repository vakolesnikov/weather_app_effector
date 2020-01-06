import { createStore } from 'effector';
import { initApp, startUpdate } from 'src/common-events/events';
import * as events from '../../common-events/events';

export const showUpdateLoader = createStore(false)
    .on(initApp.done, () => false)
    .on(startUpdate, () => true);

export const defaultCity = createStore({ status: 'load' }).on(
    events.getCityForGeoLocation.done,
    (_, res) => res.result
);
