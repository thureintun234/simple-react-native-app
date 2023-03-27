import { StyleSheet } from 'react-native';

import { COLORS, SHADOWS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: { margin: 4 },
  header: {
    textAlign: 'center',
    fontSize: SIZES.large,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 20,
  },
  selectContainer: {
    backgroundColor: COLORS.white,
    margin: 10,
    borderRadius: 20,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleBtn: (name, item) => ({
    // padding: 10,
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.medium,
    backgroundColor: name === item ? COLORS.primary : COLORS.white,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  }),
  titleText: (name, item) => ({
    fontSize: SIZES.small,
    color: name === item ? COLORS.white : COLORS.primary,
    marginLeft: 6,
  }),

  /* ========== Datepicker modal style ========= */
  modalContainer: {
    padding: 40,
    width: '100%',
    height: '100%',
  },
  modalHeaderWrapper: {
    backgroundColor: COLORS.dateHeaderBackColor,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: 40,
    paddingTop: 40,
  },
  modalClose: {
    fontSize: SIZES.xLarge,
    color: COLORS.white,
  },
  modalText: {
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  modalCurrentDate: {
    margin: 10,
  },
  modalCurrentText: {
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    fontWeight: '600',
    marginTop: 10,
  },
  datePickingContainer: {
    backgroundColor: COLORS.datePickingBackColor,
    color: COLORS.white,
    height: '100%',
    lineHeight: 20,
    fontSize: SIZES.large,
  },
});

export default styles;
