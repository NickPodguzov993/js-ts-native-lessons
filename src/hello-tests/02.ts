const student = {
    id:1,
    name: 'Dimych',
    address: {
        city: 'Minsk',
        street: 'Surganova'
    },
    technologies: [
        {
          id:1,
          name: 'html'
        },
        {
            id:2,
            name: 'css'
        },
        {
            id:3,
            name: 'js'
        },
    ]
}

console.log(student.technologies[2].name)