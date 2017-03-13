import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "search"
})

export class SearchPipe implements PipeTransform {

    transform(value, args) {

        if (args == null) {
            return value;
        }        
        else {               
            return value.filter((item) => item.Name.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) != -1 || 
            (item.ManagerName != null && item.ManagerName.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) != -1) ||
            (item.ManagerCode != null &&item.ManagerCode.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) != -1) ||
            (item.Phase != null &&item.Phase.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) != -1))
        }
    }
}