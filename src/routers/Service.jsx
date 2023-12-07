import { useSelector } from 'react-redux';

export default function Service() {
  const state = useSelector((state) => state.serviceInfo)
  console.log(state);
  return (
    <div
      className='p-10 border-2 rounded-3xl border-gray-700'
    >
      <div>Name: {state.name}</div>
      <div>Price: {state.price}</div>
      <div>Desvription: {state.content}</div>
    </div>
  );
}
