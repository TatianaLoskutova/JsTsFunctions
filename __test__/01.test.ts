import {StudentType} from '../src/02';
import {addSkill} from '../src/01';


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

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, 'JS');

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined();

})