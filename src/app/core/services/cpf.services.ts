import { Injectable } from '@angular/core';
import { validCpf } from 'src/app/utils/valid-cpf';
import { Person } from '../domain/person';

@Injectable({ providedIn: 'root' })
export class CPFService {
  async searchCPF(cpf: string) {
    try {
      const fakePromise = new Promise<Person>((resolve, reject) => {
        setTimeout(() => {
          if (validCpf(cpf)) {
            return reject('CPF inválido!');
          }

          resolve({
            name: 'Mariane de Sousa Oliveira',
            status: 'Regular',
            accounts: [
              { number: '557932-4', type: 'aplicacao' },
              { number: '778461-8', type: 'corrente' },
            ],
          });
        }, 1 * 1000);
      });

      return await fakePromise;
    } catch (err) {
      throw err;
    }
  }
}
