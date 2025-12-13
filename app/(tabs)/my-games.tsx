import { Text, View } from 'react-native';

export default function MyGamesScreen() {
  return (
    <View className="flex-1 bg-slate-50 items-center justify-center px-6">
      <Text className="text-slate-900 font-bold text-2xl">Meus Jogos</Text>
      <Text className="text-slate-500 mt-2 text-center">
        Em breve você verá suas partidas confirmadas e inscrições aqui.
      </Text>
    </View>
  );
}
