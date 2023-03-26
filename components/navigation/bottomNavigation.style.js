import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  icon: (focused) => ({
    backgroundColor: focused ? COLORS.black : COLORS.white,
    color: focused ? COLORS.white : COLORS.gray,
    padding: 4,
    width: 60,
    textAlign: 'center',
    borderRadius: 20,
  }),
});

export default styles;
