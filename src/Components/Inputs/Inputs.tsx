import { useState } from "react";

interface InputFieldProps {
  label?: string;
  name: string;
  type?: "email" | "password";
  value: string;
  className: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "email",
  value,
  placeholder,
  onChange,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-medium">{label}</label>}

      <div className="relative">
        <input
          type={type === "password" && showPassword ? "text" : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full p-2 border rounded ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2 text-gray-600 text-sm"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default InputField;
