import React, { useState } from 'react';
import {
  Modal,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { COLORS, SIZES } from '../../../constants';
import { convertToMonthDay } from '../../../utils/dateConverter';
import { AntDesign } from '@expo/vector-icons';
import styles from './applicationDate.style';

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

const ApplicationDate = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

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
      <Text style={styles.header}>Appliances</Text>

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
    </View>
  );
};

export default ApplicationDate;
