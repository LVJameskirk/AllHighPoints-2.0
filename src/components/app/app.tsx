import { highpoints } from "../../constants/highpoints.js";

export const App = () => {
  return (
    <div>
      <h1>Все высшие точки</h1>
      <ul>
        <strong>Высшие точки ЦФО:</strong>
        {highpoints.map((highpont) => (
          <li>{highpont.region}</li>
        ))}
      </ul>
    </div>
  );
};
