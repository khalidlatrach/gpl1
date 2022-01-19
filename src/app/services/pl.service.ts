import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlService {
  constructor() {}

  pl = [{ nom: 'Idrissi', prenom: 'Mohamed' },
{nom:'Saidi', prenom:'Amine'}
];
}
