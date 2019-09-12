declare module 'react-native-countdown-component' {
  type Times = 'D' | 'H' | 'M' | 'S';

  interface CountDownProps extends ViewProps {
    id?: string;
    digitStyle?: StyleProp<ViewStyle>;
    digitTxtStyle?: StyleProp<ViewStyle>;
    onChange?: () => void;
    onFinish?: () => void;
    onPress?: () => void;
    running: boolean;
    separatorStyle?: StyleProp<ViewStyle>;
    showSeparator: boolean;
    size?: number;
    style?: StyleProp<ViewStyle>;
    timeToShow?: Times[];
    timeLabels?: {
      d?: string | null;
      m?: string | null;
      h?: string | null;
      s?: string | null;
    };
    timeLabelStyle?: StyleProp<ViewStyle>;
    until: number;
  }
  export default class CountDown extends React.Component<CountDownProps> {}
}
