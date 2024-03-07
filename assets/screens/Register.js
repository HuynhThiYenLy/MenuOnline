import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const Register = ({ navigation }) => {
    const [hoTen, setHoTen] = useState('');
    const [sdt, setSDT] = useState('');
    const [selectedTable, setSelectedTable] = useState('bàn 1');
    const [error, setError] = useState('');

    const handleRegister = () => {
        // Kiểm tra xem Họ tên có được nhập không
        if (!hoTen) {
            setError('Vui lòng nhập Họ tên');
            return;
        }

        // Kiểm tra xem Số điện thoại có được nhập và có đúng định dạng không
        if (!sdt || !/^\d{10}$/.test(sdt)) {
            setError('Vui lòng nhập Số điện thoại hợp lệ (10 chữ số)');
            return;
        }

        navigation.navigate('ManHinh');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../img/logo.png')}
                style={{ width: 100, height: 100 }}
            />
            <Text style={styles.signup}>Đăng ký</Text>
            <Text style={styles.textWelcome}>Chào mừng bạn đến với OderMenu</Text>

            <Text style={styles.text}>Họ và tên:</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(hoTen) => setHoTen(hoTen)}
                value={hoTen}
            />

            <Text style={styles.text}>Số điện thoại:</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(sdt) => setSDT(sdt)}
                value={sdt}
            />

            <Text style={styles.text}>Số bàn:</Text>
            <Picker
                selectedValue={selectedTable}
                onValueChange={(itemValue, itemIndex) => setSelectedTable(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Bàn 1" value="bàn 1" />
                <Picker.Item label="Bàn 2" value="bàn 2" />
                <Picker.Item label="Bàn 3" value="bàn 3" />
            </Picker>

            {/* Hiển thị thông báo lỗi */}
            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity
                style={styles.button}
                onPress={handleRegister}
            >
                <Text style={styles.buttonText}>Đăng ký</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Register

const styles = StyleSheet.create({

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    button: {
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 10,
    },
    picker: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 5,
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginVertical: 10,
        paddingLeft: 10,
    },
    textWelcome: {
        fontSize: 18,
        color: 'green',
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 30,
    },
    signup: {
        fontSize: 25,
        color: 'orangered',
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        padding: 15,
    }
})