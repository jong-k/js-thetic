import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "./TextField.tsx";

export interface FormValues {
  email: string;
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export default function PasswordChangeForm() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>회원정보 수정</h2>
      <TextField label="계정명" name="email" register={register} />
      <TextField label="현재 비밀번호" name="password" register={register} />
      <TextField label="새 비밀번호" name="newPassword" register={register} />
      <TextField
        label="새 비밀번호 확인"
        name="newPasswordConfirm"
        register={register}
      />
      <button type="submit">수정</button>
    </form>
  );
}
