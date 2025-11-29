import { useState } from 'react';
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from '../../src/store/authStore';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login);
  const loading = useAuthStore((state) => state.loading);

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (e) {
      alert('Login falhou');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/bolabg.jpg')} 
      className="flex-1"
      resizeMode="cover"
    >
      <View className="flex-1 bg-blue-900/50 items-center justify-center">

        <View className='flex flex-row items-center'>
          <Image
            source={require('../../assets/images/icons/icon.png')} 
            className="w-16 h-16"
            resizeMode="contain"
          />
          <Text className='text-white font-bold text-xl'>Arena Timbi</Text>
        </View>

        <View className='mb-8 mt-4 w-3/4'>
          <Text className='text-white font-bold text-4xl text-center'>Sua próxima partida começa aqui</Text>
        </View>

        <View className='flex flex-col items-center w-full'>
          <Text className='w-3/4 text-white font-bold mb-2'>Email</Text>
          <TextInput 
            placeholder="Digite seu email" 
            value={email} 
            onChangeText={setEmail} 
            className="border border-gray-200 border-2 rounded-lg p-4 mb-2 w-3/4 bg-gray-400"
            />
        </View>

        <View className='flex flex-col items-center w-full'>
          <Text className='w-3/4 text-white font-bold mb-2'>Senha</Text>
          <TextInput 
            placeholder="Digite sua senha" 
            value={password} 
            onChangeText={setPassword} 
            secureTextEntry
            className="border border-gray-200 border-2 rounded-lg p-4 mb-2 w-3/4 bg-gray-400"
          />
        </View>

        <View className='flex flex-col items-center w-full'>
          <Text 
            onPress={() => console.log("Esqueceu senha")} 
            className="w-3/4 text-white font-bold text-right text-blue-300"
          >
            Esqueceu sua senha?
          </Text>
        </View>

        <TouchableOpacity 
          onPress={handleLogin} 
          className="w-3/4 bg-blue-500 p-4 rounded-lg items-center mt-4"
        >
          <Text className="text-white font-bold">
            {loading ? "Entrando..." : "Entrar"}
          </Text>
        </TouchableOpacity>

        <View className="flex-row items-center w-3/4 my-4">
          <View className="flex-1 h-px bg-gray-400" />
          <Text className="text-white mx-4">ou entre com</Text>
          <View className="flex-1 h-px bg-gray-400" />
        </View>

        {/* Login com google ou facebook */}
        <TouchableOpacity 
          onPress={() => console.log("Login com google")} 
          className="w-3/4 border-2 border-gray-200 bg-gray-600 p-4 rounded-lg items-center mt-4"
        >
          <View className='flex flex-row items-center justify-center'>
            <Image
              source={{uri: 'https://img.icons8.com/color/48/000000/google-logo.png'}} 
              className="w-8 h-8 mr-2"
              resizeMode="contain"
            />
            <Text className="text-white font-bold text-xl">
              {loading ? "Entrando..." : "Google"}
            </Text>
          </View>

        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => console.log("Login com facebook")} 
          className="w-3/4 border-2 border-gray-200 bg-gray-600 p-4 rounded-lg items-center mt-4"
        >
          <View className='flex flex-row items-center justify-center'>
            <Image
              source={{uri: 'https://images.vexels.com/media/users/3/223136/isolated/lists/984f500cf9de4519b02b354346eb72e0-midias-sociais-do-icone-do-facebook.png'}} 
              className="w-8 h-8 mr-2"
              resizeMode="contain"
            />
            <Text className="text-white font-bold text-xl">
              {loading ? "Entrando..." : "Facebook"}
            </Text>
          </View>
        </TouchableOpacity>

        <View className='mt-10 flex flex-row items-center'>
          <Text className='text-white font-bold'>Não tem uma conta?</Text>
          <Text onPress={() => console.log("Registrar")} className="text-blue-600 font-bold ml-1">Registre-se</Text>
        </View>

      </View>
    </ImageBackground>
  );
}