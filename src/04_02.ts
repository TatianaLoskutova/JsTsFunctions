import {CityType, GovernmentBuildingType} from './03';

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter( h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThan = (buildings: Array<GovernmentBuildingType>, staffCount: number) => {
    return buildings.filter(b => b.staffCount > staffCount);
}