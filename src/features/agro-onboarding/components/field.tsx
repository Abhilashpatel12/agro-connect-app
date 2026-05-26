import { Text, TextInput, View } from 'react-native';

import { onboardingStyles as styles } from '../styles';

type FieldProps = {
  label: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  value: string;
  errorMessage?: string;
};

export function Field({ label, onChangeText, placeholder, value, errorMessage }: FieldProps) {
  return (
    <>
      <View style={[styles.formGroup, errorMessage ? styles.formGroupError : null]}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#8c8c8c"
        style={styles.input}
        value={value}
      />
      </View>
      {!!errorMessage && (
        <View style={styles.errorBlock}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      )}
    </>
  );
}
