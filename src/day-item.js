import React, {
  Component,
  Text
} from 'react-native'

export class DayItem extends Component {

  color() {
    let opacity = 1 / this.props.daysUntil
    if (this.props.daysUntil === 0) opacity = 1
    return `rgba(0,0,0, ${opacity})`
  }

  fontWeight() {
    const weight = 7 - this.props.daysUntil
    return weight * 100
  }

  fontSize() {
    return 60 - 6 * this.props.daysUntil
  }

  lineHeight() {
    return 70 - 4 * this.props.daysUntil
  }

  style() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight().toString(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  }

  render (){
    return (
      <Text style={this.style()}>
        {this.props.day}
      </Text>
    )
  }
}
