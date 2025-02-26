import { Label } from "../label";

export function Card({ description, price }) {
  return (
    <div>
      <Label />
      <p>{description}</p>
      <span>
        R$ <strong>{price}/mês</strong>
      </span>
    </div>
  );
}
