import type { NextPage } from "next";
import SafeEnviroment from "ui/components/feedback/SafeEnvironment/SafeEnviroment";
import PageTitle from "ui/components/data-display/Page-title/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container, CircularProgress } from "@mui/material";
import {
  FormElementContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "@styles/pages/index.styles";
import useIndex from "data/hooks/pages/useIndex.page";

const Home: NextPage = () => {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestante,
  } = useIndex();

  return (
    <div>
      <SafeEnviroment />
      <PageTitle
        title={"Conheça os Profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <Container>
        <FormElementContainer>
          <TextFieldMask
            variant={"outlined"}
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          {erro && <Typography color={"error"}>{erro}</Typography>}

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementContainer>
        {buscaFeita &&
          (diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {/*-------- Diaristas----------------------------------------------*/}
                {diaristas.map((item, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={item.nome_completo}
                      picture={item.foto_usuario}
                      rating={item.reputacao}
                      description={item.cidade + " - " + item.estado}
                    />
                  );
                })}
                {/*---------------------------------------------------------------- */}
              </ProfissionaisContainer>
              <Container sx={{ textAlign: "center" }}>
                {diaristasRestante > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ...e mais {diaristasRestante}{" "}
                    {diaristasRestante > 1
                      ? "profissioniais atendem"
                      : "profissional atende"}{" "}
                    ao seu endereço.
                  </Typography>
                )}

                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ mt: 5 }}
                >
                  Contratar um proficional
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              Desculpe! Ainda não temos nenhuma diarista disponivel em sua
              região.
            </Typography>
          ))}
      </Container>
    </div>
  );
};

export default Home;
