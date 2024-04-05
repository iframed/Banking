import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Clients } from '../models/clients';

import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  
  client!: Clients ;
  id!: number ;
  updateClientFormGroup!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private clientservice: ClientsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateClientFormGroup = this.fb.group({
      firstname: [''],
      email: ['']
    });

    this.route.params.subscribe(params => {
      const idParam = +params['id'];
      if (!isNaN(idParam)) {
        this.id = idParam;
        // Appel de la méthode getClientsById du service ClientsService
        this.clientservice.getClientsById(this.id).subscribe(
          data => {
            this.client = data;
          },
          error => console.log(error)
        );
      } else {
        console.error('Invalid ID parameter');
      }
    });
  }

  updateClient() {
    const updatedClient: Clients = {
      id: this.client.id,
      firstname: this.updateClientFormGroup.value.firstname,
      emails: this.updateClientFormGroup.value.emails
    };

    this.clientservice.updateClients(this.id, updatedClient).subscribe(
      data => {
        console.log(data);
        this.gotoList();
      },
      error => console.log(error)
    );
  }

  gotoList() {
    this.router.navigate(['admin/clients']);
  }
}
