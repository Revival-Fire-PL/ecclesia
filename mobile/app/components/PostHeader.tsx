import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PostHeaderProps } from '../types';
import { styles } from '../index.styles';

export function PostHeader({ title, time }: PostHeaderProps) {
  return (
    <View style={styles.postHeader}>
      <View style={styles.postHeaderInfo}>
        <Text style={styles.postTitle}>{title}</Text>
        <Text style={styles.postTime}>{time}</Text>
      </View>
      <TouchableOpacity style={styles.shareButton}>
        <Ionicons name="share-outline" size={16} color="#B0B3B8" />
        <Text style={styles.shareButtonText}>Compartere</Text>
      </TouchableOpacity>
    </View>
  );
}
