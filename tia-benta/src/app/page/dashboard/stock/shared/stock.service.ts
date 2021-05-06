import { Injectable, Injector } from "@angular/core";
import { StockModel } from '@model/stock.model';
import { BaseResourceService } from '@service/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class StockService extends BaseResourceService<StockModel> {
  constructor(protected injector: Injector) {
    super(injector, StockModel);
  }
}