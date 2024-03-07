import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';

const ChiTietSP = ({ route, navigation }) => {
    const { product } = route.params;

    const back = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: product.img }}
                style={styles.productImage}
            />
            <TouchableOpacity
                style={styles.imgBack}
            onPress={back}>
                <Image
                    source={require('../img/back.png')}
                    style={{width: 40, height: 40,}}
                />
            </TouchableOpacity>

            <View style={styles.productInfoContainer}>
                <View style={styles.productInfo}>
                    <Text style={styles.productName}>{product.sp}</Text>
                </View>
            </View>
            <Text style={styles.productMoTa}>{product.moTa}</Text>

            <View style={styles.addGiovGia}>
                <View>
                    <Text style={styles.gia}>Giá:</Text>
                    <Text style={styles.giaSp}>{product.gia}</Text>
                </View>
                <TouchableOpacity
                    style={styles.btnAddGio}>
                    <Text style={styles.textBTN}>Thêm vào giỏ hàng</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};

export default ChiTietSP;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgBack: {
        position: 'absolute',
        top: 10,
        left: 5,
    },
    productImage: {
        width: '100%',
        height: 350,
    },
    productInfoContainer: {
        width: '100%',
        position: 'absolute',
        justifyContent: 'flex-end',
        top: 265,
        backgroundColor: 'rgba(128, 128, 128, 0.7)',
    },
    productInfo: {
        borderRadius: 8,
        padding: 30,
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    productMoTa: {
        fontSize: 20,
        color: 'black',
        margin: 15,
        height: 300,
    },
    addGiovGia: {
        flexDirection: 'row',
        padding: 15,
        marginHorizontal: 20,
        justifyContent: 'space-between'
    },
    giaSp: {
        fontSize: 20,
        color: 'orangered',
        fontWeight: 'bold',
    },
    gia: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    btnAddGio: {
        backgroundColor: 'orange',
        padding: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginLeft: 30,
    },
    textBTN: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
});
