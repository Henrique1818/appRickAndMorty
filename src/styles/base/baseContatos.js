import styled from 'styled-components';
import { bordaArredondar, espacamento } from '../constants/sizes';
import { Negrito } from './baseText';

export const BordaContato = styled.View`
  flex: 1;
  border: 1px dashed #dededd;
  border-radius: ${bordaArredondar}px;
  padding: 6px;
  background-color: #f4f4f4;
  margin-bottom: ${espacamento.pequeno}px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const BordaContatoRotulo = styled.Text`
  color: #828282;
  align-self: center;
`;

export const BordaContatoNegrito = styled(Negrito)`
  align-self: center;
  margin-right: 10px;
`;

export const BaseInput = styled.TextInput`
  background-color: #FFFFFF;
  border: 1px #333;
  border-radius: 5px;
  padding: 8px;
  flex: 1;
`;
