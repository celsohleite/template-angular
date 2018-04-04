import { Component, NgModule } from '@angular/core';

@Component({
    moduleId : module.id,
    selector : 'app-painel',
    templateUrl :  'painel.component.html',
    styleUrls : ['painel.component.css']
})

@NgModule({
    imports : []
})

export class PainelComponent{

    /*
    type : semi, full, arch
    */

    gaugeType = "semi";
    gaugeValue = 45.7;
    gaugeLabel = "Speed";
    gaugeAppendText = "km/hr";

    thresholdConfig = {
        '0': {color: 'green'},
        '40': {color: 'orange'},
        '75.5': {color: 'red'}
    };

}