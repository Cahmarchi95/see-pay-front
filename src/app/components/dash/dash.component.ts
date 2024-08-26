import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { DespesaService } from './../../services/despesa.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
})
export class DashComponent {
  private breakpointObserver = inject(BreakpointObserver);
  valorTotal: number = 0;

  constructor(private despesaService: DespesaService) {
    this.despesaService.calcularValorTotal().subscribe({
      next: (total) => {
        console.log('Total calculado:', total); // Debugging line
        this.valorTotal = total;
      },
      error: (err) => {
        console.error('Erro ao calcular total:', err); // Error handling
      },
    });
  }

  // Observável que fornece o layout dinâmico com base no tamanho da tela
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        // Layout para telas de mão (Handset)
        return {
          columns: 2,
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 2 },
        };
      } else {
        // Layout para telas maiores (desktop)
        return {
          columns: 2,
          chart: { cols: 1, rows: 2 },
          table: { cols: 2, rows: 2 },
        };
      }
    })
  );
}
