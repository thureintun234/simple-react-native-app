import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    height: '100%',
  },
  headerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  header: {
    fontSize: SIZES.xxxLarge,
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    padding: 8,
  },
  name: {
    color: COLORS.primary,
    fontSize: SIZES.xxLarge,
    marginTop: 20,
  },
  textContainer: {
    flexDirection: 'row',
    width: '90%',
    padding: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.gray2,
    marginTop: 25,
  },
  textInput: {
    color: COLORS.secondary,
    fontSize: SIZES.medium,
    width: '73%',
    alignSelf: 'center',
  },
  textIcon: {
    marginRight: 12,
    width: '10%',
    alignSelf: 'flex-start',
  },
  textIconBtn: {
    width: '100%',
    color: COLORS.secondary,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
  },
  checkbox: {
    margin: 8,
  },
  checkboxText: {
    color: COLORS.primary,
  },
  loginBtn: {
    width: '56%',
    padding: 8,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    marginTop: 10,
  },
  loginText: {
    color: COLORS.white,
    fontSize: SIZES.large,
    textAlign: 'center',
  },
});

export default styles;
