import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-create',
  templateUrl: './notification-create.component.html',
  styleUrls: ['./notification-create.component.css']
})
export class NotificationCreateComponent {
  avisoForm: FormGroup | any;
  isModalOpen:boolean=false;
  constructor(private formBuilder: FormBuilder, private notificationService: NotificationService, private router: Router) { }

  ngOnInit(): void {

    this.avisoForm = this.formBuilder.group({
      nameNotification: ['', Validators.required],
      numberNotification: [1, Validators.required],
      seenNotification: [false, Validators.required],
      descriptionNotification: ['', Validators.required],
    });
  }

  get f() {
    return this.avisoForm.controls;
  }

  onSubmit(): void {
    if (this.avisoForm.invalid) {
      alert('Por favor, completa todos los campos requeridos')
      this.router.navigate(['/notification']);
    }
    this.openModal();
  }
  confirmChanges(): void {
    const avisoData = this.avisoForm.value;
    this.notificationService.addNotification(avisoData).subscribe(
      (response) => {
        console.log('Localización guardada correctamente:', response);
        // Aquí podrías redirigir a la página de éxito, por ejemplo
      },
      (error) => {
        console.error('Error al guardar location:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    );
    this.closeModal();
  }
  onAcceptChanges(): void {
    this.confirmChanges();
    this.ngOnInit();
  }
  onCancelChanges(): void {
    this.isModalOpen = false;
  }
  openModal(): void {
    this.isModalOpen = true;
  }
  closeModal(): void {
    this.isModalOpen = false;
  }
}
