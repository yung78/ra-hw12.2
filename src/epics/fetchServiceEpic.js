import { combineEpics, ofType } from 'redux-observable';
import {serviceRequest, requestFailur, serviceSuccess, servicesSuccess, servicesRequest} from '../app/serviceSlice';
import { switchMap, map, catchError, of} from 'rxjs';
import { ajax } from 'rxjs/ajax';

const fetchServiceEpic = (action$) => action$
  .pipe(
    ofType(serviceRequest.type),
    map((action) => action.payload),
    switchMap((id) => ajax.getJSON(`${process.env.REACT_APP_URL}/${id}`)),
    map((res) => serviceSuccess(res)),
    catchError((err) => of(requestFailur(err.message)))
);

const fetchServicesEpic = (action$) => action$
  .pipe(
    ofType(servicesRequest.type),
    switchMap(() => ajax.getJSON(`${process.env.REACT_APP_URL}`)),
    map((res) => servicesSuccess(res)),
    catchError((err) => of(requestFailur(err.message)))
);

const epic = combineEpics(fetchServiceEpic, fetchServicesEpic);

export default epic;
