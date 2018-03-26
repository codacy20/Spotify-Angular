import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA ,MatFormFieldModule, MatInputModule } from '@angular/material';


@Component({
  selector: 'dialog-overview',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css'],
})
export class DialogComponent{

  animal: string;
  name: string;
  @Input() preview_url:string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {

    console.log(this.preview_url);

    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      data: { preview_url: this.preview_url }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}

@Component({
  selector: 'dialogItSelf',
  templateUrl: 'dialogItSelf.html',
  styleUrls: ['dialog.component.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

