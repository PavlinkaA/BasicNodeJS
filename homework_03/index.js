import { EventEmitter } from "events";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';
const eventEmitter = new EventEmitter();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



let pathToSave = path.join(__dirname, "greeting_log.txt");
console.log(pathToSave);


eventEmitter.on("registerStudents", (student) => {
   console.log(`"Hello" ${student.studentFullname}`)
   fs.appendFileSync("greeting_log.txt", `${student.studentFullname}\n`);
});

const createStudent = (studentFullname, studentEmail, studentPassword) => {
   const student = {
      id: uuidv4(),
      studentFullname: studentFullname,
      studentEmail: studentEmail,
      studentPassword
   }

   if (fs.existsSync('students.json')) {
      const readStudentsJSON = fs.readFileSync("students.json", { encoding: "utf-8" });
      const students = JSON.parse(readStudentsJSON);
      students.push(student);
      let data = JSON.stringify(students, null, 2);
      fs.writeFileSync('students.json', data);
   } else {
      const students = [];
      students.push(student);
      let data = JSON.stringify(students, null, 2);
      fs.writeFileSync('students.json', data);
   }

   eventEmitter.emit("registerStudents", student)
}

/*
const filterStudents = await fileService.readFile("./students.json");
const studentsNew = JSON.parse(filterStudents);
if 
*/

createStudent("PavlinkaAtanasova", "pavlinkaatanasova@yahoo.com", "1234");

export const readStudent = (path, studentId) => {
   if (fs.existsSync(path)) {
      const readStudentsJSON = fs.readFileSync(path, { encoding: "utf-8" });
      const students = JSON.parse(readStudentsJSON);
      let student;
      // for(let i = 0; i < students.length; i++) {
      //    if(students[i].id === studentId) {
      //       student = students[i];
      //    }
      // }
      student = students.find(student => student.id === studentId);
      if(student) {
         console.log(student) 
      } else {
         console.log(`Studen with id: ${studentId} not found`)
      }

      
   } else {
      console.log(`${path} does not exist`)
      return 
   }
}
readStudent("students.json", "cd1c1eb1-8dcc-421a-a4bc-3c3ed7e44061")

export const deleteStudent = (path, studentId) => {
   if (fs.existsSync(path)) {
      const readStudentsJSON = fs.readFileSync(path, { encoding: "utf-8" });
      const students = JSON.parse(readStudentsJSON);
      let studentToRemoveIndex;
      let student;
      // for(let i = 0; i < students.length; i++) {
      //    if(students[i].id === studentId) {
      //       studentToRemoveIndex = i;
      //       student = students[i];
      //    } else {
      //       console.log(`Studen with id: ${studentId} does not exist`)
      //       return;
      //    }
      // }
      studentToRemoveIndex = students.findIndex(student => student.id === studentId);
      if(studentToRemoveIndex === -1) {
             console.log(`Studen with id: ${studentId} does not exist1`)
            return;
      }

      student = students[studentToRemoveIndex];
      students.splice(studentToRemoveIndex, 1);

      let data = JSON.stringify(students, null, 2);
      fs.writeFileSync(path, data);
      console.log(`Studen with id: ${student.id} was successfully deleted`)
   } else {
      console.log(`${path} does not exist`)
      return 
   }
}
deleteStudent("students.json", "55e49ece-c39c-4087-a33c-8d2893a74a0f")
