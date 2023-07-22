import { useEffect, useState } from "react";
import { FlatList } from "react-native";

import * as CitiesService from "../../services/Cities";

import InputText from "../InputText";
import ListItem from "./ListItem";

import { Container } from "./styled";

import { CityDto } from "../../types/City";
import { CitiesAutoCompleteProps } from "../../types/Input";

function CitiesAutoComplete({ selectAction }: CitiesAutoCompleteProps) {
    const [cities, setCities] = useState<CityDto[]>([]);
    const [filteredCities, setFilteredCities] = useState<CityDto[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        getAutoCompleteData();
    }, []);

    const getAutoCompleteData = async () => {
        const cities = await CitiesService.getCities(50);

        setCities(cities.data);
    }

    const handleInputValueAndFilterCities = (text: string) => {
        const citiesFiltered = cities.filter(city => city.name.includes(text));
        
        setInputValue(text);
        setFilteredCities(citiesFiltered);
        if(!showList) setShowList(true);
    }

    const handleCity = (city: CityDto) => {
        const location = { 
            coords: { 
                lat: city.coords.latitude, 
                lon: city.coords.longitude 
            }
        }

        selectAction(location);
        setShowList(false);
    };
    
    return (
        <Container
            showList={showList}
        >
            <InputText 
                iconName="search-outline"
                placeholder="Procure por uma cidade"
                value={inputValue}
                onChangeText={handleInputValueAndFilterCities}
                onBlur={() => setShowList(false)}
            />
            {
                showList ? (
                    <FlatList
                        keyboardShouldPersistTaps="handled"
                        data={filteredCities}
                        onEndReached={() => console.log("no final")}
                        renderItem={({ item: city }) => (
                                <ListItem 
                                    city={city} 
                                    onPress={handleCity}
                                />
                            )
                        }
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(city) => city.id.toString()}
                    />
                ) : null
            }
        </Container>
    )
}

export default CitiesAutoComplete; 