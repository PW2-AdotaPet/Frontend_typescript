import Style from "./Styles/Input.module.css";
import { CiUser, CiLock } from "react-icons/ci";
import BoxLogin from "../Layouts/BoxLogin";
import Container from "../Layouts/Container";
import DividerContainer from "../Layouts/DividerContainer";
import Title from "../Layouts/Title";
import LinkLogin from "../Ui/LinkLogin";
import Button from "../Ui/Button";

import { useAuth } from "../../Context/AuthContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  username: z
    .string({
      required_error: "Este campo é obrigatório!",
    })
    .min(3, { message: "O nome deve conter no minímo 3 carateres!" }),
  password: z
    .string({
      required_error: "Este campo é o obrigatório!",
    })
    .min(4, { message: "O senha deve conter no minímo 4 carateres!" }),
});

type FormInput = z.infer<typeof schema>;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
  });

  const { login } = useAuth();

  const handleLogin = async (data: FormInput) => {
    const { username, password } = data;
    login(username, password);
  };

  return (
    <Container customClass="center">
      <DividerContainer customClass="columnCenter">
        <BoxLogin>
          <Title contentTitle="Entrar" />
          <form className={Style.Form} onSubmit={handleSubmit(handleLogin)}>
            <DividerContainer customClass="columnMin">
              <div className={Style.container}>
                <CiUser size={24} />
                <input
                  type="text"
                  placeholder="Insira seu nome de usuário"
                  {...register("username")}
                />
              </div>
              {errors.username?.message && (
                <p className={Style.inputError}>{errors.username?.message}</p>
              )}
              <div className={Style.container}>
                <CiLock size={24} />
                <input
                  type="password"
                  placeholder="Insira sua senha"
                  {...register("password")}
                />
              </div>
              {errors.password?.message && (
                <p className={Style.inputError}>{errors.password?.message}</p>
              )}
              <DividerContainer>
                <Button name="Entrar" customClass="success" type="submit" />
              </DividerContainer>
            </DividerContainer>
          </form>
        </BoxLogin>
        <p style={{ display: "flex" }}>
          Você não tem uma conta?{" "}
          <LinkLogin name="Criar conta" link="/register" />
        </p>
      </DividerContainer>
    </Container>
  );
}

export default Login;
