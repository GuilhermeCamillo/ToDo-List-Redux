import React, { useEffect, useState } from "react";
import { PlusCircle, Trash } from "phosphor-react-native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Box, FlatList, HStack, Input, Text, View } from "native-base";

const TodoListTemplate: React.FC<{
  data: string[];
  alterarLista: (lista: string[]) => void;
}> = ({ data, alterarLista }) => {
  const [aFazer, setAFazer] = useState<string>("");

  return (
    <View style={styles.container}>
      <HStack alignItems="center" mb="16px" space="4px">
        <Input
          flex={1}
          value={aFazer}
          placeholder="A FAZER"
          onChangeText={(text) => setAFazer(text)}
        />
        <TouchableOpacity
          onPress={() => {
            alterarLista([aFazer, ...data]);
            setAFazer("");
          }}
        >
          <PlusCircle size="46px" color="#000" />
        </TouchableOpacity>
      </HStack>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.lista}
        data={data}
        renderItem={({ item, index }) => (
          <Box
            key={index}
            bg="info.200"
            mb="10px"
            borderRadius="8px"
            p="16px"
            borderColor="primary.500"
            borderWidth="1px"
          >
            <HStack justifyContent="space-between" alignItems="center">
              <Text flex={1}>{item}</Text>
              <TouchableOpacity
                onPress={() => {
                  alterarLista(data.filter((filtro) => filtro !== item));
                }}
              >
                <Trash size="24px" color="#000" />
              </TouchableOpacity>
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
