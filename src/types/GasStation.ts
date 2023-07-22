import { CoordinatesDto } from "./Location";

export interface GasStationDto {
    id: number;
    repository: number;
    coords: CoordinatesDto;
}