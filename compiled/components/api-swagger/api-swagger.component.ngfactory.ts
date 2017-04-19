/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../api-method/api-method.component.ngfactory';
import * as import2 from '../../../components/api-method/api-method.component';
import * as import3 from '../../../services/request.builder';
import * as import4 from '@angular/common';
import * as import5 from '../api-request-modal/api-request-modal.component.ngfactory';
import * as import6 from '../../../components/api-request-modal/api-request-modal.component';
import * as import7 from '../../../services/http.service';
import * as import8 from '../../../pipes/key-value-pairs.pipe';
import * as import9 from '../../../components/api-swagger/api-swagger.component';
import * as import10 from '../../../services/swagger.service';
import * as import11 from '@angular/http';
import * as import12 from '../../../services/error.service';
import * as import13 from '../../../services/api-key.provider';
import * as import14 from '../../../services/auth.service';
const styles_ApiSwaggerComponent:any[] = ([] as any[]);
export const RenderType_ApiSwaggerComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_ApiSwaggerComponent,
  data: {}
}
);
function View_ApiSwaggerComponent_3(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'api-method',([] as any[]),(null as any),(null as any),(null as any),import1.View_ApiMethodComponent_0,import1.RenderType_ApiMethodComponent)),
    import0.ɵdid(57344,(null as any),0,import2.ApiMethodComponent,[import3.RequestBuilder],{
      operation: [
        0,
        'operation'
      ]
      ,
      method: [
        1,
        'method'
      ]
      ,
      urlTemplate: [
        2,
        'urlTemplate'
      ]

    }
    ,(null as any))
  ]
  ,(ck,v) => {
    const currVal_0:any = v.context.$implicit.value;
    const currVal_1:any = v.context.$implicit.key;
    const currVal_2:any = (<any>v.parent).context.$implicit.key;
    ck(v,1,0,currVal_0,currVal_1,currVal_2);
  },(null as any));
}
function View_ApiSwaggerComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),8,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h3',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),2,(null as any),View_ApiSwaggerComponent_3)),
    import0.ɵdid(401408,(null as any),0,import4.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    import0.ɵppd(1),
    (l()(),import0.ɵted((null as any),['\n      ']))
  ]
  ,(ck,v) => {
    const currVal_1:any = import0.ɵunv(v,6,0,ck(v,7,0,import0.ɵnov((<any>(<any>v.parent).parent),0),v.context.$implicit.value));
    ck(v,6,0,currVal_1);
  },(ck,v) => {
    const currVal_0:any = v.context.$implicit.key;
    ck(v,3,0,currVal_0);
  });
}
function View_ApiSwaggerComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),16,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'h2',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ' '
    ]
    )),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'small',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      'on ',
      '://',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),2,(null as any),View_ApiSwaggerComponent_2)),
    import0.ɵdid(401408,(null as any),0,import4.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    import0.ɵppd(1),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'api-request-modal',([] as any[]),(null as any),(null as any),(null as any),import5.View_ApiRequestModalComponent_0,import5.RenderType_ApiRequestModalComponent)),
    import0.ɵdid(122880,(null as any),0,import6.ApiRequestModalComponent,[import7.HttpService],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n    ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_4:any = import0.ɵunv(v,11,0,ck(v,12,0,import0.ɵnov((<any>v.parent),0),co.swagger.paths));
    ck(v,11,0,currVal_4);
    ck(v,15,0);
  },(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.swagger.info.title;
    ck(v,3,0,currVal_0);
    const currVal_1:any = co.scheme;
    const currVal_2:any = (co.swagger.host + (co.swagger.basePath || ''));
    ck(v,5,0,currVal_1,currVal_2);
    const currVal_3:any = co.swagger.info.description;
    ck(v,8,0,currVal_3);
  });
}
export function View_ApiSwaggerComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    import0.ɵpid(0,import8.KeyValuePairsPipe,([] as any[])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_ApiSwaggerComponent_1)),
    import0.ɵdid(8192,(null as any),0,import4.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    var co:import9.ApiSwaggerComponent = v.component;
    const currVal_0:any = co.swagger;
    ck(v,3,0,currVal_0);
  },(null as any));
}
function View_ApiSwaggerComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'api-swagger',([] as any[]),(null as any),(null as any),(null as any),View_ApiSwaggerComponent_0,RenderType_ApiSwaggerComponent)),
    import0.ɵprd(256,(null as any),import10.SwaggerService,import10.SwaggerService,[
      import11.Http,
      import12.ErrorService
    ]
    ),
    import0.ɵprd(256,(null as any),import3.RequestBuilder,import3.RequestBuilder,[
      import10.SwaggerService,
      import13.ApiKeyProvider,
      import14.AuthService
    ]
    ),
    import0.ɵdid(24576,(null as any),0,import9.ApiSwaggerComponent,[
      import10.SwaggerService,
      import14.AuthService,
      import3.RequestBuilder
    ]
    ,(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const ApiSwaggerComponentNgFactory:import0.ComponentFactory<import9.ApiSwaggerComponent> = import0.ɵccf('api-swagger',import9.ApiSwaggerComponent,View_ApiSwaggerComponent_Host_0,{
  forceSecure: 'forceSecure',
  url: 'url'
}
,{onUpdate: 'onUpdate'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL21sYXR0dWFkYS9Eb2N1bWVudHMvUHJvamVjdHMvc3dhbmd1bGFyLWNvbXBvbmVudHMvY29tcG9uZW50cy9hcGktc3dhZ2dlci9hcGktc3dhZ2dlci5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvbWxhdHR1YWRhL0RvY3VtZW50cy9Qcm9qZWN0cy9zd2FuZ3VsYXItY29tcG9uZW50cy9jb21wb25lbnRzL2FwaS1zd2FnZ2VyL2FwaS1zd2FnZ2VyLmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL21sYXR0dWFkYS9Eb2N1bWVudHMvUHJvamVjdHMvc3dhbmd1bGFyLWNvbXBvbmVudHMvY29tcG9uZW50cy9hcGktc3dhZ2dlci9hcGktc3dhZ2dlci5jb21wb25lbnQudHMuQXBpU3dhZ2dlckNvbXBvbmVudC5odG1sIiwibmc6Ly8vVXNlcnMvbWxhdHR1YWRhL0RvY3VtZW50cy9Qcm9qZWN0cy9zd2FuZ3VsYXItY29tcG9uZW50cy9jb21wb25lbnRzL2FwaS1zd2FnZ2VyL2FwaS1zd2FnZ2VyLmNvbXBvbmVudC50cy5BcGlTd2FnZ2VyQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgPGRpdiAqbmdJZj1cInN3YWdnZXJcIj5cbiAgICAgIDxoMj57e3N3YWdnZXIuaW5mby50aXRsZX19IDxzbWFsbD5vbiB7e3NjaGVtZX19Oi8ve3tzd2FnZ2VyLmhvc3QgKyAoc3dhZ2dlci5iYXNlUGF0aCB8fCAnJyl9fTwvc21hbGw+PC9oMj5cbiAgICAgIDxwPnt7c3dhZ2dlci5pbmZvLmRlc2NyaXB0aW9ufX08L3A+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBwYWlyIG9mIHN3YWdnZXIucGF0aHMgfCBrZXlWYWx1ZVBhaXJzXCI+XG4gICAgICAgIDxoMz57e3BhaXIua2V5fX08L2gzPlxuICAgICAgICA8YXBpLW1ldGhvZCAqbmdGb3I9XCJsZXQgcGF0aCBvZiBwYWlyLnZhbHVlIHwga2V5VmFsdWVQYWlyc1wiXG4gICAgICAgICAgW29wZXJhdGlvbl09XCJwYXRoLnZhbHVlXCJcbiAgICAgICAgICBbbWV0aG9kXT1cInBhdGgua2V5XCJcbiAgICAgICAgICBbdXJsVGVtcGxhdGVdPVwicGFpci5rZXlcIj48L2FwaS1tZXRob2Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhcGktcmVxdWVzdC1tb2RhbD48L2FwaS1yZXF1ZXN0LW1vZGFsPlxuICAgIDwvZGl2PlxuICAiLCI8YXBpLXN3YWdnZXI+PC9hcGktc3dhZ2dlcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ01RO2dCQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTs7O0lBQ0U7SUFDQTtJQUNBO0lBSEYsU0FDRSxVQUNBLFVBQ0EsU0FIRjs7Ozs7SUFGRjtJQUF3RDtJQUN0RDtJQUFJO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBaUI7SUFDckI7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQVk7SUFHNEI7OztJQUg1QjtJQUFaLFNBQVksU0FBWjs7SUFESTtJQUFBOzs7OztJQUpSO0lBQXFCO0lBQ25CO0lBQUk7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUF1QjtJQUFPO01BQUE7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUF3RTtJQUMxRztJQUFHO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBZ0M7SUFDbkM7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUs7SUFNQztJQUNOO2dCQUFBO0lBQXVDOzs7O0lBUGxDO0lBQUwsVUFBSyxTQUFMO0lBT0E7OztJQVRJO0lBQUE7SUFBOEI7SUFBQTtJQUFBO0lBQy9CO0lBQUE7Ozs7OztJQUhUO0lBQ0k7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQVdNOzs7O0lBWEQ7SUFBTCxTQUFLLFNBQUw7Ozs7O0lDREo7Z0JBQUE7OztJQUFBO0lBQUE7Z0JBQUE7Ozs7SUFBQTtJQUFBO2dCQUFBOzs7O0lBQUE7S0FBQTs7Ozs7Ozs7In0=
