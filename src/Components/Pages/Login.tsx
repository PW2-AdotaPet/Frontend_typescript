// import { useState } from "react";
// import { CiUser, CiLock } from "react-icons/ci";
// import BoxLogin from "../Layouts/BoxLogin";
// import Container from "../Layouts/Container";
// import DividerContainer from "../Layouts/DividerContainer";
// import Title from "../Layouts/Title";
// import InputLogin from "../Forms/InputLogin";
// import LinkLogin from "../Ui/LinkLogin";
// import Button from "../Ui/Button";


// // import {useAuth} from

// function Login() {
//   const [token, setToken] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     const url = 'http://localhost:8000/api/token/';

//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username: username,
//           password: password,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         const accessToken = data.access;

//         localStorage.setItem('token', accessToken);
//         setToken(accessToken);
//       } else {
//         console.error('Falha na autenticação');
//       }
//     } catch (error) {
//       console.error('Erro:', error);
//     }
//   };

//   return (
//     <Container customClass="center">
//       <DividerContainer customClass="columnCenter">
//         <BoxLogin>
//           <Title contentTitle="Entrar" />
//           <DividerContainer customClass="columnMin">
//             <InputLogin
//               Icon={CiUser}
//               Type="text"
//               Name="E-mail"
//               onChange={(value: string) => setUsername(value)}
//             />
//             <InputLogin
//               Icon={CiLock}
//               Type="password"
//               Name="Senha"
//               onChange={(value: string) => setPassword(value)}
//             />
//             <LinkLogin name="Esqueci a senha" link="/register" />
//             <DividerContainer>
//               <Button name="Entrar" customClass="success" handle={handleLogin} />
//             </DividerContainer>
//           </DividerContainer>
//         </BoxLogin>
//         <p style={{ display: "flex" }}>
//           Você não tem uma conta?{" "}
//           <LinkLogin name="Criar conta" link="/register" />
//         </p>
//       </DividerContainer>
//     </Container>
//   );
// }

// export default Login;


import { useState } from "react";
import { CiUser, CiLock } from "react-icons/ci";
import BoxLogin from "../Layouts/BoxLogin";
import Container from "../Layouts/Container";
import DividerContainer from "../Layouts/DividerContainer";
import Title from "../Layouts/Title";
import InputLogin from "../Forms/InputLogin";
import LinkLogin from "../Ui/LinkLogin";
import Button from "../Ui/Button";


import { useAuth } from "../../Context/AuthContext";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const handleLogin = async () => {
   login(username, password)
  };

  return (
    <Container customClass="center">
      <DividerContainer customClass="columnCenter">
        <BoxLogin>
          <Title contentTitle="Entrar" />
          <DividerContainer customClass="columnMin">
            <InputLogin
              Icon={CiUser}
              Type="text"
              Name="E-mail"
              onChange={(value: string) => setUsername(value)}
            />
            <InputLogin
              Icon={CiLock}
              Type="password"
              Name="Senha"
              onChange={(value: string) => setPassword(value)}
            />
            <LinkLogin name="Esqueci a senha" link="/register" />
            <DividerContainer>
              <Button name="Entrar" customClass="success" handle={handleLogin} />
            </DividerContainer>
          </DividerContainer>
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