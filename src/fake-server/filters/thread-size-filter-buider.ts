/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { AbstractFilterBuilder } from '~/fake-server/filters/abstract-filter-builder';
import { IProduct } from '~/interfaces/product';
import { attribute_3 } from '~/fake-server/database/attributes';

export class ThreadSizeFilterBuilder extends AbstractFilterBuilder {
  private value: string | null = null;

  private size: any[] = [];
  private metric: any[] = [];

  test(): boolean {
    return true;
  }

  makeItems(products: IProduct[], value: string): void {
    this.value = value === undefined ? null : value;

    for (let x of attribute_3) {
      if (x?.threadSize?.threadSize) {
        this.size.push(x.threadSize?.threadSize);
      }
      if (x?.threadSize?.metric) {
        this.metric.push(x.threadSize?.metric);
      }
    }
  }

  calc(): void {}

  build(): any {
    return {
      type: 'threadSize',
      size: this.size,
      metric: this.metric,
      name: 'Thread Size',
    };
  }
}
