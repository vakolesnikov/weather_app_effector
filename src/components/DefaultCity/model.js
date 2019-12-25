import { createStore } from 'effector';
import * as events from '../../events';

export const defaultCity = createStore({ status: 'load' });

defaultCity.on(events.getCityForGeoLocation.done, (_, res) => res.result);
