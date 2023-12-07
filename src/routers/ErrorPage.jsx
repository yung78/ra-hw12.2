import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { servicesRequest, serviceRequest } from '../app/serviceSlice';

export default function ErrorPage() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const handleError = () => {
    debugger
    state.services ? dispatch(servicesRequest()) : dispatch(serviceRequest(state.params));
  }

  return (
    <>
      {state.error ? (
        <div className='w-full h-[60vh] flex flex-col justify-center items-center'>
          <div
            className='w-[40vw] h-20 bg-red-400 flex justify-around items-center'
          >
            <div>
              <h1>Oops, something go wrong...</h1>
              <p>
                <i>{state.error}</i>
              </p>
            </div>
            <button
              className='h-10 w-20 bg-gray-800 text-white'
              onClick={handleError}
            >
              Retry
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
