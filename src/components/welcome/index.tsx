import { View, Image, Text} from 'react-native'

import {s} from './style'
import { colors } from '@/styles/colors'


export function Welcome() {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={s.logo} />
      <Text style={s.title}>Boas vindas ao Nearby!</Text>
      <Text style={s.subtitle}>Tenha cupons de vantagem para usar em {"\n"} seus estabelecimentos favoritos.</Text>
    </View>
  )
}