import { StyleSheet } from 'react-native';

import { COLORS, SHADOWS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    margin: 6,
    shadowColor: '#171717',
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  header: {
    fontSize: SIZES.medium,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 4,
  },
});

export default styles;
