import { Experience } from "@/types/Experience";

export default function formatLink(exp: Experience) {
  return `${exp.title}-${exp.role}`.replace(" ", "").toLowerCase();
}
