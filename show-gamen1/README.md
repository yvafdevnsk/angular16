# 画面1を表示する

## ワークスペースを作成する

```
npx ng new show-gamen1
? Would you like to add Angular routing? (y/N)   -> [Yes]
? Which stylesheet format would you like to use? -> [SCSS]
```

## 画面1のコンポーネントを追加する

```
cd show-gamen1
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

## ローカルで実行する

```
npx ng serve
```

## ブラウザで表示する

```
http://localhost:4200/
```
