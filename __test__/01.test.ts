import {StudentType} from '../src/02';
import {addSkill, doesStudentLiveIn, makeStudentActive} from '../src/01';


let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: 'Tanya',
        age: 35,
        isActive: false,
        address: {
            streetTile: 'Surganova 2',
            city:  {
                title: 'Minsk',
                countryTitle: 'Belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'React'
            },
        ]
    }
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);
})

test('Does student live in city?', () => {

    let result1 = doesStudentLiveIn(student, 'Moscow');
    let result2 = doesStudentLiveIn(student, 'Minsk');

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})