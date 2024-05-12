import { UseFormRegister } from "react-hook-form";
import { FormValues } from "./PasswordChangeForm.tsx";

interface TextFieldProps {
  label: string;
  name: keyof FormValues;
  register: UseFormRegister<FormValues>;
}

export default function TextField({ label, name, register }: TextFieldProps) {
  return (
    <div>
      <label>{label}</label>
      <input type="text" {...register(name, { required: true })} />
    </div>
  );
}
