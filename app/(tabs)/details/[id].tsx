import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getMatchById } from '@/src/data/home-cards';

export default function CardDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const match = typeof id === 'string' ? getMatchById(id) : undefined;

  if (!match) {
    return (
      <SafeAreaView className="flex-1 bg-slate-50">
        <View className="px-5 py-4 flex-row items-center">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 rounded-full bg-slate-100 items-center justify-center"
            accessibilityRole="button"
            accessibilityLabel="Voltar"
          >
            <MaterialIcons name="arrow-back" size={22} color="#0f172a" />
          </TouchableOpacity>
          <Text className="ml-4 text-slate-900 font-extrabold text-lg">Detalhes</Text>
        </View>

        <View className="flex-1 items-center justify-center px-6">
          <Text className="text-slate-900 font-bold text-xl">Detalhes não encontrados</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="px-5 py-4 flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-slate-100 items-center justify-center"
          accessibilityRole="button"
          accessibilityLabel="Voltar"
        >
          <MaterialIcons name="arrow-back" size={22} color="#0f172a" />
        </TouchableOpacity>

        <Text className="text-slate-900 font-extrabold text-lg">Detalhes</Text>

        <View className="w-10 h-10" />
      </View>

      <ScrollView className="flex-1" contentContainerClassName="px-5 pb-8">
        <View className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
          <Image source={match.image} className="w-full h-64" resizeMode="cover" />

          <View className="px-5 py-5">
            <Text className="text-slate-900 font-extrabold text-2xl">{match.title}</Text>

            <View className="mt-4 flex-row items-center">
              <MaterialIcons name="calendar-today" size={20} color="#64748b" />
              <Text className="text-slate-600 font-semibold ml-3">{match.dateLabel}</Text>
            </View>

            <View className="mt-3 flex-row items-center">
              <MaterialIcons name="groups" size={22} color="#64748b" />
              <Text className="text-slate-600 font-semibold ml-3">
                Vagas: {match.slotsTaken}/{match.slotsTotal}
              </Text>
            </View>

            <View className="h-px bg-slate-200 my-5" />

            <Text className="text-slate-800 leading-6">{match.description}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
