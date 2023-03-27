import { StyleSheet } from 'react-native';

import { COLORS, SHADOWS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    margin: 10,
    borderRadius: 20,
    padding: 16,
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: '500',
  },
  lineChart: {
    marginLeft: 10,
    marginTop: 12,
  },
  dataContainer: {
    marginTop: 10,
  },
  dataTitle: {
    fontSize: SIZES.medium,
    fontWeight: '500',
    marginTop: 20,
  },
  dataList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default styles;
