import { usePizzaOfTheDay } from "./hook";
import { getIntl } from "./utils";

export default function PizzaOfTheDay() {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if (!pizzaOfTheDay) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the Day</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{pizzaOfTheDay.name}</h3>
          <p>{pizzaOfTheDay.description}</p>
          <p className="pizza-of-the-day-price">
            From: <span>{getIntl().format(pizzaOfTheDay.sizes.S)}</span>
          </p>
        </div>
        <img
          className="pizza-of-the-day-image"
          src={pizzaOfTheDay.image}
          alt={pizzaOfTheDay.name}
        />
      </div>
    </div>
  );
}
