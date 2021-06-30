import styled from 'styled-components/native';
import { corTexto } from '../constants/colors';
import font from '../constants/font';

export const Rotulo = styled.Text`
  color: ${corTexto};
  font-size: ${font.tamanho.pequeno}px;
  color: ${corTexto};
  flex-shrink: 1;
`;

export const Alerta = styled(Rotulo)`
  color: #ED5F55;
`;

export const Negrito = styled(Rotulo)`
  font-weight: bold;
`;

export const Pequeno = styled(Rotulo)`
  font-size: ${font.tamanho.extraPequeno}px;
`;
