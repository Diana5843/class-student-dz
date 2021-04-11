//Реализуйте класс Student (Студент), который будет наследовать от класса User. 
//Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). 
//Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. 
//Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). 
//Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

class User{
   /**
    * 
    * @param {string} name 
    * @param {string} surname 
    * @param {number} year 
    */
    constructor(name, surname, year){
        this.name = name;
        this.surname = surname;
        this.year = year;
    }
    set name(newName){
        if(typeof newName !== 'stri
        if(courseStudent > 5){
            не удалось отправить некоторые ссылки в «https://github.com/Diana5843/class-student-dz.git»ng'){
            throw new TypeError('Error type');
        }
        this._name = newName;
    }
    get name(){
        return this._name;
    }

    set surname(newSurname){
        if(typeof newSurname !== 'string'){
            throw new TypeError('Error type');
        }
        this._surname = newSurname;
    }
    get surname(){
        return this._surname;
    }

    set year(newYear){
        if(typeof newYear !== 'number'){
            throw new TypeError('Error type');
        }
        this._year = newYear;
    }
    get year(){
        return this._year;
    }


    get fullName(){
        return `${this.name} ${this.surname}`;
    }

    get course(){
        const date1 = new Date().getFullYear();
        const courseStudent = date1 - this.year;
        if(courseStudent > 5){
            throw new TypeError('Студент еще не поступил.');
        }
        return `Студент учится на ${courseStudent} курсе.`;
    }
}

class Student extends User{
    constructor(name, surname, year){
      super(name, surname, year);
    }   
}

const student = new Student('bob', 'smith', 2015);
const nameStudent = student.fullName;
console.log(nameStudent);
const courseStudent = student.course;
console.log(courseStudent);