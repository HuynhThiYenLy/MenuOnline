// Import các thư viện và component cần thiết
import React, { useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    // Chuyển đến màn hình đăng nhập sau 3 giây
    const timer = setTimeout(() => {
      navigation.replace('Register');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../img/logo.png')}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});
