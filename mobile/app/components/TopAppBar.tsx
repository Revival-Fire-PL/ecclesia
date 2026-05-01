import { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mockNotifications } from '../constants/mockData';
import { styles } from '../index.styles';

export function TopAppBar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications] = useState(mockNotifications);

  const handleSearch = (query: string) => {
    // Search functionality - can be implemented to search through app content
    console.log('Searching for:', query);
  };

  return (
    <SafeAreaView edges={['top']} style={styles.topBar}>
      <View style={styles.topBarContent}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('@assets/images/logo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.topBarIcons}>
          <TouchableOpacity 
            style={styles.topBarIcon}
            onPress={() => setSearchVisible(true)}
          >
            <Ionicons name="search" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.topBarIcon}
            onPress={() => setNotificationVisible(!notificationVisible)}
          >
            <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
            {notifications.length > 0 && (
              <View style={styles.notificationBadge}>
                <Text style={styles.notificationBadgeText}>{notifications.length}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Modal */}
      <Modal
        visible={searchVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setSearchVisible(false)}
      >
        <Pressable 
          style={styles.modalOverlay}
          onPress={() => setSearchVisible(false)}
        >
          <Pressable style={styles.searchModal} onPress={(e) => e.stopPropagation()}>
            <View style={styles.searchHeader}>
              <TextInput
                style={styles.searchInput}
                placeholder="Quaerere in app..."
                placeholderTextColor="#888888"
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoFocus={true}
                onSubmitEditing={() => handleSearch(searchQuery)}
              />
              <TouchableOpacity 
                onPress={() => setSearchVisible(false)}
                style={styles.searchCloseButton}
              >
                <Ionicons name="close" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.searchResults}>
              {searchQuery.length > 0 ? (
                <Text style={styles.searchResultsText}>
                  Resultatus quaerere pro: "{searchQuery}"
                </Text>
              ) : (
                <Text style={styles.searchResultsText}>
                  Scribe verbum ad quaerendum
                </Text>
              )}
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>

      {/* Notification Dropdown */}
      {notificationVisible && (
        <View style={styles.notificationDropdown}>
          <View style={styles.notificationHeader}>
            <Text style={styles.notificationHeaderText}>Notificationes</Text>
            <TouchableOpacity onPress={() => setNotificationVisible(false)}>
              <Ionicons name="close" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.notificationList}>
            {notifications.map((notification) => (
              <TouchableOpacity 
                key={notification.id}
                style={styles.notificationItem}
                onPress={() => setNotificationVisible(false)}
              >
                <View style={styles.notificationItemContent}>
                  <Text style={styles.notificationItemText}>{notification.text}</Text>
                  <Text style={styles.notificationItemTime}>{notification.time}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
}
