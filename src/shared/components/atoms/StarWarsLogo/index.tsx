import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Logo from "@/shared/assets/logo.png";
import { LogoContainer } from "./styles";

const StarWarsLogo = () => {
  const router = useRouter();

  function handleClick() {
    router.push("/");
  }

  return (
    <LogoContainer onClick={handleClick}>
      <Image src={Logo.src} alt="logo" className="logo" fill={true} />
    </LogoContainer>
  );
};

export default StarWarsLogo;
