import { generateUser } from "../data/contacts";
export default function user(state = generateUser(), action) {
  return state;
}