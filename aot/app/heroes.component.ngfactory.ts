/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../app/hero.service';
import * as import4 from '../../app/heroes.component';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from './heroes.component.css.shim';
import * as import12 from '@angular/common/src/directives/ng_for';
import * as import13 from '../../app/hero-detail.component';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from './hero-detail.component.ngfactory';
var renderType_HeroesComponent_Host:import0.RenderComponentType = (null as any);
class _View_HeroesComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _HeroService_0_4:import3.HeroService;
  _HeroesComponent_0_5:import4.HeroesComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_HeroesComponent_Host0,renderType_HeroesComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-heroes',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HeroesComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HeroService_0_4 = new import3.HeroService();
    this._HeroesComponent_0_5 = new import4.HeroesComponent(this._HeroService_0_4);
    this._appEl_0.initComponent(this._HeroesComponent_0_5,([] as any[]),compView_0);
    compView_0.create(this._HeroesComponent_0_5,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.HeroService) && (0 === requestNodeIndex))) { return this._HeroService_0_4; }
    if (((token === import4.HeroesComponent) && (0 === requestNodeIndex))) { return this._HeroesComponent_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._HeroesComponent_0_5.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_HeroesComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_HeroesComponent_Host === (null as any))) { (renderType_HeroesComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_HeroesComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const HeroesComponentNgFactory:import10.ComponentFactory<import4.HeroesComponent> = new import10.ComponentFactory<import4.HeroesComponent>('my-heroes',viewFactory_HeroesComponent_Host0,import4.HeroesComponent);
const styles_HeroesComponent:any[] = [import11.styles];
var renderType_HeroesComponent:import0.RenderComponentType = (null as any);
class _View_HeroesComponent0 extends import1.AppView<import4.HeroesComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _appEl_5:import2.AppElement;
  _TemplateRef_5_5:any;
  _NgFor_5_6:import12.NgFor;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  /*private*/ _appEl_8:import2.AppElement;
  _HeroDetailComponent_8_4:import13.HeroDetailComponent;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_HeroesComponent0,renderType_HeroesComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'h3',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'My Heroes',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_3 = this.renderer.createElement(parentRenderNode,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','heroes');
    this._text_4 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._appEl_5 = new import2.AppElement(5,3,this,this._anchor_5);
    this._TemplateRef_5_5 = new import14.TemplateRef_(this._appEl_5,viewFactory_HeroesComponent1);
    this._NgFor_5_6 = new import12.NgFor(this._appEl_5.vcRef,this._TemplateRef_5_5,this.parentInjector.get(import15.IterableDiffers),this.ref);
    this._text_6 = this.renderer.createText(this._el_3,'\n',(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_8 = this.renderer.createElement(parentRenderNode,'my-hero-detail',(null as any));
    this._appEl_8 = new import2.AppElement(8,(null as any),this,this._el_8);
    var compView_8:any = import16.viewFactory_HeroDetailComponent0(this.viewUtils,this.injector(8),this._appEl_8);
    this._HeroDetailComponent_8_4 = new import13.HeroDetailComponent();
    this._appEl_8.initComponent(this._HeroDetailComponent_8_4,([] as any[]),compView_8);
    compView_8.create(this._HeroDetailComponent_8_4,([] as any[]),(null as any));
    this._expr_0 = import8.UNINITIALIZED;
    this._expr_1 = import8.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._text_7,
      this._el_8
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import12.NgFor) && (5 === requestNodeIndex))) { return this._NgFor_5_6; }
    if (((token === import13.HeroDetailComponent) && (8 === requestNodeIndex))) { return this._HeroDetailComponent_8_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import8.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = this.context.heroes;
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgFor_5_6.ngForOf = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import8.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._NgFor_5_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_5_6.ngDoCheck(); }
    const currVal_1:any = this.context.selectedHero;
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._HeroDetailComponent_8_4.hero = currVal_1;
      this._expr_1 = currVal_1;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._HeroDetailComponent_8_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_HeroesComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<import4.HeroesComponent> {
  if ((renderType_HeroesComponent === (null as any))) { (renderType_HeroesComponent = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.Emulated,styles_HeroesComponent,{})); }
  return new _View_HeroesComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_HeroesComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_HeroesComponent1,renderType_HeroesComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n         ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'span',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','badge');
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'',(null as any));
    this._expr_1 = import8.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_2 = import8.UNINITIALIZED;
    this._expr_3 = import8.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = (this.context.$implicit === this.parent.context.selectedHero);
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_0,'selected',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import5.interpolate(1,'',this.context.$implicit.id,'');
    if (import5.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_3,currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import5.interpolate(1,' ',this.context.$implicit.name,'\n    ');
    if (import5.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_4,currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.onSelect(this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_HeroesComponent1(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_HeroesComponent1(viewUtils,parentInjector,declarationEl);
}