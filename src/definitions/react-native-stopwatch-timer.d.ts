declare module 'react-native-stopwatch-timer' {
  interface CommonProps extends ViewProps {
    msecs?: boolean;
    options?: StyleProp<ViewStyle>;
    start: boolean;
    reset: boolean;
    getTime?: (time: string) => void;
  }

  interface StopwatchProps extends CommonProps {
    startTime?: number;
    laps?: boolean;
  }

  interface TimerProps extends CommonProps {
    totalDuration?: number;
    handleFinish: () => void;
  }
  export class Stopwatch extends React.Component<StopwatchProps> {}
  export class Timer extends React.Component<TimerProps> {}
}
