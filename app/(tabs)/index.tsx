import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeCard } from '@/components/home-card';
import { MATCHES } from '@/src/data/home-cards';
import { useAuthStore } from '@/src/store/authStore';

export default function Home() {
  const user = useAuthStore((state) => state.user);

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="px-5 pt-3 pb-4 flex-row items-center justify-between">
        <View className="w-10 h-10 rounded-full bg-slate-100 items-center justify-center">
          <MaterialIcons name="sports-soccer" size={22} color="#0f172a" />
        </View>

        <Text className="text-slate-900 font-extrabold text-xl">Partidas Disponíveis</Text>

        <View className="w-10 h-10 rounded-full bg-slate-100 items-center justify-center">
          <MaterialIcons name="notifications-none" size={24} color="#0f172a" />
        </View>
      </View>

      <FlatList
        data={MATCHES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 24 }}
        ItemSeparatorComponent={() => <View className="h-5" />}
        ListHeaderComponent={
          user?.name ? (
            <Text className="text-slate-500 font-semibold mb-4">Olá, {user.name}</Text>
          ) : (
            <View className="h-2" />
          )
        }
        renderItem={({ item }) => (
          <HomeCard
            id={item.id}
            title={item.title}
            dateLabel={item.dateLabel}
            slotsTaken={item.slotsTaken}
            slotsTotal={item.slotsTotal}
            statusLabel={
              item.status === 'confirmado'
                ? 'Confirmado'
                : item.status === 'aberto'
                  ? 'Aberto'
                  : 'Lotado'
            }
            statusVariant={
              item.status === 'confirmado' ? 'success' : item.status === 'aberto' ? 'info' : 'danger'
            }
            imageSource={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}
