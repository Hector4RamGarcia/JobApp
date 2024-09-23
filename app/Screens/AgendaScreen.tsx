import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, DateData } from 'react-native-calendars';
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function AgendaScreen() {
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [selectedWeek, setSelectedWeek] = useState(generateWeek(new Date()));
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeTab, setActiveTab] = useState<'list' | 'map'>('list');

  const handleDateChange = (date: DateData) => {
    const selected = new Date(date.dateString);
    setSelectedDate(date.dateString);
    setSelectedWeek(generateWeek(selected));
    setShowCalendar(false);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleTabChange = (tab: 'list' | 'map') => {
    setActiveTab(tab);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={toggleCalendar}>
          <Text style={styles.headerText}>{formatMonthYear(selectedDate)}</Text>
          <AntDesign name={showCalendar ? "up" : "down"} size={18} color="black" />
        </TouchableOpacity>
        <View style={styles.headerLine} />
      </View>
      {showCalendar && (
        <Calendar
          onDayPress={handleDateChange}
          markedDates={{ [selectedDate]: { selected: true, selectedColor: '#00adf5' } }}
          locale={'es'}
        />
      )}
      <View style={styles.weekContainer}>
        {selectedWeek.map((day, index) => (
          <View
            key={index}
            style={[
              styles.dayBox,
              day.day === new Date().getDate() && styles.todayDayBox
            ]}
          >
            <Text>{day.weekday}</Text>
            <Text>{day.day}</Text>
          </View>
        ))}
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => handleTabChange('list')}
        >
          <Text style={[styles.navText, activeTab === 'list' && styles.activeNavText]}>Lista</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => handleTabChange('map')}
        >
          <Text style={[styles.navText, activeTab === 'map' && styles.activeNavText]}>Mapa</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navLineContainer}>
        <View style={styles.navLine} />
        <View
          style={[
            styles.activeNavLine,
            { left: activeTab === 'list' ? '1%' : '78%' } 
          ]}
        />
      </View>
      
      <View style={styles.listContainer}>
        <FlatList
          data={mockData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.serviceBox}>
              <View style={styles.serviceInfo}>
                <FontAwesome5 name="store" size={16} color="black" style={styles.icon} />
          <TouchableOpacity onPress={() => router.navigate('/Screens/DetailsServices')}>
            <Text style={styles.serviceTitle}>{item.business}</Text>
          </TouchableOpacity>
              </View>
              <View style={styles.serviceInfo}>
                <Ionicons name="time" size={16} color="black" style={styles.icon} />
                <Text>{item.date}</Text>
              </View>
              <View style={styles.serviceInfo}>
                <Text>{item.address}</Text>
              </View>
              <View style={styles.serviceInfo}>
                <Text>{item.service}</Text>
              </View>
              <View style={styles.serviceInfo}>
                <Text>{item.time}</Text>
              </View>
              <View style={styles.statusBox}>
                <Text style={styles.status}>{item.status}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const generateWeek = (selectedDate: Date) => {
  const week = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(selectedDate);
    date.setDate(date.getDate() - date.getDay() + i);
    week.push({
      weekday: date.toLocaleString('es', { weekday: 'short' }).toUpperCase(),
      day: date.getDate(),
    });
  }
  return week;
};

const formatMonthYear = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleString('es', { month: 'long', year: 'numeric' });
};

const mockData = [
  {
    id: 1,
    business: 'McDonald\'s',
    address: 'Calle 123, Ciudad',
    service: 'Limpieza de parrillas',
    date: 'Lunes 22 de Abril, 2024',
    time: '9:00 - 10:00',
    status: 'Agendado',
  },
  {
    id: 2,
    business: 'Starbucks',
    address: 'Av. Universidad 2229',
    service: 'Mantenimiento de equipos',
    date: 'Martes 23 de Abril, 2024',
    time: '10:00 - 12:00',
    status: 'Agendado',
  },
];

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFF' 
  },
  header: { 
    alignItems: 'center', 
    padding: 10 
  },
  headerButton: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  headerText: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginRight: 8 
  },
  headerLine: { 
    borderBottomWidth: 1, 
    borderBottomColor: '#E0E0E0', 
    width: '100%' 
  },
  weekContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginVertical: 10 
  },
  dayBox: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
  },
  todayDayBox: { 
    backgroundColor: '#E0F7FA' 
  },
  navBar: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginHorizontal: 30, 
    marginVertical: 10 
  },
  navButton: { 
    paddingVertical: 10, 
    alignItems: 'center' 
  },
  navText: { 
    fontSize: 16 
  },
  activeNavText: { 
    color: '#00adf5' 
  },
  navLineContainer: {
    position: 'relative', 
    height: 2, 
    marginHorizontal: 5,
    marginTop: -10, 
  },
  navLine: { 
    borderBottomWidth: 1, 
    borderBottomColor: '#D0D0D0', 
    width: '100%', 
  },
  activeNavLine: { 
    position: 'absolute', 
    bottom: 0, 
    width: '20%',  
    height: 2, 
    backgroundColor: '#00adf5',
  },
  listContainer: { 
    marginHorizontal: 20, 
    flex: 1 
  },
  serviceBox: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  serviceInfo: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 5 
  },
  icon: { 
    marginRight: 10 
  },
  serviceTitle: { 
    fontWeight: 'bold', 
    marginRight: 10 
  },
  statusBox: {
    padding: 5,
    backgroundColor: '#E0F7FA',
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  status: { 
    color: '#00796B', 
    fontWeight: 'bold' 
  },
});
