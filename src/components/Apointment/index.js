import React from 'react'
import {RectButton} from 'react-native-gesture-handler';
import {View,Text,Image} from 'react-native'
import {styles} from './styles'
import { categoriesItems } from '../../utils/categoriesItems';
import { theme } from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';

//imports components
import {GuildIcon} from '../GuildIcon'

//imports images svg
import ImagePlayerSvg from '../../assets/player.svg'
import ImageCalendarSvg from '../../assets/calendar.svg'



export function Apointment({data,...rest}){
    const [category] = categoriesItems.filter(item => item.id === data.category )
    const {owner} = data.guild;
    const { primary, on, secondary50, secondary70 } = theme.colors;
    return (
      <RectButton {...rest}>
      <View style={styles.container}>
        <LinearGradient 
          style={styles.guildIconContainer}
          colors={[secondary50, secondary70]}
        >
          <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              { data.guild.name }
            </Text>

            <Text style={styles.category}>
              { category.title }
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              < ImageCalendarSvg/>

              <Text style={styles.date}>
                { data.date }                
              </Text>
            </View>

            <View style={styles.playersInfo}>
              <ImagePlayerSvg fill={ owner ? primary : on}/>

              <Text style={[
                styles.player, 
                { color: owner ? primary : on }
              ]}>
                { owner ? 'Anfitrião' : 'Visitante' }
              </Text>
            </View>          
          </View>
        </View>
      </View>
    </RectButton>
    )
}