import { Outlet, Link } from 'react-router-dom';
import { TailSpin } from  'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux';
import { serviceRequest, servicesRequest } from '../app/serviceSlice';
import { useEffect } from 'react';
import ErrorPage from './ErrorPage';

export default function Root() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(servicesRequest());
  }, [dispatch]);

  const handleClick = (id) => {
    dispatch(serviceRequest(id));
  }

  return (
    <>
      <div className='w-screen flex justify-center'>
        <div
          className='mt-20 flex'
        > 
          {state.services.map((el, index) => (
          <div
            key={index}
            className='h-8 w-[220px] mb-6 ml-[2vw] border-2 text-center text-lg rounded-full border-gray-700 hover:border-green-600'
          >
            <Link
              onClick={() => handleClick(el.id)}
              to={`${el.id}/details`}
              className='w-full h-full inline-block'
            >
              {el.name}
            </Link>
          </div>))}
        </div>
      </div>
      <div
        className='flex justify-center mt-14'
      >
        {state.loading ? (
        <TailSpin
          height="80"
          width="80"
          color="#ff1f3d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        ) : (
          state.error ? (
            <ErrorPage />
          ) : (
            <Outlet />
        ))}
      </div>
    </>
  );
}