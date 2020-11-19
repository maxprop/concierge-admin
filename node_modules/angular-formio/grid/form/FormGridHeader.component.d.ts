import { GridHeaderComponent } from '../GridHeaderComponent';
import { GridHeader } from '../types/grid-header';
export declare class FormGridHeaderComponent extends GridHeaderComponent {
    header: GridHeader;
    load(formio?: any): Promise<GridHeader[]>;
    get numHeaders(): number;
}
