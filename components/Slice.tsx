interface ISliceProps {
    active: boolean;
}

export default function Slice({active}: ISliceProps) {
    return <div className={`cursor-pointer  bg-secondary h-40 w-full flex justify-center slice ${active ? "active" : null}`}>here</div>
}