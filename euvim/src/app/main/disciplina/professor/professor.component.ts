import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { ProfessorService } from '../professor.service';

@Component({
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})

export class ProfessorComponent implements OnInit {
  public listaProfessores = [];

  constructor(
    private _professorService: ProfessorService,
    public dialogRef: MatDialogRef<ProfessorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.data.professores.forEach(idProf => {
      this
        ._professorService
        .obter(idProf)
        .subscribe(professor => {
          this.listaProfessores.push(professor);
        })
    });
  }
}
