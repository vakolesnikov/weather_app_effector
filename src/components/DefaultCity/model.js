import { createStore } from 'effector';
import * as events from 'src/common-events/events';

export const defaultCity = createStore({ status: 'load' });

defaultCity.on(events.getCityForGeoLocation.done, (_, res) => res.result);
