import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../student/list-student/model/Student';
import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public readonly API: string = 'http://localhost:8080/student';
  public readonly API1: string = 'http://localhost:8080/teacher';
  public readonly API2: string = 'http://localhost:8080/thesis';

  constructor(
    public http: HttpClient
  ) {
  }

  getAllThesisService(): Observable<any> {
    return this.http.get(this.API2 + '/list2');
  }

  getAllTeacherService(): Observable<any> {
    return this.http.get(this.API1 + '/list1');
  }
  getAllStudentService(): Observable<any> {
    return this.http.get(this.API + '/list');
  }

  addNewStudentService(studentDTO: Student): Observable<any> {
    return this.http.post(this.API + '/addNew', studentDTO);
  }

  getStudentById(studentId): Observable<any> {
    return this.http.get(this.API + '/findStudentById/' + studentId);
  }

  prepareDeleteStudent(studentId): Observable<any> {
    return this.http.get(this.API + '/prepareDeleteStudent/' + studentId);
  }
  editStudent(studentDTO, studentId): Observable<any> {
    return this.http.put(this.API + '/editStudent/' + studentId, studentDTO);
  }
  deleteStudent(studentId): Observable<any> {
    return this.http.delete(this.API + '/deleteStudent/' + studentId);
  }
  // validate khoảng trắng
  validateWhitespace(control: AbstractControl) {
    if ((control.value as string).indexOf('  ') >= 0) {
      return {cannotContainSpace: true};
    }
    return null;
  }
  validateSpecialCharacter(control: AbstractControl) {
    const specialCharacter = '[~`!@#$%^&*()-+=/*?:;.,|]+';
    return (control.value.match(specialCharacter)) ? {
      specialCharacter: true
    } : null;
  }
  validPhoneNumber: ValidatorFn = (control: FormControl): ValidationErrors | null => {
    const phoneRegex = /^0[35789]\d{8}$/;
    const characterRegex = /^[^\d]+$/;
    // tslint:disable-next-line:variable-name
    const _phoneNumber: string = control.value;
    if (_phoneNumber === '') {
      return null;
    }
    if (characterRegex.test(_phoneNumber)) {
      return {phoneAlpha: true};
    }
    if (!phoneRegex.test(_phoneNumber)) {
      return {format: true};
    }
    return null;
  };

  searchStudent(inputSearch: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('valueSearch', inputSearch);
    return this.http.get<any>(this.API + '/inputSearch', {params});
  }
}
