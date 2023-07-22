import { CityDto } from "../../../types/City";

import { ListItemContainer, ListItemText } from "./styled";

interface ListItemProps { 
    city: CityDto, 
    onPress: (city: CityDto) => void 
}

function ListItem ({ city, onPress }: ListItemProps) {
    return (
        <ListItemContainer 
            onPress={() => onPress(city)}
        >
            <ListItemText>{city.name}</ListItemText>
        </ListItemContainer>
    )
}

export default ListItem