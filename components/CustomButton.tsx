import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

interface ButtonProps {
  iconName: string;
  text: string;
  onPress: () => void;
  iconType?: 'FontAwesome' | 'FontAwesome5';
}

const CustomButton: React.FC<ButtonProps> = ({ iconName, text, onPress, iconType = 'FontAwesome' }) => {
  const IconComponent = iconType === 'FontAwesome5' ? FontAwesome5 : FontAwesome;

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.iconAndText}>
          <IconComponent name={iconName} size={16} color={Colors.white} style={styles.icon} />
          <Text style={styles.text}>{text}</Text>
        </View>
        <FontAwesome name="chevron-down" size={12} color={Colors.lightGray} style={styles.chevron} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width:'46%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  content: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  chevron: {
    marginLeft: 'auto',  // Ensures the chevron icon is aligned to the right
  },
});

export default CustomButton;
