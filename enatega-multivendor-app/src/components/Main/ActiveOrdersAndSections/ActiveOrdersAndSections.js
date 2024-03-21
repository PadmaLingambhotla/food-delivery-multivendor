import React, { useContext } from 'react'
import { View } from 'react-native'
import TextDefault from '../../Text/TextDefault/TextDefault'
import { alignment } from '../../../utils/alignment'
import ThemeContext from '../../../ui/ThemeContext/ThemeContext'
import { theme } from '../../../utils/themeColors'
import { scale } from '../../../utils/scaling'
import { useTranslation } from 'react-i18next'

function ActiveOrdersAndSections(props) {
  const { t } = useTranslation()

  const themeContext = useContext(ThemeContext)
  const currentTheme = theme[themeContext.ThemeValue]

  return (
    <View style={{
      ...alignment.MLmedium
    }}>
      <TextDefault
        numberOfLines={1}
        textColor={currentTheme.fontFourthColor}
        bolder
        H4
        >
        {props?.menuPageHeading}
      </TextDefault>
      <TextDefault
        Normal
        regular
        textColor={currentTheme.secondaryText}
        style={{
          marginTop: scale(5)
        }}>
        Most ordered right now.
      </TextDefault>
    </View>
  )
}

export default ActiveOrdersAndSections
