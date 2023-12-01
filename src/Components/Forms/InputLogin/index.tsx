import Style from "./style.module.css";

function InputLogin({ Icon, Type, Name }: any) {
  return (
    <div className={Style.container}>
      <Icon size={24}/>
      <input type={Type} id={Name} placeholder={Name} />
    </div>
  );
}

export default InputLogin;
