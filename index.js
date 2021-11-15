import mongoose from 'mongoose';
import StudentModel from './models/students.js';
// import * as model from './moldels/usuario.js';

const studentsList = [
  { name: 'Pedro', lastName: 'Mei', age: 21, dni: '31155898', curso: '1A', nota: 7 },
  { name: 'Ana', lastName: 'Gonzalez', age: 32, dni: '27651878', curso: '1A', nota: 8 },
  { name: 'José', lastName: 'Picos', age: 29, dni: '34554398', curso: '2A', nota: 6 },
  { name: 'Lucas', lastName: 'Blanco', age: 22, dni: '30355874', curso: '3A', nota: 10 },
  { name: 'María', lastName: 'García', age: 36, dni: '29575148', curso: '1A', nota: 9 },
  { name: 'Federico', lastName: 'Perez', age: 41, dni: '320118321', curso: '2A', nota: 5 },
  { name: 'Tomas', lastName: 'Sierra', age: 19, dni: '38654790', curso: '2B', nota: 4 },
  { name: 'Carlos', lastName: 'Fernández', age: 33, dni: '26935670', curso: '3B', nota: 2 },
  { name: 'Fabio', lastName: 'Pieres', age: 39, dni: '4315388', curso: '1B', nota: 9 },
  { name: 'Daniel', lastName: 'Gallo', age: 25, dni: '37923460', curso: '3B', nota: 2 }
]

const main = async () => {
  try{
    const URL = 'mongodb://localhost:27017/students';
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Base de datos conectada')
    
    //cargar usuario

    // console.log('Create User');

    // const newUser = {
    //   name: 'Pepe',
    //   lastName: 'Mujica',
    //   email: 'pepe.mujica@mail.com',
    //   userName: 'pepe.mujica',
    //   password: 123456
    // }
     
    // const userSaved = new UserModel(newUser);
    // const response = await userSaved.save();
    // console.log({response});
    
    // Leer todos

    // console.log('READ ALL');
    // const userList = await UserModel.find({});
    
    // console.log({ userList });

    // editar usuario

    // console.log('UPDATE');
    // const response = await UserModel.updateOne(
    //   { _id: '619261c818483dd861335dbd'},
    //   {
    //     $set: { userName: 'pepe.grillo'}
    //   });

    // console.log({response});

    // console.log('DELETE');

    // const response = await UserModel.deleteOne({})
    // console.log({response});

    // studentsList.forEach(async stud =>  {
    //   const studentSaved = new StudentModel(stud);
    //   const response = await studentSaved.save();
    //   console.log({response});
      
    // });

    //1-a

    // const response = await StudentModel.find({}).sort({'name':1});
    
    //1-b
    // const response = await StudentModel.find({}).sort({'age':1}).limit(1);

    //1-c
    // const response = await StudentModel.find({curso: '2A'});

    //1-d
    // const response = await StudentModel.find({}).sort({'age':1}).skip(1).limit(1);

    //1-e
    // const response = await StudentModel.find({},{name:1,lastName:1,curso:1, _id:0}).sort({'lastName':-1})

    //1-f
    // const response = await StudentModel.find({nota:10})

    //1-g
    // const notas = await StudentModel.find({},{nota:1,_id:0});
    // const cantidad = await StudentModel.find({}).count(); 
    // let total = 0
    // notas.forEach(alumno => {
    //   total+=alumno.nota; 
    // });
    // const promedio = total/cantidad;

    // console.log('Promedio:',promedio);

    //1-h
    // const notas = await StudentModel.find({curso:'1A'},{nota:1,_id:0});
    // const cantidad = await StudentModel.find({curso:'1A'}).count(); 
    // let total = 0
    // notas.forEach(alumno => {
    //   total+=alumno.nota; 
    // });
    // const promedio = total/cantidad;

    // console.log('Promedio:',promedio);

    //1
    // const response = await StudentModel.updateOne(
    //     { name: 'Lucas', lastName: 'Blanco'},
    //     {
    //       $set: { dni: '20355875'}
    //     });


    //2
    // const response = await StudentModel.updateMany({},{ $set: { ingreso: false } });

    //3
    // const response = await StudentModel.updateMany({curso: '1A'},{$set:{ingreso: true}});

    //4
    // const response = await StudentModel.find({nota:{$gt: 4}},{__v:0,_id:0});

    //5
    // const response = await StudentModel.find({ingreso:true},{__v:0,_id:0});

    //6
    // const response = await StudentModel.deleteMany({ingreso:true});

    //7
    // const students = await StudentModel.find();
    // students.forEach(stud => {
    //   const timestamp = stud._id.toString().substring(0,8);
    //   const date = new Date(parseInt(timestamp,16)*1000).toLocaleString();
    //   console.log(stud,'-> Fecha de creación: ',date);      
    // });
    


    // console.log({response});


  } catch (error){
      console.error('DB error: ', error);
  }
}

main ();