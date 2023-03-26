import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  header: {
    fontSize: SIZES.xxLarge,
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '700',
  },
  subHeader: {
    marginTop: 10,
    fontSize: SIZES.large,
    textAlign: 'center',
    fontWeight: '500',
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
