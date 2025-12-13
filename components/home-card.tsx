import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View, type ImageSourcePropType } from 'react-native';

export type HomeCardProps = {
  id: string;
  title: string;
  dateLabel: string;
  slotsTaken: number;
  slotsTotal: number;
  statusLabel: string;
  statusVariant: 'success' | 'info' | 'danger';
  imageSource: ImageSourcePropType;
};

const statusClasses: Record<HomeCardProps['statusVariant'], string> = {
  success: 'bg-emerald-100',
  info: 'bg-sky-100',
  danger: 'bg-rose-100',
};

const statusTextClasses: Record<HomeCardProps['statusVariant'], string> = {
  success: 'text-emerald-700',
  info: 'text-sky-700',
  danger: 'text-rose-700',
};

export function HomeCard({
  id,
  title,
  dateLabel,
  slotsTaken,
  slotsTotal,
  statusLabel,
  statusVariant,
  imageSource,
}: HomeCardProps) {
  const router = useRouter();

  const handleView = () => {
    router.push({ pathname: '/details/[id]', params: { id } });
  };

  return (
    <TouchableOpacity
      onPress={handleView}
      activeOpacity={0.9}
      className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm"
      accessibilityRole="button"
      accessibilityLabel={`Visualizar detalhes de ${title}`}
    >
      <View className="relative">
        <Image source={imageSource} className="w-full h-52" resizeMode="cover" />

        <View
          className={`absolute top-4 right-4 px-4 py-2 rounded-full ${statusClasses[statusVariant]}`}
        >
          <Text className={`font-bold ${statusTextClasses[statusVariant]}`}>{statusLabel}</Text>
        </View>
      </View>

      <View className="px-5 py-4">
        <Text className="text-slate-900 font-extrabold text-2xl">{title}</Text>

        <View className="mt-4 flex-row items-center">
          <MaterialIcons name="calendar-today" size={20} color="#64748b" />
          <Text className="text-slate-500 font-semibold ml-3">{dateLabel}</Text>
        </View>

        <View className="mt-3 flex-row items-center">
          <MaterialIcons name="groups" size={22} color="#64748b" />
          <Text className="text-slate-500 font-semibold ml-3">
            Vagas: {slotsTaken}/{slotsTotal}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
