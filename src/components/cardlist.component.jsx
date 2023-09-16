import React from 'react';
import Card from './card.component';

function CardList({ cardData }) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-1.5 mb-3 mx-3">
        {cardData.map((card, index) => (
          <Card
            key={card.id} // Make sure to use a unique key for each card
            compnayName={card.compnayName}
            services={card.services}
            imageUrl={card.imgURL}
            name = {card.name}
            expertise={card.expertise}
          />
        ))}
      </div>
    );
  }
  
  export default CardList;