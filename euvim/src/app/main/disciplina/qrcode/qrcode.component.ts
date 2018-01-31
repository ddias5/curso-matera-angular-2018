import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {

  public qrcodeDisciplina;
  constructor(
    public dialogRef: MatDialogRef<QrcodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.qrcodeDisciplina =
      'https://chart.googleapis.com/chart?cht=qr&chs=200x200&choe=UTF-8&chl=' + JSON.stringify(this.data);
  }
}
