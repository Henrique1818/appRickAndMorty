import React, { useState } from 'react';
import {
  View, Text, TextInput, Image, TouchableOpacity, ScrollView,
} from 'react-native';
import { listarApiRickAndMorty } from '../../api/apiRickAndMorty';
import { BaseInput } from '../../styles/base/baseContatos';
import {
  ScrollContainer, Botao, Texto, Imagem, Centro,
} from '../../styles/base/baseContainer';

const defaulValues = {
  nome: '',
};

const HomeScreen = () => {
  const [values, setValues] = useState(defaulValues);
  const [personagem, setPersonagem] = useState(null);

  const listarNome = async () => {
    await listarApiRickAndMorty(values.nome).then((data) => setPersonagem(data));
  };

  return (
    <ScrollContainer>
      <View>
        <BaseInput
          placeholder="Digite nome do personagem"
          value={values.nome}
          onChangeText={(val) => setValues({
            nome: val,
          })}
        />

        <Botao onPress={listarNome}>
          <Texto>Click</Texto>
        </Botao>
      </View>

      <Centro>
        {personagem ? (
          <>
            {personagem.results.map(({ image }) => (
              <Imagem style={{ width: 200, height: 200 }} source={{ uri: image }} />
            ))}
          </>
        ) : null}
      </Centro>
    </ScrollContainer>
  );
};

export default HomeScreen;
