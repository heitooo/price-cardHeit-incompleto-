import { Check, Info } from "lucide-react";
import "./style.css";

export function Item({ functionality }) {
  return (
    <li>
      <div>
        <Check size={20} color="#04D361" />
        {functionality}
      </div>
      <Info size={20} color="#647488" />
    </li>
  );
}
  ''