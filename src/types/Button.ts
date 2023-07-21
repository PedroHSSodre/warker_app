export interface ButtonProps {
    onPress: () => void;
    text: string;
    size?: "sm" | "md" | "lg";
    iconName?: any; 
}