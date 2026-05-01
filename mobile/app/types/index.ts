export interface PostHeaderProps {
  title: string;
  time: string;
}

export interface MediaTileProps {
  imagePath: any;
  iconName: string;
  title: string;
  description: string;
  onPress?: () => void;
}

export interface Notification {
  id: number;
  text: string;
  time: string;
}
