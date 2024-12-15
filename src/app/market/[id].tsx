import { useEffect, useState } from "react"
import { View, Alert, ScrollView } from "react-native"
import { router, useLocalSearchParams, Redirect } from "expo-router"

import { api } from "@/services/api"

import { Button } from "@/components/button"
import { Loading } from "@/components/loading"
import { Cover } from "@/components/market/cover"
import { Coupon } from "@/components/market/coupon"
import { Details, PropsDetails } from "@/components/market/details"


type DataProps = PropsDetails & {
    cover: string
}

export default function Market() {
    const [data, setData] = useState<DataProps>()
    const [coupon, setCoupon] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    const params = useLocalSearchParams<{ id: string }>()

    async function fetchMarket() {
        try {
            const { data } = await api.get(`/markets/${params.id}`)
            setData(data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            Alert.alert("Erro", "Não foi possível carregar os dados", [
                {
                    text: "OK",
                    onPress: () => router.back(),
                },
            ])
        }
    }

    useEffect(() => {
        fetchMarket()
    }, [params.id, coupon])

    if (isLoading) {
        return <Loading />
    }

    if (!data) {
        return <Redirect href="/home" />
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Cover uri={data.cover} />
                <Details data={data} />
                {coupon && <Coupon code={coupon} />}
            </ScrollView>
            <View style={{ padding: 32 }}>
                <Button>
                    <Button.Title>Ler QR Code</Button.Title>
                </Button>
            </View>
        </View>
    )
}