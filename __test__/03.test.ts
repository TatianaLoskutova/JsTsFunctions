import {CityType} from '../src/03';
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from '../src/01';
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThan} from '../src/04_02';
let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1,
                buildedAt: 2012, repaired: false,
                address: {
                    number: 100, street: {title: 'White Street'}
                }
            },
            {
                id: 2,
                buildedAt: 2008, repaired: false,
                address: {
                    number: 100, street: {title: 'Happy Street'}
                }
            },
            {
                id: 3,
                buildedAt: 2020, repaired: false,
                address: {
                    number: 101, street: {title: 'Happy Street'}
                }
            },
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL', budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

// 01. cоздайте в отдельном файле функцию, чтобы тесты прошли

test("Budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000);
})

// 01. Тесты должны пройти
test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[1].budget).toBe(400000);
})

// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be repaired', () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
});

// 03. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be destroyed', () => {
    demolishHousesOnTheStreet(city,'Happy Street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
});


// 04. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be reduced', () => {
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180);
});
// 05. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be increased', () => {
    toHireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(220);
});

test('Greeting message should be correct for city', () => {
    expect( createMessage(city) ).toBe('Hello New York citizens. I want you be happy. All 1000000 men');
});

// 06. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test.todo('List of streets titles of houses', () => {
    let happyHouses = getHousesOnTheStreet(city.houses, 'Happy Street');
    let whiteHouses = getHousesOnTheStreet(city.houses, 'White Street');


    expect(happyHouses.length).toBe(2);
    expect(whiteHouses.length).toBe(1);
});

// 07. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('Buildings with correct sraff count', () => {
    let buildings =
        getBuildingsWithStaffCountGreaterThan(
            city.governmentBuildings,
            500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION');
});