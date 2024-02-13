import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective {
  @Input() appPermission: string[] = [];
  private currentRole = 'agent';

  constructor(private tmplRef: TemplateRef<any>, private vc: ViewContainerRef) { }

  ngOnInit(): void {
    if (this.appPermission.indexOf(this.currentRole) === -1) {
      this.vc.clear(); //remove the host element from the DOM
    } else {
      this.vc.createEmbeddedView(this.tmplRef); //add the host element to the DOM
    }
  }
}
