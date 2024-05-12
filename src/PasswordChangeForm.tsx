import { useForm, SubmitHandler } from "react-hook-form";

export interface FormValues {
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export default function PasswordChangeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // getValues,
    setError,
  } = useForm<FormValues>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(errors);
    try {
      if (data.newPassword !== data.newPasswordConfirm) {
        setError(
          "newPasswordConfirm",
          { message: "비밀번호가 일치하지 않다네" },
          { shouldFocus: true },
        );
      }
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>회원정보 수정</h2>
      <div>
        <label>현재 비밀번호</label>
        <input
          type="text"
          {...register("password", {
            // minLength: {
            //   value: 8,
            //   message: "비밀번호는 8자 이상이어야 합니다",
            // },
            validate: {
              // notEmpty: (value) => !value && "비밀번호를 입력하세요",
            },
          })}
        />
        <p style={{ color: "red" }}>{errors?.password?.message}</p>
      </div>
      <div>
        <label>새 비밀번호</label>
        <input
          type="text"
          {...register("newPassword", {
            // minLength: {
            //   value: 8,
            //   message: "비밀번호는 8자 이상이어야 합니다",
            // },
            validate: {
              // notEmpty: (value) => !value && "비밀번호를 입력하세요",
              // notMatch: (value) => {
              //   if (value !== getValues("newPasswordConfirm"))
              //     return "비밀번호가 일치하지 않습니다";
              // },
            },
          })}
        />
        <p style={{ color: "red" }}>{errors?.newPassword?.message}</p>
      </div>
      <div>
        <label>새 비밀번호 확인</label>
        <input
          type="text"
          {...register("newPasswordConfirm", {
            // minLength: {
            //   value: 8,
            //   message: "비밀번호는 8자 이상이어야 합니다",
            // },
            validate: {
              // notEmpty: (value) => !value && "비밀번호를 입력하세요",
              // notMatch: (value) => {
              //   if (value !== getValues("newPassword"))
              //     return "비밀번호가 일치하지 않습니다";
              // },
            },
          })}
        />
        <p style={{ color: "red" }}>{errors?.newPasswordConfirm?.message}</p>
      </div>
      <button type="submit">수정</button>
    </form>
  );
}
