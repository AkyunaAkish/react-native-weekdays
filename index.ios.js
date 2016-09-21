import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Moment from 'moment'

import { DayItem } from './src/day-item'

class Weekdays extends Component {

  days() {
    const dayItems = []
    for (let i = 0; i < 7; i++) {
      const day = Moment().add(i, 'days').format('dddd')
      dayItems.push(
        <DayItem key={i}  day={day} daysUntil={i} />
      )
    }
    return dayItems
  }

  render() {
    return (
      <View style={styles.container}>
        {this.days()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

AppRegistry.registerComponent('weekdays', () => Weekdays)
