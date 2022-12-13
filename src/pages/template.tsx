import React, { useEffect, useState } from "react";
import { Plus, Trash } from "phosphor-react-native";
import { Keyboard, StyleSheet } from "react-native";
import {
  Box,
  FlatList,
  HStack,
  IconButton,
  Input,
  Text,
  View,
} from "native-base";

const TodoListTemplate: React.FC<{
  data: string[];
  alterarLista: (lista: string[]) => void;
}> = ({ data, alterarLista }) => {
  const [aFazer, setAFazer] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidHide", () => setError(false));
  }, [Keyboard]);

  const handleCreateTodo = () => {
    if (aFazer !== "" && !data.includes(aFazer)) {
      alterarLista([aFazer, ...data]);
      setAFazer("");
      Keyboard.dismiss();
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <View style={styles.container} bg="muted.700">
      <HStack alignItems="center" mb="16px" space="4px">
        <Input
          isInvalid={error}
          variant="filled"
          bg="muted.400"
          borderColor="info.700"
          placeholderTextColor="#5c5757"
          color="white"
          flex={1}
          value={aFazer}
          placeholder="Digite os afazeres"
          onChangeText={(text) => setAFazer(text)}
        />
        <IconButton
          borderWidth="1px"
          borderColor="info.700"
          onPress={handleCreateTodo}
          icon={<Plus size="24px" color="#0369A1" />}
          variant="solid"
        />
      </HStack>
      {error && (
        <Text bold color="error.500">
          Erro! Afazer nulo ou já existente.
        </Text>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.lista}
        data={data}
        renderItem={({ item, index }) => (
          <Box
            key={index}
            bg="info.200"
            mb="10px"
            borderRadius="4px"
            p="8px"
            borderColor="primary.500"
            borderWidth="1px"
          >
            <HStack justifyContent="space-between" alignItems="center">
              <Text flex={1}>{item}</Text>
              <IconButton
                onPress={() => {
                  alterarLista(data.filter((filtro) => filtro !== item));
                }}
                icon={<Trash size="16px" color="#000" />}
              />
            </HStack>
          </Box>
        )}
      />
    </View>
  );
};

export default TodoListTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  lista: {
    flex: 1,
  },
});
