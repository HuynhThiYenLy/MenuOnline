import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import data from '../data.json';

const Cart = ({ navigation }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setCart(data.Cart);
    }, []);

    useEffect(() => {
        let total = 0;
        cart.forEach(item => {
            total += item.gia * item.soLuong;
        });
        setTotalPrice(total);
    }, [cart]);

    const renderCartItem = ({ item }) => {
        return (
            <View style={styles.cartItem}>
                {item.img && <Image source={{ uri: item.img }} style={styles.cartImage} />}
                <View style={{ flexDirection: 'column', flex: 1, marginLeft: 10 }}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{item.sp}</Text>
                    <Text style={{ fontSize: 18, color: '#FF6600' }}>{item.gia.toLocaleString('vi-VN')}</Text>
                </View>
                <Text style={{ color: 'black', fontSize: 18, alignSelf: 'flex-end' }}>x {item.soLuong}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Giỏ hàng
                </Text>
            </View>

            <FlatList
                style={styles.cartItemList}
                data={cart}
                renderItem={renderCartItem}
                keyExtractor={item => item._id}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginBottom: 15 }}>
                <Text style={{ color: 'black', fontSize: 18}}>Tổng cộng:</Text>
                <Text style={{ color: 'blue', fontSize: 18, fontWeight: 'bold'}}>{totalPrice.toLocaleString('vi-VN')}</Text>
            </View>

            <TouchableOpacity
                style={{ backgroundColor: 'orange', paddingVertical: 15, marginHorizontal: 30, borderRadius: 30 }}
                onPress={() => navigation.navigate('Order')}>
                <Text style={{ color: 'black', fontSize: 18, alignSelf: 'center', fontWeight: 'bold' }}>Gọi món</Text>
            </TouchableOpacity>
        </View >
    );
}

export default Cart;

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cartItem: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cartImage: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    cartItemList: {
        flex: 1,
    },
});
