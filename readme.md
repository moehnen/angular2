Angular 2 Experiments
=====================

with [Angular2](http://angular.io), 
[RxJS](https://github.com/reactive-extensions/RxJS),
[Visual Studio Code](https://code.visualstudio.com/)

#Install

```
npm install -g gulp
npm install -g tsd
npm install -g http-server
npm install -g json-server

npm install angular2 --save
npm install whatwg-fetch --save

tsd query angular2 --action install
tsd query es6-promise rx rx-lite whatwg-fetch --action install --save

```

#Run

```
http-server .
json-server fixtures.json
```

#Read

##References

###Typescript
http://www.typescriptlang.org/Handbook
http://json.schemastore.org/tsconfig

###RxJS
https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/categories.md

##Articles
http://blogs.msdn.com/b/typescript/archive/2015/04/30/using-typescript-in-visual-studio-code.aspx
https://angular.io/docs/js/latest/quickstart.html
http://angular-tips.com/blog/2015/06/why-will-angular-2-rock/



