/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../app/title.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../app/user.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../app/highlight.directive';
import * as import12 from '../../app/contact/highlight.directive';
import * as import13 from '@angular/common/src/directives/ng_if';
import * as import14 from '@angular/core/src/linker/element_ref';
import * as import15 from '@angular/core/src/linker/template_ref';
var renderType_TitleComponent_Host:import0.RenderComponentType = (null as any);
class _View_TitleComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _TitleComponent_0_4:import3.TitleComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TitleComponent_Host0,renderType_TitleComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-title',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_TitleComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._TitleComponent_0_4 = new import3.TitleComponent(this.parentInjector.get(import8.UserService));
    this._appEl_0.initComponent(this._TitleComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._TitleComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.TitleComponent) && (0 === requestNodeIndex))) { return this._TitleComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_TitleComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_TitleComponent_Host === (null as any))) { (renderType_TitleComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_TitleComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const TitleComponentNgFactory:import10.ComponentFactory<import3.TitleComponent> = new import10.ComponentFactory<import3.TitleComponent>('app-title',viewFactory_TitleComponent_Host0,import3.TitleComponent);
const styles_TitleComponent:any[] = ([] as any[]);
var renderType_TitleComponent:import0.RenderComponentType = (null as any);
class _View_TitleComponent0 extends import1.AppView<import3.TitleComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _HighlightDirective_3_3:import11.HighlightDirective;
  _HighlightDirective_3_4:import12.HighlightDirective;
  _text_4:any;
  _text_5:any;
  _anchor_6:any;
  /*private*/ _appEl_6:import2.AppElement;
  _TemplateRef_6_5:any;
  _NgIf_6_6:import13.NgIf;
  _el_7:any;
  _text_8:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TitleComponent0,renderType_TitleComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'button',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Toggle Heading',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_3 = this.renderer.createElement(parentRenderNode,'h1',(null as any));
    this.renderer.setElementAttribute(this._el_3,'highlight','');
    this._HighlightDirective_3_3 = new import11.HighlightDirective(this.renderer,new import14.ElementRef(this._el_3));
    this._HighlightDirective_3_4 = new import12.HighlightDirective(this.renderer,new import14.ElementRef(this._el_3));
    this._text_4 = this.renderer.createText(this._el_3,'',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._anchor_6 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_6 = new import2.AppElement(6,(null as any),this,this._anchor_6);
    this._TemplateRef_6_5 = new import15.TemplateRef_(this._appEl_6,viewFactory_TitleComponent1);
    this._NgIf_6_6 = new import13.NgIf(this._appEl_6.vcRef,this._TemplateRef_6_5);
    this._el_7 = this.renderer.createElement(parentRenderNode,'p',(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._anchor_6,
      this._el_7,
      this._text_8
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.HighlightDirective) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._HighlightDirective_3_3; }
    if (((token === import12.HighlightDirective) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._HighlightDirective_3_4; }
    if (((token === import15.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import13.NgIf) && (6 === requestNodeIndex))) { return this._NgIf_6_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this.context.user;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgIf_6_6.ngIf = currVal_2;
      this._expr_2 = currVal_2;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = import4.interpolate(2,'',this.context.title,' ',this.context.subtitle,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_4,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.toggleHeading()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_TitleComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.TitleComponent> {
  if ((renderType_TitleComponent === (null as any))) { (renderType_TitleComponent = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,styles_TitleComponent,{})); }
  return new _View_TitleComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_TitleComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TitleComponent1,renderType_TitleComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'p',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'i',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'Welcome, ',this.parent.context.user,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_TitleComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_TitleComponent1(viewUtils,parentInjector,declarationEl);
}