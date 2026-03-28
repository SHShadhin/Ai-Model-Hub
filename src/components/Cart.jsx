import React from 'react';

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
  const handlePayment = () => {
    setCarts([]);
  }
  const handleDelete = (item) => {
    const filteredCart = carts.filter(c => c.id !== item.id)
    setCarts(filteredCart)
  }
  return (
    <div className="py-10 my-10 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold">Your Cart</h2>
      {carts.length === 0 ? (
        <p className='text-4xl font-bold text-center bg-gray-200 rounded-2xl p-20 max-w-3xl mx-auto'>Cart is Empty</p>
      ) : (
        <>
          <div className="">
            {carts.map(item => (
              <div
                className="flex justify-between bg-gray-200 items-center p-5 my-5 border-2 rounded-2xl"
                key={item.id}
              >
                <div className="flex gap-4 items-center">
                  <img
                    className="h-20 w-20 object-contain"
                    src={item.image}
                    alt=""
                  />
                  <div className='w-150'>
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>

                <div className='flex gap-4 items-center '>
                  <h2 className="text-3xl font-bold">
                    ${item.price}/per month
                  </h2>

                  <button onClick={()=> handleDelete(item)} className='btn btn-error rounded-full'>X</button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between bg-black p-10 text-white rounded-2xl">
            <div className="text-3xl font-bold">Total</div>
            <div className="text-3xl font-bold">${totalPrice}</div>
          </div>

          <button
            className="bg-red-500 btn py-6 rounded-lg w-full mt-5 text-2xl text-white font-bold"
            onClick={handlePayment}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;