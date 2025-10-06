import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { CartContext } from '../../context/CartContext';

const menuData = [
  // ☕ Drinks
  { id: '1', name: 'Cappuccino', price: 45, category: 'Drinks' },
  { id: '2', name: 'Latte', price: 40, category: 'Drinks' },
  { id: '3', name: 'Espresso', price: 35, category: 'Drinks' },
  { id: '4', name: 'Iced Coffee', price: 50, category: 'Drinks' },
  { id: '5', name: 'Hot Chocolate', price: 42, category: 'Drinks' },

  // 🍔 Food
  { id: '6', name: 'Chicken Burger', price: 75, category: 'Food' },
  { id: '7', name: 'Beef Burger', price: 80, category: 'Food' },
  { id: '8', name: 'Veggie Wrap', price: 65, category: 'Food' },
  { id: '9', name: 'Toasted Sandwich', price: 55, category: 'Food' },

  // 🍰 Desserts
  { id: '10', name: 'Chocolate Muffin', price: 30, category: 'Dessert' },
  { id: '11', name: 'Cheesecake Slice', price: 45, category: 'Dessert' },
  { id: '12', name: 'Ice Cream Cup', price: 25, category: 'Dessert' },
];

export default function MenuItems({ navigation }: any) {
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Our Menu</Text>
      <FlatList
        data={menuData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.price}>R{item.price}</Text>
            <Button
              title="Add to Cart"
              onPress={() => {
                addToCart(item);
                navigation.navigate('AddItemsToCart', { item });
              }}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  category: {
    fontSize: 14,
    color: '#777',
  },
  price: {
    fontSize: 16,
    marginBottom: 10,
  },
});