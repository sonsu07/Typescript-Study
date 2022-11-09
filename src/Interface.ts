interface Student {
    name: string
}

interface Teacher extends Student {
    age: number
}

let student: Student = {
    name: 'Lee'
}

let teacher: Teacher = {
    name: 'Lee',
    age: 28
}