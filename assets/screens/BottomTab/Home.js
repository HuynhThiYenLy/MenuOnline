import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import jsonData from '../data.json';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const [search, setSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        setCategories([
            { _id: 'all', loaiSP: 'Tất cả' },
            ...jsonData.DanhMuc,
        ]);
        setSelectedCategory('all');
    }, []);

    useEffect(() => {
        if (selectedCategory === 'all') {
            // Nếu chọn "Tất cả", hiển thị tất cả sản phẩm
            setProducts(jsonData.Product);
        } else if (jsonData.Product[selectedCategory._id]) {
            setProducts(jsonData.Product[selectedCategory._id]);
        } else {
            setProducts([]);
        }
    }, [selectedCategory]);

    const navigation = useNavigation();

    const handleCategoryPress = (item) => {
        setSelectedCategory(item);
    };

    const renderCategoryItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.renderCategoryItem}
                onPress={() => handleCategoryPress(item)}>
                <View
                    style={[
                        selectedCategory && selectedCategory._id === item._id && {
                            alignItems: 'center',
                        },
                    ]}>
                    <Text
                        style={[
                            styles.txtCategory,
                            selectedCategory && selectedCategory._id === item._id && { color: '#f27e18', fontWeight: 'bold' },
                        ]}>
                        {item.loaiSP}
                    </Text>
                    {selectedCategory && selectedCategory._id === item._id && (
                        <View
                            style={{
                                width: '50%',
                                borderBottomWidth: 2,
                                borderBottomColor: '#f27e18',
                                marginTop: 5,
                            }}
                        />
                    )}
                </View>
            </TouchableOpacity>
        );
    };

    const renderProductItem = ({ item }) => {
        return (
            <View style={styles.productItem}>
                {item.img && <Image source={{ uri: item.img }} style={styles.productImage} />}
                <View style={{ flexDirection: 'column', marginLeft: 20, width: 245 }}>
                    <Text style={{
                        color: 'black', fontSize: 18, fontWeight: 'bold'
                    }}>{item.sp}</Text>
                    <Text style={{ color: 'black', fontSize: 18, color: '#FF6600', marginTop: 5 }}>{item.gia.toLocaleString('vi-VN')}</Text>
                </View>

                <TouchableOpacity
                    style={{ alignSelf: 'flex-end' }}
                    onPress={() => {
                        setSelectedProduct(item);
                        navigation.navigate('ChiTietSP', { product: item });
                    }}>
                    <Image
                        source={require('../../img/add.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Trang chủ
                </Text>
            </View>
            <View>
                <View style={styles.searchContainer}>
                    <Image
                        source={require('../../img/search.png')}
                        style={{ width: 20, height: 20, marginRight: 5 }}
                    />
                    <TextInput
                        style={styles.search}
                        onChangeText={(text) => setSearch(text)}
                        placeholder="Tìm kiếm"
                        placeholderTextColor="gray"
                        value={search}
                    />
                </View>

                <FlatList
                    style={styles.flatListProduct}
                    horizontal
                    data={categories}
                    renderItem={renderCategoryItem}
                    keyExtractor={item => item._id.toString()}
                    showsHorizontalScrollIndicator={false}
                />

                <FlatList
                    data={products}
                    renderItem={renderProductItem}
                    keyExtractor={item => item._id.toString()}
                />
            </View>
        </View>
    );
};

export default Home;

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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 10,
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    renderCategoryItem: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 5,
        height: 50,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    txtCategory: {
        fontSize: 18,
        color: 'blue',
    },
    productItem: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});
