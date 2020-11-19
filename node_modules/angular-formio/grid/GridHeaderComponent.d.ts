import { EventEmitter, TemplateRef } from '@angular/core';
import { FormioPromiseService } from '../formio-promise.service';
import { GridHeader } from './types/grid-header';
export declare class GridHeaderComponent {
    actionAllowed: any;
    sort: EventEmitter<GridHeader>;
    template: TemplateRef<any>;
    headers: Array<GridHeader>;
    constructor();
    get numHeaders(): number;
    load(formio: FormioPromiseService, query?: any, columns?: Array<any>): Promise<any>;
}
