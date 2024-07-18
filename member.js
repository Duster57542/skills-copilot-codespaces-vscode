function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        salary: 1000,
        address: {
            city: 'New York',
            country: 'USA'
        },
        getSkills: function() {
            return this.skills;
        },
        getSalary: function() {
            return this.salary;
        }
    };
    return member;
}