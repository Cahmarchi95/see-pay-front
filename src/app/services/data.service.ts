import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Despesa } from './../models/despesa';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private afs: AngularFirestore) {}

  addDespesa(despesa: Despesa) {
    // Gerar um id para a despesa
    const id = this.afs.createId();

    // Adicionar o id à despesa
    const despesaComId: Despesa = {
      id: id,
      despesa: despesa.despesa,
      valor: despesa.valor,
      data: despesa.data,
    };

    // Adicionar a despesa ao Firestore
    return this.afs.collection('/Despesas').doc(id).set(despesaComId);
  }
  getAllDespesas() {
    return this.afs.collection('/Despesas').snapshotChanges();
  }

  deleteDespesa(despesa: Despesa) {
    return this.afs.doc('/Despesas' + despesa.id).delete();
  }

  updateDespesa(despesa: Despesa) {
    this.deleteDespesa(despesa);
    this.addDespesa(despesa);
  }
}
