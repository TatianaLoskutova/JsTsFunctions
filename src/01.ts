import {StudentType} from './02';
import {CityType, GovernmentBuildingType, HouseType} from './03';

// обычные будем писать как деклрацию
export function sum(a: number, b: number) {
    return a + b;
}

// callback функции стрелочным видом
export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}

export function toFireStaff(building: GovernmentBuildingType, staffCountToFire: number) {
    building.staffCount -= staffCountToFire;
}

export const toHireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire;
}

export const createMessage = (props: CityType) => {
    return `Hello ${props.title} citizens. I want you be happy. All ${props.citizensNumber} men`
}