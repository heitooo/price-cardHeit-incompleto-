import { Button } from "../button";
import { Item } from "../item";
import { Label } from "../label";
import "./style.css";

export function Card({
  hasLabel = false,
  description,
  title,
  price,
  darkMode = false,
  features,
}) {
  return (
    <>
      {hasLabel && <Label />}
      <div className={`container ${darkMode ? "darkContainer" : ""}`}>
        <p id="description">{description}</p>
        <div className="details">
          <h1>{title}</h1>
          <p>
            R$
            <strong>
              {price}
              <span>/mês</span>
            </strong>
          </p>
        </div>

        <Button title="Assinar agora" />

        <hr />

        <ul>
          {features &&
            features.map((item, index) => (
              <Item key={index} functionality={item} />
            ))}
        </ul>
      </div>
    </>
  );
}
