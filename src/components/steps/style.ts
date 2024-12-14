import { StyleSheet } from "react-native"
import { fontFamily, colors } from "@/styles/theme"

export const s = StyleSheet.create({
    container: {
        flex: 1,
        gap: 24,
    },
    title: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray[500]
    }
})