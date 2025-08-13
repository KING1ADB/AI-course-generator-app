import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}
    >
      <Image source={require('./../assets/images/landing.png')}
      style={{
        width: '100%',
        height: 300
      }}
      />

    </View>
  );
}
