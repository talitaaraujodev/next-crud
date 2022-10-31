interface FormGroupProps {
  text: string;
  type?: "text" | "number";
  value: any;
  onlyReading?: boolean;
  className: string;
  onChange?: (value: any) => void;
}
export default function FormGroup(props: FormGroupProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="mb-2">
        {props.text}
      </label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        readOnly={props.onlyReading}
        className={`border border-purple-50 rounded-lg focus:outline-none bg-gray-100 px-4 py-2  ${
          props.onlyReading ? "" : "focus:bg-white"
        } `}
        onChange={(e) => props.onChange?.(e.target.value)}
      />
    </div>
  );
}
