/*
If You are Wanting a Quick Snackbar with a quick message:
Inside of Component.ts where you want dialog:
this.dialog.open(message, action, duration)
^^ put that method inside of an onclick method and call it a day

You can use a component as the content in your snackbar with this method:
this.dialog.openFromComponent(snackbaromponent, Configuration Object)
dialogComponent=Component that the snackbar equals
configurationObject=Object with all configuration details regarding the dialog

Transfering Data between the dialog and other components requires some random crap:
Within the SnackBar Component:
import {inject} from 'angular core'
import {MAT_SNACK_BAR_DATA} from angular material

constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any)
) {}

*/
