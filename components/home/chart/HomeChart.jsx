import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

import styles from './homeChart.style';

const data = [
  {
    name: 'Air Condition',
    population: 41500000,
    color: 'pink',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Leater',
    population: 12800000,
    color: '#ffd8a7',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Refrigator',
    population: 8000000,
    color: '#cdffc5',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Others',
    population: 8538000,
    color: 'cyan',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

const chartConfig = {
  backgroundColor: 'white',
  backgroundGradientFrom: '#fbfbfb',
  backgroundGradientTo: '#fbfbfb',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 0,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#fbfbfb',
  },
};

const HomeChart = () => {
  let [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });

  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        width={Dimensions.get('window').width - 28}
        height={250}
        yAxisLabel='$'
        yAxisSuffix='k'
        yAxisInterval={1}
        chartConfig={chartConfig}
        bezier
        accessor='population'
        backgroundColor='transparent'
        decorator={() => {
          return tooltipPos.visible ? (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {data.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                  }}
                >
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: item.color,
                    }}
                  />
                  <Text style={{ marginLeft: 5 }}>{item.name}</Text>
                </View>
              ))}
            </View>
          ) : null;
        }}
        onDataPointClick={(data) => {
          let isSamePoint = tooltipPos.x === data.x && tooltipPos.y === data.y;

          isSamePoint
            ? setTooltipPos((previousState) => {
                return {
                  ...previousState,
                  value: data.value,
                  visible: !previousState.visible,
                };
              })
            : setTooltipPos({
                x: data.x,
                value: data.value,
                y: data.y,
                visible: true,
              });
        }}
      />
    </View>
  );
};

export default HomeChart;
