
import { StyleSheet, Text, View } from 'react-native';
import Memos from './components/Memos';
import Memoonly from './components/Memoonly';

export default function App() {
  return (
   <>
   <Memoonly/>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
