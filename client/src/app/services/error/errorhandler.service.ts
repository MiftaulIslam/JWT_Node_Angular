import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService {

  constructor() { }

  showerror(error:any){
    if (error.status === 403) {
      return error.error; 
    }
    if(error.status === 500){
      return error.error; 
    }
    if(error.status === 401){
      return error.error; 
    }
    if(error.status === 404){
      return error.error; 
    }
      return 'An unexpected error occurred. Please try again.';
    
  }
}
