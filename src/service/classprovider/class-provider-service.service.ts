import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootClassProviderServiceService {
  sayHi(): string { return 'hi I am root class provider'; }
}


@Injectable()
export class ClassProviderServiceService {
  sayHi(): string { return 'hi I am class provider'; }
}
