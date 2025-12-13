import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-slate-50 items-center justify-center px-6">
      <View className="w-16 h-16 rounded-full bg-slate-100 items-center justify-center">
        <MaterialIcons name="person" size={34} color="#0f172a" />
      </View>
      <Text className="text-slate-900 font-bold text-2xl mt-4">Perfil</Text>
      <Text className="text-slate-500 mt-2 text-center">
        Em breve você poderá editar seus dados e preferências aqui.
      </Text>
    </View>
  );
}

