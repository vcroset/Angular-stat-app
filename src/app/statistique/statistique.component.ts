import {Component, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Statistique} from '../models/statistique';

@Component({
    selector: 'app-statistique',
    templateUrl: './statistique.component.html',
    styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit, OnDestroy {

    @Input()
    public statistiqueCom!: Statistique;

    constructor() {
    }

    ngOnInit(): void {
    }

    @HostListener('unloaded')
    ngOnDestroy(): void {
        console.log('item destroy');
    }

    delete(): void {
        console.log(this.statistiqueCom.identifiant);
        fetch('https://stats.naminilamy.fr/' + this.statistiqueCom.identifiant,
            {method: 'DELETE'}).then(resp => {
            if (resp.status === 200) {
                this.ngOnDestroy();
                console.log('api destroy success !!!');
            }
        });
    }
}
