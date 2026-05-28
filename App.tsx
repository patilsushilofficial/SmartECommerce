import { StyleSheet, Text, View } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSafeView from './src/components/views/AppSafeView';
import FlashMessage, { showMessage } from 'react-native-flash-message';

export default function App() {
  return (
    <AppSafeView style={styles.container}>
      <FlashMessage position={"top"}/>
     <AppText variant='medium'>Hello World</AppText>
     <AppText 
      onPress={() => {
        showMessage({
          message:"Hello World",
          color:"yellow",
          type:"success"
        })
      }}
      variant='bold'>Hello World</AppText>
    </AppSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
