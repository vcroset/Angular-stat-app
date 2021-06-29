import {Component} from '@angular/core';
import {Statistique} from './models/statistique';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // public statistique1: Statistique;
    // public statistique2: Statistique;
    public listStatistiques: Statistique[];

    constructor() {
        // this.statistique1 = new Statistique('1', 'Test 1', '20', 'SUCCESS');
        // this.statistique2 = new Statistique('2', 'Test 2', '10', 'SUCCESS');
        // this.listStatistiques = [this.statistique1, this.statistique2];

        // setTimeout(() => {
            // this.listStatistiques.push(new Statistique('3', 'Test 3', '30', 'SUCCESS'));
        // }, 5000);
        this.listStatistiques = [];

        fetch('https://stats.naminilamy.fr/')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
              data.forEach((stat: { id: string; title: string; value: number; appreciation: string; }) => {
                this.listStatistiques.push(new Statistique('' + stat.id, '' + stat.title,
                    '' + stat.value, '' + stat.appreciation));
              });
            })
            .catch((err) => {
                console.error(err);
            });
    }

}
