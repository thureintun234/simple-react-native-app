import React, { useState } from 'react';
import {
  Modal,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { COLORS, SIZES } from '../../../constants';
import { convertToMonthDay } from '../../../utils/dateConverter';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import styles from './chartDate.style';

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const months = [
  'January',
  'Febraury',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const selectData = [
  { iconName: 'plumbing', title: 'Energy' },
  { iconName: 'attach-money', title: 'Cost' },
  { iconName: 'clean-hands', title: 'Carbon Footprint' },
];

const ChartDate = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('Energy');

  const toggleCalendarModal = () => {
    setShowCalendar(!showCalendar);
  };

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date?.toString());
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date?.toString());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Charts</Text>

      <Modal visible={showCalendar} animationType='slide'>
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeaderWrapper}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={toggleCalendarModal}>
                <Text style={styles.modalClose}>X</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleCalendarModal}>
                <Text style={styles.modalText}>CONFIRM</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.modalCurrentDate}>
              <Text style={{ color: COLORS.gray, fontSize: SIZES.large }}>
                SELECT DATE RANGE
              </Text>
              <Text style={styles.modalCurrentText}>
                {convertToMonthDay(selectedStartDate)} -{' '}
                {convertToMonthDay(selectedEndDate)}
              </Text>
            </View>
          </View>

          <View style={styles.datePickingContainer}>
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={new Date(2000, 1, 1)}
              maxDate={new Date(2050, 6, 3)}
              weekdays={weekDays}
              months={months}
              previousTitle=''
              nextTitle=''
              todayBackgroundColor={COLORS.secondary}
              selectedDayColor={COLORS.primary}
              selectedDayTextColor={COLORS.white}
              selectedRangeStyle={{ backgroundColor: '#071004' }}
              selectedRangeStartStyle={{
                backgroundColor: COLORS.primary,
                borderCurve: 'circular',
                borderRadius: 30,
              }}
              selectedRangeEndStyle={{
                backgroundColor: COLORS.primary,
                borderCurve: 'circular',
                borderRadius: 30,
              }}
              scaleFactor={375}
              textStyle={{
                color: COLORS.gray,
                fontSize: SIZES.large,
                lineHeight: 40,
              }}
              scrollable
              horizontal={false}
              height={1000}
              onDateChange={onDateChange}
            />
          </View>
        </SafeAreaView>
      </Modal>

      <TouchableOpacity
        onPress={toggleCalendarModal}
        style={styles.selectContainer}
      >
        <AntDesign name='calendar' size={24} color={COLORS.primary} />
        <View>
          <Text>Select Date</Text>
          <Text
            style={{
              fontSize: SIZES.xLarge,
              color: COLORS.primary,
              fontWeight: '500',
            }}
          >
            {selectedStartDate === null && selectedEndDate === null
              ? 'Today'
              : convertToMonthDay(selectedStartDate) ??
                '' - convertToMonthDay(selectedEndDate) ??
                ''}
          </Text>
        </View>
        <AntDesign name='down' size={24} color='black' />
      </TouchableOpacity>

      <View style={styles.selectContainer}>
        <FlatList
          data={selectData}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedTitle(item.title)}
              style={styles.titleBtn(selectedTitle, item.title)}
            >
              <MaterialIcons
                name={item.iconName}
                size={24}
                color={
                  selectedTitle === item.title ? COLORS.white : COLORS.primary
                }
              />
              <Text style={styles.titleText(selectedTitle, item.title)}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        />
      </View>
    </View>
  );
};

export default ChartDate;
