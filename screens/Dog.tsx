import { FlatList, Text, View } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";

export const Dog = () => {
  const [data, setData] = useState([]);
  const instance = axios.create({
    baseURL: "https://api.thedogapi.com/v1/breeds?limit=20",
  });
  const getItems = async () => {
    try {
      const res = await instance.get("/");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getItems();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={data}
        renderItem={(info: { index: number; item: any }) => (
          <Text style={{padding:20,fontSize:20,fontStyle:"italic",fontWeight:"bold",borderStyle:"dashed",borderWidth:2,width:300}}>{info.item.name}</Text>
        )}
      ></FlatList>
    </View>
  );
};
