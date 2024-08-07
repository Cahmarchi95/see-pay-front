import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Despesa } from './../models/despesa';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DespesaService {
  constructor(private afs: AngularFirestore) {}

  addDespesa(despesa: Despesa): Observable<void> {
    const id = this.afs.createId();
    const despesaComId: Despesa = {
      id: id,
      despesa: despesa.despesa,
      valor: despesa.valor,
      data: despesa.data,
    };
    return from(this.afs.collection('/Despesas').doc(id).set(despesaComId));
  }

  getAllDespesas(): Observable<Despesa[]> {
    return this.afs
      .collection<Despesa>('/Despesas')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as Despesa;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  // deleteDespesa(despesa: Despesa): Observable<void> {
  //   return from(this.afs.doc('/Despesas/' + despesa.id).delete());
  // }

  // updateDespesa(despesa: Despesa): void {
  //   this.deleteDespesa(despesa).subscribe(() => {
  //     this.addDespesa(despesa).subscribe();
  //   });
  // }
}
