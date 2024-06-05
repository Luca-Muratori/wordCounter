import { FB_MAX_CHAR, INSTAGRAM_MAX_CHAR } from "../constants";
import Stat from "./Stat";

export default function Stats({textLength, words}) {
  return (
    <section className="stats">
      <Stat number={words} statName={"Words"} />
      <Stat number={textLength} statName={"Characters"} />
      <Stat number={INSTAGRAM_MAX_CHAR - textLength} statName={"Instagram"} />
      <Stat number={FB_MAX_CHAR - textLength} statName={"Facebook"} />
    </section>
  );
}
