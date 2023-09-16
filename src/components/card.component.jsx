import React from 'react';

function Card({ name, compnayName, imageUrl, services, expertise }) {
    return (
      
      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg hover:shadow-2xl transition duration-300
      xl:max-w-xl rounded-xl overflow-hidden shadow-lg bg-white">

        <img className="w-full h-72 object-cover" src={imageUrl} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="font-semibold text-gray-900 text-base uppercase">{compnayName}</p>
          <p className="text-gray-700 text-base">{`I am expert in ${expertise[0]}`}</p>
        </div>
        <div className="px-6 pt-1 pb-4">
        {
          services.map((service, index) => {
            return <span key={index+21} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1 my-1">{service}</span>
          })
        }
        </div>
      </div>
    );
  }
  
  export default Card;


  // <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Tag1</span>
  // <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Tag2</span>

        // <div className='h-1/5 w-full bg-transparent hover:bg-gradient-to-b from-transparent to-gray-50 absolute bottom-0 left-0' >
      // </div>