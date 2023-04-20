import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Notification } from '../interfaces/notification.interface';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notification!: Notification;
  message!: String;
  private notificationSource = new BehaviorSubject(this.notification);
  currentNotification = this.notificationSource.asObservable();
  private apiURL = 'http://localhost:5432/notification/';
  private apiURLGetAll = 'http://localhost:5432/notification/all';
  constructor(private http: HttpClient) {}

  // OK
  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.apiURLGetAll);
  }

  getNotification(id: string): Observable<Notification> {
    return this.http.get<Notification>(this.apiURL + id);
  } // OK

  updateNotification(notification: Notification, id: string): Observable<Notification> {
    return this.http.put<Notification>(this.apiURL + id, notification);
  }

  // OK
  deleteNotification(id: string): Observable<Notification> {
    return this.http.delete<Notification>(this.apiURL + id);
  }
  // OK
  addNotification(notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(this.apiURL, notification);
  }
}
