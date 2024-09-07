import Card from './Card.js'
import '../styles/places/places.css'
import '../styles/page/__section/page__section.css'

function CardList() {
    return (
        <section className="places page__section">
        <ul className="places__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    );
}

export default CardList;