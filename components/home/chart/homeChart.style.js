import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    margin: 14,
    borderRadius: 24,
    shadowColor: '#171717',
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default styles;
