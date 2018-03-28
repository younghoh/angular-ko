// #docregion!
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular

/* Other imports */

@NgModule({
  imports: [
    BrowserModule,
    FormsModule  // <--- import into the NgModule
  ],
  /* Other module metadata */
})
export class AppModule { }

// #docregion
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <--- @angular/forms 모듈에서 FormsModule 참조

/* 기타 imports */

@NgModule({
  imports: [
    BrowserModule,
    FormsModule  // <--- NgModule에 로드
  ],
  /* 모듈 메타 데이터 */
})
export class AppModule { }
