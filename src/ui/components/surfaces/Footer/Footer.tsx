import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.styles";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem Somos</FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            O help-Diaristas te ajuda a encontrar o profissional perfeito para
            realizar a limpeza de sua casa. Garantiremos os melhores
            profissionais com total segurança e praticidade! São Milhares de
            clientes satisfeitos por todo o pais.
          </Typography>
        </Box>

        <div>
          <FooterTitle>Baixe Nosso APP</FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener nereferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"App Store"} />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener nereferrer"}>
                <img src={"/img/logos/google-play.png"} alt={"Google Play"} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};
export default Footer;
