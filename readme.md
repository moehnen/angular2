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
http://blogs.msdn.com/b/typescript/archive/2015/04/30/using-typescript-in-visual-studio-code.aspx

### Typescript-Definitions
https://www.stevefenton.co.uk/Content/Blog/Date/201301/Blog/Complex-TypeScript-Definitions-Made-Easy/
[Writing Definition (.d.ts) Files](https://typescript.codeplex.com/wikipage?title=Writing%20Definition%20%28.d.ts%29%20Files)

###RxJS
https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/categories.md
[Debounce and Throttle: a visual explanation](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)

###Libs
https://github.com/github/fetch

##Articles
http://angular-tips.com/blog/2015/05/an-introduction-to-angular-2/
https://angular.io/docs/js/latest/quickstart.html
http://angular-tips.com/blog/2015/06/why-will-angular-2-rock/

###ES6
[JavaScript Promises](http://www.html5rocks.com/en/tutorials/es6/promises/)




