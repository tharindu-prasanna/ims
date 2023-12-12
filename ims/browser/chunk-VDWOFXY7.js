import{a as Y}from"./chunk-EHXRGKF7.js";import{a as L}from"./chunk-BF2ZRDXQ.js";import{g as X,h as Z,i as ee,j as te,k as ie}from"./chunk-ZTY3N64Q.js";import{o as J,p as W}from"./chunk-YPAZ5YN4.js";import{b as $}from"./chunk-OEBJFCBM.js";import"./chunk-7RKSVCTK.js";import{j as Q,m as G,n as H,q as K,t as q,v as z}from"./chunk-PHRS766U.js";import{A as V,Aa as p,C as f,D as h,Fa as C,H as g,I as S,Oa as P,Qa as A,Sa as R,Ta as B,Va as N,Y as m,Z as y,a as _,f as E,fa as j,ib as O,jb as U,la as M,ma as t,mb as k,n as x,na as o,oa as s,sa as D,ua as b,va as w,x as F,y as u,ya as T,yb as I,za as a}from"./chunk-6SFOHSVE.js";var ne=(()=>{let e=class e{constructor(r){this.http=r,this.apiUrl=L.apiURL}getTransactions(){return this.http.get(`${this.apiUrl}/logs/transactions`)}};e.\u0275fac=function(n){return new(n||e)(V(k))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var se=["filter"];function ce(i,e){if(i&1){let c=D();t(0,"div",12)(1,"button",13),b("click",function(){g(c);let n=w(),l=T(10);return S(n.clear(l))}),o(),t(2,"span",14),s(3,"i",15),t(4,"input",16,17),b("input",function(n){g(c);let l=w(),d=T(10);return S(l.onGlobalFilter(d,n))}),o()()()}}function me(i,e){i&1&&(t(0,"tr")(1,"th",18)(2,"div",19),a(3," Date "),t(4,"div",20),s(5,"p-sortIcon",21)(6,"p-columnFilter",22),o()()(),t(7,"th",23)(8,"div",19),a(9," Table Name "),t(10,"div",20),s(11,"p-sortIcon",24)(12,"p-columnFilter",25),o()()(),t(13,"th",26)(14,"div",19),a(15," Record ID "),t(16,"div",20),s(17,"p-sortIcon",27)(18,"p-columnFilter",28),o()()(),t(19,"th",29)(20,"div",19),a(21," Action "),t(22,"div",20),s(23,"p-sortIcon",30)(24,"p-columnFilter",31),o()()(),t(25,"th",32)(26,"div",19),a(27," Old Value "),t(28,"div",20),s(29,"p-sortIcon",33)(30,"p-columnFilter",34),o()()(),t(31,"th",35)(32,"div",19),a(33," New Value "),t(34,"div",20),s(35,"p-sortIcon",36)(36,"p-columnFilter",37),o()()(),t(37,"th",38)(38,"div",19),a(39," User "),t(40,"div",20),s(41,"p-sortIcon",39)(42,"p-columnFilter",40),o()()()())}function pe(i,e){if(i&1&&(t(0,"tr")(1,"td",41),a(2),P(3,"date"),o(),t(4,"td"),a(5),o(),t(6,"td"),a(7),o(),t(8,"td"),a(9),o(),t(10,"td"),a(11),o(),t(12,"td"),a(13),o(),t(14,"td"),a(15),o()()),i&2){let c=e.$implicit;m(2),p(A(3,7,c.createdAt,"yyyy-MM-dd")),m(3),p(c.dataTable),m(2),p(c.recordId),m(2),p(c.action),m(2),p(c.oldValue),m(2),p(c.newValue),m(2),p(c.user)}}function de(i,e){i&1&&(t(0,"tr")(1,"td",42),a(2,"No transactions found."),o()())}function ue(i,e){i&1&&(t(0,"tr")(1,"td",42),a(2,"Loading transactions. Please wait."),o()())}var fe=()=>[10,25,50,100,250],he=()=>["createdAt","dataTable","recordId","action","oldValue","newValue","user"],re=(()=>{let e=class e{constructor(r,n,l){this.messageService=r,this.logService=n,this.encryptionService=l,this.transactions=[],this.loading=!1,this.subscription=new E}ngOnInit(){this.getTransactions()}ngOnDestroy(){this.subscription.unsubscribe()}getTransactions(){this.loading=!0,this.subscription=this.logService.getTransactions().pipe(x(r=>r.message),x(r=>{let n=["dataTable","action","oldValue","newValue","user"];return r.map(l=>{let d=_({},l);return this.encryptionService.decryptObjectValues(d,n),d})})).subscribe(r=>{this.transactions=r,this.loading=!1},r=>{this.messageService.add({closable:!1,life:6e3,icon:"pi pi-times",summary:r.error.message}),this.loading=!1})}onGlobalFilter(r,n){r.filterGlobal(n.target.value,"contains")}clear(r){r.clear(),this.filter.nativeElement.value=""}};e.\u0275fac=function(n){return new(n||e)(y(Q),y(ne),y(Y))},e.\u0275cmp=f({type:e,selectors:[["app-transactions"]],viewQuery:function(n,l){if(n&1&&B(se,5),n&2){let d;R(d=N())&&(l.filter=d.first)}},decls:16,vars:10,consts:[[1,"grid"],[1,"col-12"],[1,"card"],[1,"md:flex","md:justify-content-between","mb-3"],[1,"mb-3","md:mb-0"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","responsiveLayout","scroll","styleClass","p-datatable-gridlines",3,"value","rows","showCurrentPageReport","rowsPerPageOptions","loading","rowHover","paginator","globalFilterFields"],["dt1",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-column","sm:flex-row"],["pButton","","label","Clear","icon","pi pi-filter-slash",1,"p-button-outlined","mb-2",3,"click"],[1,"p-input-icon-left","mb-2"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search Keyword",1,"w-full",3,"input"],["filter",""],["pSortableColumn","createdAt",2,"min-width","8rem"],[1,"flex","justify-content-between","align-items-center"],[1,"flex","vertically-center","gap-2"],["field","createdAt"],["type","text","field","createdAt","display","menu","placeholder","Search by date"],["pSortableColumn","dataTable",2,"min-width","10rem"],["field","dataTable"],["type","text","field","dataTable","display","menu","placeholder","Search by table"],["pSortableColumn","recordId",2,"min-width","12rem"],["field","recordId"],["type","text","field","recordId","display","menu","placeholder","Search by record ID"],["pSortableColumn","action",2,"min-width","6rem"],["field","action"],["type","text","field","action","display","menu","placeholder","Search by action"],["pSortableColumn","oldValue",2,"min-width","14rem"],["field","oldValue"],["type","text","field","oldValue","display","menu","placeholder","Search by old value"],["pSortableColumn","newValue",2,"min-width","14rem"],["field","newValue"],["type","text","field","newValue","display","menu","placeholder","Search by new value"],["pSortableColumn","createdBy",2,"min-width","8rem"],["field","createdBy"],["type","text","field","createdBy","display","menu","placeholder","Search by user"],[1,"text-center"],["colspan","12"]],template:function(n,l){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"h5"),a(6,"Transactions Logs"),o(),t(7,"p",4),a(8,"You can view all the transactions details through this page."),o()()(),t(9,"p-table",5,6),M(11,ce,6,0,"ng-template",7)(12,me,43,0,"ng-template",8)(13,pe,16,10,"ng-template",9)(14,de,3,0,"ng-template",10)(15,ue,3,0,"ng-template",11),o()()()()),n&2&&(m(9),j("value",l.transactions)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",C(8,fe))("loading",l.loading)("rowHover",!0)("paginator",!0)("globalFilterFields",C(9,he)))},dependencies:[q,G,J,X,Z,ee,te,O]});let i=e;return i})();var oe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=f({type:e,selectors:[["app-access"]],decls:9,vars:0,consts:[[1,"grid"],[1,"col-12"],[1,"card"],[1,"py-8"],[1,"pi","pi-wrench","text-gray-700","flex","justify-content-center","mb-5",2,"font-size","6rem"],[1,"text-6xl","flex","justify-content-center","text-gray-700","mb-3"],[1,"text-3xl","flex","justify-content-center","text-gray-700"]],template:function(n,l){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),s(4,"i",4),t(5,"div",5),a(6,"Sorry!"),o(),t(7,"div",6),a(8,"This Page is Under Construction"),o()()()()())}});let i=e;return i})();var ye=[{path:"transactions",component:re},{path:"access",component:oe}],ae=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=h({type:e}),e.\u0275inj=u({imports:[I.forChild(ye),I]});let i=e;return i})();var $e=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=h({type:e}),e.\u0275inj=u({imports:[U,ae,z,W,K,H,ie,$]});let i=e;return i})();export{$e as LogsModule};