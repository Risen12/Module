import Header from "../Components/Header";
import React from "react";
import Footer from "../Components/Footer";
import "../Styles/Autorization-page.css";
import "../Styles/Header.css";
import { useState } from "react";







function Autorization() {
  async function Auth() {
    let auth_data = {User:user,Pass:pass};
    let url = "https://subabonent.ru/danila/auth.php";
    let response = await fetch(url, 
      {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(auth_data)
      });
      console.log(auth_data);
    let result = await response.text();
    console.log(result);
    if(result === "done")
    {
      console.log("Аутенфикация пройдена.");
      window.location.replace("http://localhost:3000/Cabinet");
      setCookie("auth",true,1);
    }
  };

  function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  };

  const [user,setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleChangeUser = (event) => {
    const value = event.target.value;
    setUser(value);
  };

  const handleChangePass = (event) => {
    const value = event.target.value;
    setPass(value);
  };

  const SubmitHandler = (event) =>
  {
    event.preventDefault();
    console.log("Форма отправлена.");
    Auth();
  };
    return (
      <div id='Autorization-page'>
        <Header id='Autorization_header'/>
        <div id='Autorization_content'>
            <form onSubmit={SubmitHandler} method="POST" id='Autorization_form'>
            <h1>Авторизация</h1>
            <div>Имя пользователя</div><input type="text" className="MyInput" onChange={handleChangeUser} placeholder="Пользователь"></input>
            <div>Пароль</div><input className="MyInput" placeholder="Пароль" onChange={handleChangePass} type="password"></input>
            <div><button type="submit"  id="btn">ВОЙТИ</button></div>
            </form>
        </div>
        <Footer id='Autorization_footer'/>
      </div>
    );
  };
  
  export default  Autorization;