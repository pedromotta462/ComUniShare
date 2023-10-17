"use client";
import React from "react";
import imgs from "@/../public/imgs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";

function loginform() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleRegisterForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="flex items-center justify-center w-[90%] h-[80vh] bg-[#f5f5f5] rounded shadow-xl p-0">
      <div className={`${showLogin ? '' : 'transform translate-x-full'} bg-[#e26e44] w-[50%] h-full transition-all ease-in-out duration-500 z-10`}>
        <Image
          src={imgs.logoCompleta}
          alt="Imagem da logo do comunishare"
          className={"rounded object-fill"}
        ></Image>
      </div>
      <form className={`${showLogin ? '' : 'transform -translate-x-full'} flex flex-col items-center justify-center w-[50%] h-full transition-all ease-in-out duration-500`}>
        <h1 className="text-black font-inter font-normal text-3xl leading-16">
          Bem vindo ao <br />{" "}
          <span className="text-yellow-500">ComUniShare</span>
        </h1>
        <h3 className="text-[#000000] text-opacity-50 mb-[5%] font-inter font-normal text-.5xl">
          Por favor, insira seus dados.
        </h3>

        { showLogin ? <Login /> : <Register />}

        <Button size="lg" className={`${showLogin ? '' : 'hidden'} mb-3 mt-5`}>
          <Link href="/Home">Entrar</Link>
        </Button>

        <Button
            onClick={(e) => {
                e.preventDefault(); // Evitar a recarga da página
                toggleRegisterForm();
            }}
            size={`${showLogin ? 'default' : 'lg'}`}
            variant={`${showLogin ? 'ghost' : 'default'}`}
            className="m-5"
        >
            Register
        </Button>
      </form>
    </div>
  );
}

export default loginform;