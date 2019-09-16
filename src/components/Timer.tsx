import React from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';
import { Timer as RNTimer } from 'react-native-stopwatch-timer';
import { Colors, isAndroid } from '../constants';
import { Button } from './Button';
import { Row } from './Layout';

export interface TimerProps {}

export const Timer: React.FC<TimerProps> = () => {
  const [running, setRunning] = React.useState(false);
  const [start, setStart] = React.useState(false);
  const [reset, setReset] = React.useState(false);
  const [totalDuration, setTotalDuration] = React.useState(0);
  const [hour, setHour] = React.useState(0);
  const [min, setMin] = React.useState(0);
  const [sec, setSec] = React.useState(0);
  const [hours, setHours] = React.useState<number[]>([]);
  const [mins, setMins] = React.useState<number[]>([]);
  const [secs, setSecs] = React.useState<number[]>([]);

  React.useEffect(() => {
    setDigits();
  }, []);

  const handleStart = () => {
    setTotalDuration(totalDuration + hour * 360000 + min * 60000 + sec * 1000);
    setRunning(true);
    setStart(true);
    setReset(false);
  };

  const handlePause = () => {
    setStart(!start);
    setReset(false);
  };

  const handleCancel = () => {
    setRunning(false);
    setStart(false);
    setReset(true);
  };

  const handleFinish = () => {
    handleCancel();
  };

  const setDigits = () => {
    let h: number[] = [];
    let m: number[] = [];
    let s: number[] = [];
    for (let i = 0; i <= 99; i++) {
      h.push(i);
    }

    for (let i = 0; i < 60; i++) {
      m.push(i);
      s.push(i);
    }
    setHours(h);
    setMins(m);
    setSecs(s);
  };

  const handlePicker = (index: number, unit: 'h' | 'm' | 's') => {
    if (unit === 'h') {
      setHour(index);
    } else if (unit === 'm') {
      setMin(index);
    } else {
      setSec(index);
    }
  };

  const select = (
    <View style={styles.container}>
      <Row align="center" justify="space-between">
        <View style={styles.pickerContainer}>
          <Text style={isAndroid ? styles.androidPickerLabel : styles.pickerLabel}>Hours</Text>
          <Picker
            style={styles.picker}
            selectedValue={hour}
            itemStyle={styles.pickerItem}
            onValueChange={index => handlePicker(index, 'h')}
          >
            {hours.map((value, i) => (
              <Picker.Item label={`${value < 10 && '0'}${value}`} value={i} key={value} />
            ))}
          </Picker>
        </View>
        {!isAndroid && <Text style={styles.pickerItem}>:</Text>}
        <View style={styles.pickerContainer}>
          <Text style={isAndroid ? styles.androidPickerLabel : styles.pickerLabel}>Minutes</Text>
          <Picker
            style={styles.picker}
            selectedValue={min}
            itemStyle={styles.pickerItem}
            onValueChange={index => handlePicker(index, 'm')}
          >
            {mins.map((value, i) => (
              <Picker.Item label={`${value < 10 && '0'}${value}`} value={i} key={value} />
            ))}
          </Picker>
        </View>
        {!isAndroid && <Text style={styles.pickerItem}>:</Text>}
        <View style={styles.pickerContainer}>
          <Text style={isAndroid ? styles.androidPickerLabel : styles.pickerLabel}>Seconds</Text>
          <Picker
            style={styles.picker}
            selectedValue={sec}
            itemStyle={{ color: 'black', fontSize: 26 }}
            onValueChange={index => handlePicker(index, 's')}
          >
            {secs.map((value, i) => (
              <Picker.Item label={`${value < 10 && '0'}${value}`} value={i} key={value} />
            ))}
          </Picker>
        </View>
      </Row>
      <Button size="lg" style={{ width: 125 }} bgColor={Colors.primary} text="Start" onPress={handleStart} />
    </View>
  );

  const countdown = (
    <View style={styles.container}>
      <View style={StyleSheet.flatten([styles.timer, running ? styles.circle : undefined])}>
        <RNTimer
          totalDuration={totalDuration}
          start={start}
          reset={reset}
          options={options}
          handleFinish={handleFinish}
        />
      </View>
      <Row style={{ width: '100%' }} align="center" justify="space-around">
        <Button
          size="lg"
          style={{ width: 125 }}
          bgColor={!start ? Colors.primary : Colors.accent}
          color={!start ? 'black' : 'white'}
          text={!start ? 'Resume' : 'Pause'}
          onPress={handlePause}
        />
        <Button size="lg" style={{ width: 125 }} color="white" bgColor="black" text="Cancel" onPress={handleCancel} />
      </Row>
    </View>
  );

  return <View style={styles.container}>{running ? countdown : select}</View>;
};

const options = {
  container: {
    alignItems: 'center'
  },
  text: {
    fontSize: 40
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    width: '100%'
  },
  timer: {
    height: 300,
    justifyContent: 'center',
    width: 300
  },
  circle: {
    borderColor: Colors.primary,
    borderRadius: 300 / 2,
    borderWidth: 3
  },
  picker: {
    width: 100
  },
  pickerContainer: {
    alignItems: 'center',
    marginLeft: 10
  },
  pickerItem: {
    fontSize: 26
  },
  androidPickerLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 100
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
