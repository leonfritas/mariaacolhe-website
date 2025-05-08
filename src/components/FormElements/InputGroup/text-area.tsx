"use client";

interface TextAreaGroupProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export function TextAreaGroup({
  label,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  className = ""
}: TextAreaGroupProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-1 font-medium">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="rounded border border-gray-300 p-2 min-h-[100px]"
      />
    </div>
  );
}