import { Component, Input } from '@angular/core';
import { TemplateProvider } from '../../services/template.provider';
import { Path } from '../../schema/2.0/swagger.schema';

@Component({
  selector: 'api-method',
  template: TemplateProvider.apiMethod,
  styles: [ 'h3 .label { padding-top: 0.4em; text-transform: uppercase; }']
})

export class ApiMethodComponent {
  @Input() path: Path;
  @Input() verb: string;
  @Input() urlTemplate: string;
}
