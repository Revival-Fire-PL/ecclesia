import { View, Text, Image, ScrollView } from 'react-native';
import { PostHeader } from '../components/PostHeader';
import { styles } from '../index.styles';

export function LatestScreen() {
  return (
    <View style={styles.feedContainer}>
      <ScrollView 
        style={styles.feedScrollView}
        contentContainerStyle={styles.feedContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bible Verse of the Day */}
        <View style={styles.facebookPost}>
          <PostHeader title="Lorem Ipsum" time="Hodie" />
          <Image 
            source={require('@assets/images/post-image.png')} 
            style={styles.postImage}
            resizeMode="contain"
          />
          <Text style={styles.postContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Text style={styles.bibleReferencePost}>Dolor Sit Amet 10, 14</Text>
        </View>

        {/* Short Meditation */}
        <View style={styles.facebookPost}>
          <PostHeader title="Consectetur" time="Heri" />
          <Text style={styles.postContent}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
        </View>

        {/* Photos from Recent Gathering */}
        <View style={styles.facebookPost}>
          <PostHeader title="Adipiscing Elit" time="Ante diem II" />
          <View style={styles.photoGridPost}>
            <View style={styles.photoRow}>
              <Image 
                source={require('@assets/images/post-placeholder-1.jpg')} 
                style={styles.photoItemLarge}
                resizeMode="contain"
              />
            </View>
            <View style={styles.photoRow}>
              <Image 
                source={require('@assets/images/post-placeholder-2.jpg')} 
                style={styles.photoItemSmall}
                resizeMode="cover"
              />
              <Image 
                source={require('@assets/images/post-placeholder-3.jpg')} 
                style={styles.photoItemSmall}
                resizeMode="cover"
              />
              <Image 
                source={require('@assets/images/post-placeholder-4.jpg')} 
                style={styles.photoItemSmall}
                resizeMode="cover"
              />
              <View style={styles.photoItemContainer}>
                <Image 
                  source={require('@assets/images/post-placeholder-1.jpg')} 
                  style={styles.photoItemFull}
                  resizeMode="cover"
                />
                <View style={styles.photoOverlay}>
                  <Text style={styles.photoOverlayText}>+1</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Short Info */}
        <View style={styles.facebookPost}>
          <PostHeader title="Sed Eiusmod" time="Ante diem II" />
          <Text style={styles.postContent}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum tempor.
          </Text>
        </View>

        {/* Another Info Card */}
        <View style={styles.facebookPost}>
          <PostHeader title="Incididunt Ut" time="Ante diem V" />
          <Text style={styles.postContent}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
