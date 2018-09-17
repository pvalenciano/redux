import { generateUser } from "../data/data";
export default function user(state = generateUser(), action) {
  return state;
}