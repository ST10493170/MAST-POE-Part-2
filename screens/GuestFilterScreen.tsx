import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';
import { CartContext } from '../../context/CartContext';

export default function CheckoutScreen({ navigation }: any) {
  const { cart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    Alert.alert('Order Confirmed 🎉', 'Thank you for your purchase!');
    clearCart();
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checkout</Text>
      {cart.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty 🛒</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>R{item.price}</Text>
              </View>
            )}
          />
          <Text style={styles.total}>Total: R{total}</Text>
          <Button title="Confirm Order" onPress={handleCheckout} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  empty: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
  item: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
  },
  price: {
    fontSize: 16,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
});