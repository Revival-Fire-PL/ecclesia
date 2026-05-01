import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MediaTileProps } from '../types';
import { styles } from '../index.styles';

export function MediaTile({ imagePath, iconName, title, description, onPress }: MediaTileProps) {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.mediaTile} onPress={onPress}>
      <Image 
        source={imagePath} 
        style={styles.mediaTileImage}
        resizeMode="cover"
      />
      <View style={styles.mediaTileContent}>
        <View style={styles.mediaTileHeader}>
          <View style={[styles.mediaTileIconBadge, { backgroundColor: 'transparent' }]}>
            <Ionicons name={iconName as any} size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.mediaTileTitle}>{title}</Text>
        </View>
        <Text style={styles.mediaTileDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}
