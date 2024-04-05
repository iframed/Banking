import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  userFormGroup1! : FormGroup;
  ngOnInit(): void {

    this.userFormGroup1=this.fb.group({
      firstName : this.fb.control(""),
      lastName : this.fb.control(""),
      email : this.fb.control(""),
      password : this.fb.control(""),
     })
  }

  
  
  constructor(private userService: UserService,private fb: FormBuilder ,private router: Router) { }
 
  
  

  register() {
    
    const user: User = this.userFormGroup1.value;

    this.userService.registerUser(user).subscribe({next: (data) => {
      console.log('User registered successfully:', data);

      // Continue avec le code après une inscription réussie
      
    },
    error: (err) => {
      if (err.status === 200) {
          // Redirection côté client
          this.router.navigate(['/login']);
          // Redirigez l'utilisateur vers l'URL spécifiée dans err.url
      } else {
          console.error('Error registering user:', err);
          // Gérer l'erreur, afficher un message à l'utilisateur, etc.
      }
  }
});
}

}
