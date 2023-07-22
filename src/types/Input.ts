import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import { LocationDto } from "./Location";

export interface InputTextProps {
    placeholder?: string;
    value:  string;
    onChangeText: (text: string) => void;
    iconName?: any;
    onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

export interface CitiesAutoCompleteProps {
    selectAction: (Location: LocationDto) => void;
}