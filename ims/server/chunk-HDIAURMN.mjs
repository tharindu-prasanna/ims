import './polyfills.server.mjs';
import{d as f,i as m}from"./chunk-7JVHZBVB.mjs";import{$ as s,U as u,aa as h,da as d,ja as c,t as l,wa as p,xb as g,y as r,z as a}from"./chunk-PNPWMYXX.mjs";var D=(()=>{class e{el;ngModel;control;cd;autoResize;onResize=new d;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;constructor(i,t,n,o){this.el=i,this.ngModel=t,this.control=n,this.cd=o}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewChecked(){this.updateState()}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(i){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(i){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(i||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(t){return new(t||e)(s(u),s(m,8),s(f,8),s(h))};static \u0275dir=a({type:e,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(t,n){t&1&&p("input",function(v){return n.onInput(v)}),t&2&&c("p-filled",n.filled)("p-inputtextarea-resizable",n.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}})}return e})(),H=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=r({type:e});static \u0275inj=l({imports:[g]})}return e})();export{D as a,H as b};
