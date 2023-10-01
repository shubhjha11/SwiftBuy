import { EmbeddedViewRef, Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarRef, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";
@Injectable({
  providedIn: "root"
})
export class SnackbarService {
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, type: string) {
    this.snackBar.open(message, "", {
      panelClass: type,
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  setSnackBar(message: string, type: string) {
    this.snackBar.open(message, "", {
      panelClass: type,
      duration: 10000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  public openFromTemplate(templateRef: any, type: string): MatSnackBarRef<EmbeddedViewRef<any>> {
    return this.snackBar.openFromTemplate(templateRef, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: type
    })
  }

}
