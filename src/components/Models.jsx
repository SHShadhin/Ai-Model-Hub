import React, { use } from 'react';
import ModelCard from './ModelCard';

const Models = ({ modelsPromise }) => {
  const models = use(modelsPromise)
  // console.log(models)
  return (
    <div>
      <div className="text-center my-5">
        <h2 className="text-4xl font-bold">Choose Your AI Model</h2>
        <p className="text-xl">
          One subscription gives you access to all frontier AI models
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 my-20 w-7xl mx-auto">
        {models.map(model => (
         <ModelCard model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default Models;