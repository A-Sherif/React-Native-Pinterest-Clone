import React from 'react'
import Constants from 'expo-constants'
import { View, Text, FlatList, TouchableOpacity, ImageBackground, Dimensions, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const selectInterests = [
    {
        id: '1',
        image: { uri: 'https://i.pravatar.cc/1000' },
        title: 'Home decor'
    }, {
        id: '2',
        image: { uri: 'https://i.pravatar.cc/200' },
        title: "Men's fitness"
    }, {
        id: '3',
        image: { uri: 'https://i.pravatar.cc/300' },
        title: "Tattos"
    }, {
        id: '4',
        image: { uri: 'https://i.pravatar.cc/400' },
        title: 'Anime'
    }, {
        id: '5',
        image: { uri: 'https://i.pravatar.cc/500' },
        title: 'Coding'
    }, {
        id: '6',
        image: { uri: 'https://i.pravatar.cc/600' },
        title: 'Inspirational Quotes'
    }, {
        id: '7',
        image: { uri: 'https://i.pravatar.cc/700' },
        title: 'Designing'
    }, {
        id: '8',
        image: { uri: 'https://i.pravatar.cc/800' },
        title: 'DIY and home improvement'
    }, {
        id: '9',
        image: { uri: 'https://i.pravatar.cc/900' },
        title: 'Recipes'
    }, {
        id: '10',
        image: { uri: 'https://i.pravatar.cc/1010' },
        title: 'Nature'
    }, {
        id: '11',
        image: { uri: 'https://i.pravatar.cc/1020' },
        title: 'Gaming'
    }, {
        id: '12',
        image: { uri: 'https://i.pravatar.cc/1030' },
        title: 'Comics'
    }, {
        id: '13',
        image: { uri: 'https://i.pravatar.cc/1040' },
        title: 'Photography'
    }, {
        id: '14',
        image: { uri: 'https://i.pravatar.cc/1050' },
        title: 'Upcycling'
    }, {
        id: '15',
        image: { uri: 'https://i.pravatar.cc/1060' },
        title: 'Books'
    }, {
        id: '16',
        image: { uri: 'https://i.pravatar.cc/1070' },
        title: 'Movies'
    }, {
        id: '17',
        image: { uri: 'https://i.pravatar.cc/1080' },
        title: 'Clothes'
    }, {
        id: '18',
        image: { uri: 'https://i.pravatar.cc/1090' },
        title: 'Quotes'
    },
]

const statusBar_Height = Constants.statusBarHeight
const width = Dimensions.get('screen').width
const height = Dimensions.get('window').height

function Pin({ id, image, title, selected, onSelect }) {
    return (
        <TouchableOpacity
            onPress={() => onSelect(id)}
            style={styles.InterestContainer}>
            {selected ?
                <ImageBackground source={image} borderRadius={20} style={styles.ImageContainer}>
                    <View style={[styles.innerContainer, { justifyContent: 'space-between' }]}>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Ionicons name='md-checkmark-circle-outline' size={20} color='#fff' />
                        </View>
                        <Text style={{ color: '#ffff', fontWeight: 'bold' }}>{title}</Text>
                    </View>
                </ImageBackground>
                :
                <ImageBackground source={image} borderRadius={20} style={styles.ImageContainer}>
                    <View style={styles.innerContainer}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>{title}</Text>
                    </View>
                </ImageBackground>
            }
        </TouchableOpacity>
    );
}

export default function Interests({ route, navigation }) {

    const [selected, setSelected] = React.useState(new Map())
    const onSelect = React.useCallback(
        id => {
            const newSelected = new Map(selected)
            newSelected.set(id, !selected.get(id))

            setSelected(newSelected)
        },
        [selected],
    )

    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Welcome to Pinterest</Text>
                <TouchableOpacity style={styles.Button}
                    onPress={() => navigation.navigate('Home', {
                        countryName: route.params.countryName,
                        name: route.params.name,
                        gender: route.params.gender
                    })}
                >
                    <Text style={{ fontWeight: 'bold' }}>Next</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.SecondaryText}>Pick 5 or more to get started</Text>
            <Text>{selected.title}</Text>
            <FlatList
                horizontal={false}
                numColumns={3}
                data={selectInterests}
                renderItem={({ item }) => (
                    <Pin
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        selected={!!selected.get(item.id)}
                        onSelect={onSelect}
                    />
                )}
                keyExtractor={item => item.id}
                extraData={selected}
            />
        </View>
    )
}

styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flex: 1,
        marginTop: statusBar_Height
    },
    Header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    HeaderText: {
        flex: 4,
        fontSize: 30,
        fontWeight: 'bold'
    },
    Button: {
        flex: 1,
        backgroundColor: '#e2e2e2',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 50
    },
    SecondaryText: {
        fontSize: 30,
        marginHorizontal: 10,
        marginVertical: 10,
        width: 0.75 * width
    },
    InterestContainer: {
        backgroundColor: '#e2e2e2',
        height: 0.17 * height,
        width: width / 3.25,
        borderRadius: 20,
        marginHorizontal: 5,
        marginVertical: 5
    },
    ImageContainer: {
        height: 0.17 * height,
        width: width / 3.25,
        borderRadius: 20,
        resizeMode: "cover"
    },
    innerContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: "flex-end",
        padding: 10,
        borderRadius: 20
    }
})