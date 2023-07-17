import { Component, OnInit } from '@angular/core';

class DataProviderItem {
    name: string = "";
}

@Component({
    selector: 'app-gamen1',
    templateUrl: './gamen1.component.html',
    styleUrls: ['./gamen1.component.scss']
})
export class Gamen1Component implements OnInit {

    dataProvider: DataProviderItem[] = [];
    dataProvider_selectedValue: DataProviderItem | null = null;

    ngOnInit(): void {
        let item: DataProviderItem | null = null;

        item = new DataProviderItem();
        item.name = "ふくむらみずき";
        this.dataProvider.push(item);

        item = new DataProviderItem();
        item.name = "いくたえりな";
        this.dataProvider.push(item);

        item = new DataProviderItem();
        item.name = "いしだあゆみ";
        this.dataProvider.push(item);
    }
}
