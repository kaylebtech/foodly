import Zocial from '@expo/vector-icons/Zocial';
import { View, TextInput, Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function InputComponent({
  value,
  onChangeText,
  placeholder,
  leftIcon = { family: FontAwesome, name: 'user' },
  rightIcon,              
  onRightPress,          
  secureTextEntry = false,
  keyboardType,          
  style,
}) {
  const Left = leftIcon?.family || FontAwesome;
  const Right = rightIcon?.family || FontAwesome;

  return (
    <View style={[{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#0D0D0F',
      borderRadius: 12,
      paddingHorizontal: 14,
      height: 56,
      gap: 10,
      marginVertical: 5
    }, style]}>
      {leftIcon && <Left name={leftIcon.name} size={18} color="#A9A9B0" />}

      <TextInput
        style={{ flex: 1, color: '#fff', fontSize: 14, fontWeight: '500' }}
        placeholder={placeholder}
        placeholderTextColor="#9BA0A6"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />

      {rightIcon && (
        <Pressable onPress={onRightPress} hitSlop={10}>
          <Right name={rightIcon.name} size={16} color="#A9A9B0" />
        </Pressable>
      )}
    </View>
  );
}