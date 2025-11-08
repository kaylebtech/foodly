// PhoneInput.jsx
import { View, Text, TextInput, Pressable } from 'react-native';
import CountryPicker, { getCallingCode } from 'react-native-country-picker-modal';
import { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function PhoneInput({ value, onChangeText }) {
  const [country, setCountry] = useState({ cca2: 'NG', callingCode: '234' });
  const [visible, setVisible] = useState(false);

  const onSelect = async (c) => {
    const code = await getCallingCode(c.cca2);
    setCountry({ cca2: c.cca2, callingCode: code });
    setVisible(false);
  };

  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#0D0D0F',
      borderRadius: 12,
      paddingHorizontal: 14,
      height: 56,
      gap: 10,
      marginVertical: 5
    }}>

      <Pressable
        onPress={() => setVisible(true)}
        style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
        hitSlop={10}
      >
        <CountryPicker
          countryCode={country.cca2}
          withFilter
          withFlag
          withCallingCode
          withEmoji
          visible={visible}
          onClose={() => setVisible(false)}
          onSelect={onSelect}
          containerButtonStyle={{ display: 'flex' }}
        />
        <Text style={{ color: '#fff', fontWeight: '600' }}>+{country.callingCode}</Text>
        <FontAwesome name="chevron-down" size={14} color="#A9A9B0" />
      </Pressable>


      <View style={{ width: 1, height: 24, backgroundColor: '#232429' }} />


      <TextInput
        style={{ flex: 1, color: '#fff', fontSize: 14, fontWeight: '500' }}
        placeholder="000 0000 000"
        placeholderTextColor="#9BA0A6"
        keyboardType="phone-pad"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}