/*
When Opening Dialog, you need to ask yourself these questions:
1:  Will It need data from somewhere outside of it?
2:  Do I want to style it in any specific way?
3:  Will it create data that other components will use?
4:  Do I want to Show more than just a simple message?

A DIALOG IS A SEPERATE COMPONENT THAT MUST BE INJECTED

Inside of the Component that will use the Dialog:
Requirements:
import { MatDialog } from material
constructor(public: dialog: MatDialog) {}

Method to Open:
this.dialog.open(the dialog component, configuration data)

Configuration Data:
The configuration data is an object that you use to override the default paramaters, as well as give data to it
The config object is shown on the angular material documentation.  granted, their docs suck.

Creating Data to be used by the dialog:
The data is in the form of an Object.  This object is one of the paramaters inside of configuration data


Inside of the Dialog Component:
import { inject } from angular core
import { MatDialogRef, MAT_DIALOG_DATA } from material

constructor (
    public dialogRef: MatDialogRef<this components/classes name>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
)





*/