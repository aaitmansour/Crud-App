import { Component, OnInit } from '@angular/core';
import { student } from './student.module';
import { studentService } from '.student/studentService';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class STUDENTComponent implements OnInit {
  student: student[] | undefined;
  columnDefs: Array<object> | undefined;
  rowData: student[] | undefined;

  constructor(private sudentService: studentService) { }

  ngOnInit() {
    this.sudentService.getCustomers().subscribe((student: student[] | undefined) => {
      this.student = student;
      this.createColumnDefinitions();
      this.rowData = [...this.sudentService];
      console.log(this.rowData);
    });
  }

  createColumnDefinitions(): void {
    this.columnDefs = new Array();

    // tslint:disable-next-line: forin
    for (const property in this.sudentService[0]) {
      const indexOfFirstUpperCaseLetter = property.split('').findIndex(letter => letter.charCodeAt(0) < 97);
      const hasTwoWords = indexOfFirstUpperCaseLetter > -1;
      let headerName = property[0].toUpperCase() + property.slice(1, hasTwoWords ? indexOfFirstUpperCaseLetter : property.length);
      headerName = hasTwoWords ? `${headerName} ${property.slice(indexOfFirstUpperCaseLetter)}` : headerName;
      const columnDef = {
        headerName,
        field: property,
        sortable: true,
        filter: true,
        checkboxSelection: property === 'studentID' ? true : false
      };
      this.columnDefs.push(columnDef);
    }
  }

}
