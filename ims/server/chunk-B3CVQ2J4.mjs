import './polyfills.server.mjs';
import{a as I}from"./chunk-UWLUOEEC.mjs";import{a as T}from"./chunk-52NCYLCF.mjs";import{a as ce,g as R,h as L}from"./chunk-62CMOTVT.mjs";import"./chunk-PLUKXKJG.mjs";import{f as ge,g as he,h as ve,i as ye,j as be,k as Se}from"./chunk-SS322TVC.mjs";import{b as N,c as g,e as P,f as G,g as O,h as C,j as U,k as q,l as Q,n as ue,o as F,p as fe}from"./chunk-7JVHZBVB.mjs";import{a as le,b as de}from"./chunk-W5HN67AE.mjs";import"./chunk-7K6YOVJS.mjs";import"./chunk-AUOO4LHJ.mjs";import{f as z,j as x,m as ae,p as _,q as se,t as pe,u as w,v as me}from"./chunk-7U7S3VU4.mjs";import{$ as d,Aa as K,Ba as s,C as E,Ca as v,D as B,Ha as Y,Ob as oe,Qa as J,Rb as V,Sa as W,Sb as S,Ua as ee,Ub as X,Va as te,Xa as ie,_ as p,a as y,ha as u,i as D,na as Z,oa as t,pa as o,qa as m,t as A,ua as H,wa as h,wb as ne,x as b,xa as j,xb as re,y as M}from"./chunk-PNPWMYXX.mjs";import{a as k}from"./chunk-KRLCULJA.mjs";var Ae=["filter"];function Me(a,i){if(a&1){let f=H();t(0,"div",13)(1,"button",14),h("click",function(){E(f);let e=j(),r=K(12);return B(e.clear(r))}),o(),t(2,"span",15),m(3,"i",16),t(4,"input",17,18),h("input",function(e){E(f);let r=j(),l=K(12);return B(r.onGlobalFilter(l,e))}),o()()()}}function Ve(a,i){a&1&&(t(0,"tr")(1,"th",19)(2,"div",20),s(3," Code "),t(4,"div",21),m(5,"p-sortIcon",22)(6,"p-columnFilter",23),o()()(),t(7,"th",24)(8,"div",20),s(9," Description "),t(10,"div",21),m(11,"p-sortIcon",25)(12,"p-columnFilter",26),o()()(),t(13,"th",27)(14,"div",20),s(15," Created At "),t(16,"div",21),m(17,"p-sortIcon",28)(18,"p-columnFilter",29),o()()(),t(19,"th",30)(20,"div",20),s(21," Created By "),t(22,"div",21),m(23,"p-sortIcon",31)(24,"p-columnFilter",32),o()()(),t(25,"th",33)(26,"div",34),s(27," Updated At "),t(28,"div",21),m(29,"p-sortIcon",35)(30,"p-columnFilter",36),o()()(),t(31,"th",37)(32,"div",20),s(33," Updated By "),t(34,"div",21),m(35,"p-sortIcon",38)(36,"p-columnFilter",39),o()()(),t(37,"th",33)(38,"div",40),s(39,"Actions"),o()()())}function Re(a,i){if(a&1){let f=H();t(0,"tr")(1,"td"),s(2),o(),t(3,"td"),s(4),o(),t(5,"td",41),s(6),J(7,"date"),o(),t(8,"td",41),s(9),o(),t(10,"td",41),s(11),J(12,"date"),o(),t(13,"td",41),s(14),o(),t(15,"td")(16,"div",42)(17,"p-button",43),h("click",function(e){let l=E(f).$implicit,c=j();return B(c.onEdit(e,l._id))}),o(),t(18,"p-button",44),h("click",function(e){let l=E(f).$implicit,c=j();return B(c.onDelete(e,l._id))}),o()()()()}if(a&2){let f=i.$implicit;p(2),v(f.code),p(2),v(f.description),p(2),v(W(7,10,f.createdAt,"yyyy-MM-dd")),p(3),v(f.createdBy),p(2),v(W(12,13,f.updatedAt,"yyyy-MM-dd")),p(3),v(f.updatedBy),p(3),u("rounded",!0)("text",!0),p(1),u("rounded",!0)("text",!0)}}function Le(a,i){a&1&&(t(0,"tr")(1,"td",45),s(2,"No organizations found."),o()())}function Ne(a,i){a&1&&(t(0,"tr")(1,"td",45),s(2,"Loading organizations. Please wait."),o()())}var Pe=()=>[10,25,50,100,250],Ge=()=>["code","description","createdAt","createdBy","updatedAt","updatedBy"],Te=(()=>{let i=class i{constructor(n,e,r,l,c){this.router=n,this.confirmationService=e,this.messageService=r,this.organizationService=l,this.encryptionService=c,this.loading=!1,this.organizations=[],this.subscription=new y}ngOnInit(){this.getOrganizations()}ngOnDestroy(){this.subscription.unsubscribe()}getOrganizations(){this.loading=!0,this.subscription=this.organizationService.getOrganizations().pipe(D(n=>n.message),D(n=>{let e=["code","description","createdBy"];return n.map(r=>{let l=k({},r);return this.encryptionService.decryptObjectValues(l,e),l})})).subscribe(n=>{this.organizations=n,this.loading=!1},n=>{this.messageService.add({closable:!1,life:6e3,icon:"pi pi-times",summary:n.error.message}),this.loading=!1})}onGlobalFilter(n,e){n.filterGlobal(e.target.value,"contains")}clear(n){n.clear(),this.filter.nativeElement.value=""}onEdit(n,e){this.router.navigate(["/system_data/organizations/edit",e])}onDelete(n,e){this.confirmationService.confirm({target:n.target,message:"Are you sure to delete this organization?",icon:"pi pi-exclamation-triangle",accept:()=>{this.loading=!0,this.subscription=this.organizationService.deleteOrganization(e).subscribe(r=>{this.loading=!1,this.getOrganizations(),this.messageService.add({closable:!1,life:6e3,icon:"pi pi-check",summary:r.message})},r=>{this.loading=!1,this.messageService.add({closable:!1,life:6e3,icon:"pi pi-times",summary:r.error.message})})}})}};i.\u0275fac=function(e){return new(e||i)(d(V),d(z),d(x),d(I),d(T))},i.\u0275cmp=b({type:i,selectors:[["app-organizations"]],viewQuery:function(e,r){if(e&1&&te(Ae,5),e&2){let l;ee(l=ie())&&(r.filter=l.first)}},decls:18,vars:11,consts:[[1,"grid"],[1,"col-12"],[1,"card"],[1,"md:flex","md:justify-content-between","mb-3"],[1,"mb-3","md:mb-0"],["pRipple","","icon","pi pi-plus","label","Add New Organization","routerLink","/system_data/organizations/add",1,"w-full","md:max-w-fit",3,"raised"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","responsiveLayout","scroll","styleClass","p-datatable-gridlines",3,"value","rows","showCurrentPageReport","rowsPerPageOptions","loading","rowHover","paginator","globalFilterFields"],["dt1",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-column","sm:flex-row"],["pButton","","label","Clear","icon","pi pi-filter-slash",1,"p-button-outlined","mb-2",3,"click"],[1,"p-input-icon-left","mb-2"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search Keyword",1,"w-full",3,"input"],["filter",""],["pSortableColumn","code",2,"min-width","8rem"],[1,"flex","justify-content-between","align-items-center"],[1,"flex","vertically-center","gap-2"],["field","code"],["type","text","field","code","display","menu","placeholder","Search by code"],["pSortableColumn","description",2,"min-width","14rem"],["field","description"],["type","text","field","description","display","menu","placeholder","Search by description"],["pSortableColumn","createdAt",2,"min-width","8rem"],["field","createdAt"],["type","text","field","createdAt","display","menu","placeholder","Search by created date"],["pSortableColumn","createdBy",2,"min-width","8rem"],["field","createdBy"],["type","text","field","createdBy","display","menu","placeholder","Search by user created by"],[2,"min-width","8rem"],["pSortableColumn","updatedAt",1,"flex","justify-content-between","align-items-center"],["field","updatedAt"],["type","text","field","updatedAt","display","menu","placeholder","Search by updated date"],["pSortableColumn","updatedBy",2,"min-width","8rem"],["field","updatedBy"],["type","text","field","updatedBy","display","menu","placeholder","Search by user updated by"],[1,"flex","justify-content-center","align-items-center"],[1,"text-center"],[1,"flex","flex-wrap","gap-2","justify-content-center","align-items-center"],["pRipple","","icon","pi pi-pencil","pTooltip","Edit designation","tooltipPosition","top",3,"rounded","text","click"],["pRipple","","severity","danger","icon","pi pi-trash","pTooltip","Delete designation","tooltipPosition","top",3,"rounded","text","click"],["colspan","12"]],template:function(e,r){e&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"h5"),s(6,"Manage Organizations"),o(),t(7,"p",4),s(8,"You can view, search, and edit organizations details through this page."),o()(),t(9,"div"),m(10,"p-button",5),o()(),t(11,"p-table",6,7),Z(13,Me,6,0,"ng-template",8)(14,Ve,40,0,"ng-template",9)(15,Re,19,16,"ng-template",10)(16,Le,3,0,"ng-template",11)(17,Ne,3,0,"ng-template",12),o()()()()),e&2&&(p(10),u("raised",!0),p(1),u("value",r.organizations)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",Y(9,Pe))("loading",r.loading)("rowHover",!0)("paginator",!0)("globalFilterFields",Y(10,Ge)))},dependencies:[S,F,_,pe,w,ae,he,ve,ye,be,le,ne]});let a=i;return a})();var Fe=(()=>{let i=class i{constructor(n,e,r,l,c){this.confirmationService=n,this.messageService=e,this.utilityService=r,this.organizationService=l,this.encryptionService=c,this.transferData=!1,this.submitBtnIcon="pi pi-plus",this.submitBtnLabel="Add Organization",this.subscription=new y,this.addOrganizationForm=new O({})}ngOnInit(){this.addOrganizationForm=new O({code:new C("",[g.required,this.utilityService.trimmedEmptyValidator,g.maxLength(20)]),description:new C("",[g.required,this.utilityService.trimmedEmptyValidator,g.maxLength(80)])})}ngOnDestroy(){this.subscription.unsubscribe()}setDataTransferStatus(){this.addOrganizationForm.disable(),this.transferData=!0,this.submitBtnIcon="pi pi-spinner pi-spin",this.submitBtnLabel="Please wait"}unsetDataTransferStatus(){this.addOrganizationForm.enable(),this.transferData=!1,this.submitBtnIcon="pi pi-plus",this.submitBtnLabel="Add Organization"}getFormData(){return{code:this.encryptionService.encryptData(this.addOrganizationForm.get("code").value),description:this.encryptionService.encryptData(this.addOrganizationForm.get("description").value)}}addOrganization(n){this.confirmationService.confirm({target:n.target,message:"Are you sure to add this organization?",icon:"pi pi-exclamation-triangle",accept:()=>{this.setDataTransferStatus(),this.subscription=this.organizationService.setOrganization(this.getFormData()).subscribe(e=>{this.unsetDataTransferStatus(),this.addOrganizationForm.reset(),this.messageService.add({closable:!1,life:6e3,icon:"pi pi-check",summary:e.message})},e=>{this.unsetDataTransferStatus(),this.messageService.add({closable:!1,life:6e3,icon:"pi pi-times",summary:e.error.message})})}})}};i.\u0275fac=function(e){return new(e||i)(d(z),d(x),d(L),d(I),d(T))},i.\u0275cmp=b({type:i,selectors:[["app-add-organization"]],decls:22,vars:7,consts:[[1,"grid"],[1,"col-12"],[1,"card"],[3,"formGroup"],[1,"grid","p-fluid","mt-3"],[1,"field","col-12","md:col-4"],[1,"p-float-label"],["type","text","formControlName","code","id","code","pInputText",""],["for","code"],[1,"field","col-12","md:col-8"],["type","text","formControlName","description","id","description","pInputText",""],["for","description"],[1,"block","md:flex","md:justify-content-between"],["styleClass","justify-content-center w-full md:w-8rem mb-3 md:mb-0","pRipple","","label","Back","icon","pi pi-arrow-left","routerLink","/system_data/organizations",1,"block",3,"raised","disabled"],["styleClass","justify-content-center w-full md:w-11rem","pRipple","","severity","success",1,"block",3,"raised","label","icon","disabled","click"]],template:function(e,r){e&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),s(4,"Add New Organization"),o(),t(5,"p"),s(6,"Please provide the necessary details to add a new organization."),o(),t(7,"form",3)(8,"div",4)(9,"div",5)(10,"span",6),m(11,"input",7),t(12,"label",8),s(13,"Organization code"),o()()(),t(14,"div",9)(15,"span",6),m(16,"input",10),t(17,"label",11),s(18,"Organization name"),o()()()()(),t(19,"div",12),m(20,"p-button",13),t(21,"p-button",14),h("click",function(c){return r.addOrganization(c)}),o()()()()()),e&2&&(p(7),u("formGroup",r.addOrganizationForm),p(13),u("raised",!0)("disabled",r.transferData),p(1),u("raised",!0)("label",r.submitBtnLabel)("icon",r.submitBtnIcon)("disabled",r.addOrganizationForm.invalid||r.transferData))},dependencies:[S,F,_,w,U,N,P,G,q,Q]});let a=i;return a})();var De=(()=>{let i=class i{constructor(n,e,r,l,c,Be,je,ke){this.confirmationService=n,this.messageService=e,this.utilityService=r,this.organizationService=l,this.encryptionService=c,this.route=Be,this.router=je,this.store=ke,this.organizationId="",this.organization={},this.transferData=!1,this.submitBtnIcon="pi pi-sync",this.submitBtnLabel="Update Organization",this.subscription=new y,this.editOrganizationForm=new O({})}ngOnInit(){this.editOrganizationForm=new O({code:new C("",[g.required,this.utilityService.trimmedEmptyValidator,g.maxLength(20)]),description:new C("",[g.required,this.utilityService.trimmedEmptyValidator,g.maxLength(80)])}),this.subscription=this.route.paramMap.subscribe(n=>{this.organizationId=n.get("id")??"",this.getOrganization(this.organizationId)})}ngOnDestroy(){this.subscription.unsubscribe()}setDataTransferStatus(){this.editOrganizationForm.disable(),this.transferData=!0,this.submitBtnIcon="pi pi-spinner pi-spin",this.submitBtnLabel="Please wait"}unsetDataTransferStatus(){this.editOrganizationForm.enable(),this.transferData=!1,this.submitBtnIcon="pi pi-plus",this.submitBtnLabel="Update Organization"}getOrganization(n){setTimeout(()=>{this.store.dispatch(R({status:!0}))}),this.subscription=this.organizationService.getOrganization(n).pipe(D(e=>e.message)).subscribe(e=>{let r=["code","description","createdBy"],l=k({},e);this.encryptionService.decryptObjectValues(l,r),this.organization=l,this.editOrganizationForm.patchValue(l),setTimeout(()=>{this.store.dispatch(R({status:!1}))})},e=>{this.messageService.add({closable:!1,life:6e3,icon:"pi pi-times",summary:e.error.message}),setTimeout(()=>{this.store.dispatch(R({status:!1}))}),this.router.navigate(["/system_data/organizations"])})}getFormData(){return{id:this.organization._id,description:this.encryptionService.encryptData(this.editOrganizationForm.get("description").value)}}updateOrganization(n){this.confirmationService.confirm({target:n.target,message:"Are you sure to edit this organization?",icon:"pi pi-exclamation-triangle",accept:()=>{this.setDataTransferStatus(),this.subscription=this.organizationService.updateOrganization(this.getFormData()).subscribe(e=>{this.unsetDataTransferStatus(),this.messageService.add({closable:!1,life:6e3,icon:"pi pi-check",summary:e.message})},e=>{this.unsetDataTransferStatus(),this.messageService.add({closable:!1,life:6e3,icon:"pi pi-times",summary:e.error.message})})}})}};i.\u0275fac=function(e){return new(e||i)(d(z),d(x),d(L),d(I),d(T),d(oe),d(V),d(ce))},i.\u0275cmp=b({type:i,selectors:[["app-edit-organization"]],decls:22,vars:7,consts:[[1,"grid"],[1,"col-12"],[1,"card"],[3,"formGroup"],[1,"grid","p-fluid","mt-3"],[1,"field","col-12","md:col-4"],[1,"p-float-label"],["formControlName","code","type","text","id","code","readonly","","pInputText",""],["for","code"],[1,"field","col-12","md:col-8"],["formControlName","description","type","text","id","description","pInputText",""],["for","description"],[1,"block","md:flex","md:justify-content-between"],["styleClass","justify-content-center w-full md:w-8rem mb-3 md:mb-0","pRipple","","label","Back","icon","pi pi-arrow-left","routerLink","/system_data/organizations",1,"block",3,"raised","disabled"],["styleClass","justify-content-center w-full md:w-13rem","pRipple","","severity","success",1,"block",3,"raised","label","icon","disabled","click"]],template:function(e,r){e&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),s(4,"Edit Organization"),o(),t(5,"p"),s(6,"You can edit/update details of organizations details through this page."),o(),t(7,"form",3)(8,"div",4)(9,"div",5)(10,"span",6),m(11,"input",7),t(12,"label",8),s(13,"Organization code"),o()()(),t(14,"div",9)(15,"span",6),m(16,"input",10),t(17,"label",11),s(18,"Description of the organization"),o()()()()(),t(19,"div",12),m(20,"p-button",13),t(21,"p-button",14),h("click",function(c){return r.updateOrganization(c)}),o()()()()()),e&2&&(p(7),u("formGroup",r.editOrganizationForm),p(13),u("raised",!0)("disabled",r.transferData),p(1),u("raised",!0)("label",r.submitBtnLabel)("icon",r.submitBtnIcon)("disabled",r.editOrganizationForm.invalid||r.transferData))},dependencies:[S,F,_,w,U,N,P,G,q,Q]});let a=i;return a})();var Qe=[{path:"",component:Te},{path:"add",component:Fe},{path:"edit/:id",component:De}],Ee=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=M({type:i}),i.\u0275inj=A({imports:[X.forChild(Qe),X]});let a=i;return a})();var It=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=M({type:i}),i.\u0275inj=A({imports:[re,Ee,fe,se,me,Se,de,ge,ue]});let a=i;return a})();export{It as OrganizationsModule};