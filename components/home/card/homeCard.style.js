import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    margin: 14,
    borderRadius: 24,
    shadowColor: '#171717',
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    alignItems: 'center',
  },
  btn: {
    marginTop: 8,
    padding: 8,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    flexDirection: 'row',
    width: '80%',
  },
  btnText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
  money: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moneyText: {
    color: COLORS.gray,
    paddingLeft: 4,
    fontSize: SIZES.medium,
  },
  diffText: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
    marginTop: 8,
    fontWeight: '500',
  },
});

export default styles;
