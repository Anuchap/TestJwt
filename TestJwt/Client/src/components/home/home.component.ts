import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
    template: require('./home.html')
})
export class HomeComponent implements OnInit {

    result1 = '';
    result2 = '';
    result3 = '';

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getForAll().then(data => {
            this.result1 = data;
        }, error => this.result1 = error);

        this.dataService.getAuthtenticate().then(data => {
            this.result2 = data;
        }, error => this.result2 = error);

        this.dataService.getAuthorize().then(data => {
            this.result3 = data;
        }, error => this.result3 = error);
    }
}