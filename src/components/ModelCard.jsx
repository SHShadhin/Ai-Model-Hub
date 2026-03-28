import React, { useState } from 'react';

const ModelCard = ({model}) => {

  const [isSubscribed, setIsSubscribed] = useState(false);
  
  return (
    <div className="shadow-lg rounded-lg border-gray-300 p-6">
      <div className="flex justify-center items-center bg-gray-200 h-56 rounded-lg">
        <img className="h-40 w-40 object-contain" src={model.image} alt="" />
      </div>
      <div className="space-y-4 mt-4">
        <h2 className="text-2xl font-bold">{model.title}</h2>
        <p className="text-lg">
          The world's most popular AI assistant by OpenAI. Versatile for
          writing, coding, reasoning, and creative tasks.
        </p>
        <h2 className="text-2xl font-bold">${model.price}/month</h2>
        <button
          onClick={() => setIsSubscribed(true)}
          className="btn bg-red-500 rounded-lg w-full text-white text-2xl"
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe Now'}
        </button>
      </div>
    </div>
  );
};

export default ModelCard;