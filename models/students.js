import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const students = 'students';

const StudentsSchema = new Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: true},
    dni: {type: String, required: true, unique: true},
    curso: {type: String, required: true},
    nota: {type: Number, required: true},
    ingreso: {type: Boolean}
})

const StudentModel = model(students, StudentsSchema);

export default StudentModel;