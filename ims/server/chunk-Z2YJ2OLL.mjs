import './polyfills.server.mjs';
import{a as s}from"./chunk-PLUKXKJG.mjs";import{Eb as h,s as i,v as n}from"./chunk-PNPWMYXX.mjs";var l=(()=>{let r=class r{constructor(t){this.http=t,this.apiUrl=s.apiURL}getBranches(){return this.http.get(`${this.apiUrl}/branches`)}getBranch(t){return this.http.get(`${this.apiUrl}/branches/edit/${t}`)}setBranch(t){return this.http.post(`${this.apiUrl}/branches`,t)}updateBranch(t){return this.http.put(`${this.apiUrl}/branches/edit`,t)}deleteBranch(t){return this.http.delete(`${this.apiUrl}/branches/delete/${t}`)}};r.\u0275fac=function(a){return new(a||r)(n(h))},r.\u0275prov=i({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();export{l as a};
