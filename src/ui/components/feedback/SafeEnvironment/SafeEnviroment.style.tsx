import { styled } from "@mui/material/styles";
import theme from "ui/themes/themes";

export const SafeEnviromentContainer = styled("div")`
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.default};
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)} 0;
  font-size: 12px;
`;
