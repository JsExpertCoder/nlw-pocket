import { StyleSheet } from "react-native"

import { fontFamily, colors } from "@/styles/theme"

export const s = StyleSheet.create({
    container: {
        gap: 14,
        height: 56,
        maxHeight: 56,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colors.green.base,
    },
    title: {
        fontSize: 16,
        color: colors.gray[100],
        fontFamily: fontFamily.semiBold
    },
})