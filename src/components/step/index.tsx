import { View, Text } from 'react-native'

import { IconGrid4x4, IconProps } from "@tabler/icons-react-native"

import { colors } from '@/styles/theme'
import { s } from './style'
import React from 'react'

type StepProps = {
  title: string
  description: string,
  icon: React.ComponentType<IconProps>
}

export function Step({ icon: Icon, title, description }: StepProps) {
  return (
    <View style={s.container}>

      {Icon && <Icon size={32} color={colors.red.base} />}
      <View style={s.details}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  )
}