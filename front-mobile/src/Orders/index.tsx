import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard';

function Orders() {

    const handlerOnPress = () => {

    }
  return (
   <>
   <Header /> 
    <ScrollView style={styles.container}>
     <OrderCard /> 
     <OrderCard /> 
     <OrderCard /> 
     <OrderCard /> 
     <OrderCard />       
    </ScrollView>
   </>
  );
}

const styles = StyleSheet.create({

  container:{

    paddingRight: '5%',
    paddingLeft: '5%',



  }

});

export default Orders;