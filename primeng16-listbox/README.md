# PrimeNG16: リストボックスを表示する

## Angularのワークスペースを作成する

```
npx ng new primeng16-listbox
? Would you like to add Angular routing? (y/N)   -> [Yes]
? Which stylesheet format would you like to use? -> [SCSS]
```

## AngularのワークスペースにPrimeNGをインストールする

```
cd primeng16-listbox
npm view primeng versions
npm install primeng@16.0.2
```

## PrimeNGの初期設定を行う

src/style.scss
```
/* PrimeNG Theme */
@import "primeng/resources/themes/lara-light-blue/theme.css";
@import "primeng/resources/primeng.css";

body {
    /* PrimeNG Theme Font */
    font-family: var(--font-family);
}
```

src/app/app.module.ts
```
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserAnimationsModule
    ],
})
export class AppModule { }
```

## 画面1のコンポーネントを追加する

```
cd primeng16-listbox
npx ng generate component gamen1
npx ng generate component page-not-found
```

## 画面1のコンポーネントを表示する

src/app/app.component.html
```
<router-outlet></router-outlet>
```

src/app/app-routing.module.ts
```
import { Gamen1Component } from './gamen1/gamen1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'gamen1', component: Gamen1Component },
    { path: '', redirectTo: '/gamen1', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
```

## リストボックス用にngModelのモジュールをインポートする

src/app/app.module.ts
```
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule
    ],
})
export class AppModule { }
```

## リストボックスのモジュールをインポートする

src/app/app.module.ts
```
import { ListboxModule } from 'primeng/listbox';

@NgModule({
    imports: [
        ListboxModule
    ],
})
export class AppModule { }
```

## 画面1にリストボックスのコンポーネントを追加する

src/app/gamen1/gamen1.component.html
```
<div style="display:flex;flex-direction:column;">
    <p-listbox
        [options]="dataProvider"
        [(ngModel)]="dataProvider_selectedValue"
        optionLabel="name"
        [style]="{'width':'300px','height':'400px'}"
    ></p-listbox>
    <p>SelectedItem: {{ dataProvider_selectedValue?.name }}</p>
</div>
```

src/app/gamen1/gamen1.component.ts
```
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
```

## ローカルで実行する。

```
npx ng serve
```

## ブラウザで表示する。

```
http://localhost:4200/
```
