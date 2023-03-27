import { StyleSheet } from 'react-native';

import { COLORS, SHADOWS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    padding: 6,
    backgroundColor: COLORS.white,
    marginTop: 10,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.primaryLight,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    width: '80%',
    marginLeft: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textWrapper: {
    flexDirection: 'column',
  },
});

export default styles;
