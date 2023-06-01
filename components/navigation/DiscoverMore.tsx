import { ChevronBottom } from "../Icons/Chevrons";

export default function DiscoverMore({
  id,
  color,
}: {
  id?: string;
  color?: string;
}) {
  return (
    <span className="w-full flex flex-col justify-center items-center absolute left-0 bottom-2 ">
      <a href={`#${id}`}>
        <ChevronBottom size={35} color={color || "white"} />
      </a>
    </span>
  );
}
