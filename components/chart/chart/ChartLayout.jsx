import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import styles from './chartLayout.style';
import { COLORS } from '../../../constants';

const data = [50, 70, 80, 90, 100];
const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
};

const calculateSlope = () => {
  const slopes = data.slice(1).map((d, i) => d - data[i]);
  const positiveSlopes = slopes.filter((s) => s > 0);
  const negativeSlopes = slopes.filter((s) => s < 0);

  if (positiveSlopes.length > negativeSlopes.length) {
    return { color: () => 'green' };
  } else {
    return { color: () => 'red' };
  }
};

const ChartLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>290.17 kWh</Text>

      {/* line chart */}
      <View style={styles.lineChart}>
        <LineChart
          data={{
            labels: [],
            datasets: [
              {
                data: data,
              },
            ],
          }}
          width={300}
          height={220}
          yAxisSuffix=''
          c
          chartConfig={{ ...chartConfig, ...calculateSlope() }}
          bezier
        />
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.dataTitle}>Comparison to previous period</Text>

        <View style={styles.dataList}>
          <Text style={{ color: COLORS.gray }}>Data Period</Text>
          <Text>5-Feb to 28-Feb-2023</Text>
        </View>

        <View style={styles.dataList}>
          <Text style={{ color: COLORS.gray }}>Total of Previous period</Text>
          <Text>259.06 kWh</Text>
        </View>

        <View style={styles.dataList}>
          <Text style={{ color: COLORS.gray }}>% change</Text>
          <Text style={{ color: 'red' }}>+ 12.01%</Text>
        </View>

        <Text style={styles.dataTitle}>Daily Average this period</Text>

        <View style={styles.dataList}>
          <Text style={{ color: COLORS.gray }}>Average</Text>
          <Text>12.09 kWh</Text>
        </View>
      </View>
    </View>
  );
};

export default ChartLayout;
