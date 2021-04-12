/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { AbstractFilterBuilder } from '~/fake-server/filters/abstract-filter-builder';
import { IProduct } from '~/interfaces/product';
import { attribute_3 } from '~/fake-server/database/attributes';

export class ThreadLengthFilterBuilder extends AbstractFilterBuilder {
  private value: string | null = null;

  private length: any[] = [];
  private metric: any[] = [];

  test(): boolean {
    return true;
  }

  makeItems(products: IProduct[], value: string): void {
    this.value = value === undefined ? null : value;

    for (let x of attribute_3) {
      if (x?.threadLength) {
        this.length.push(x.threadLength?.threadlength);
      }
      if (x?.threadLength?.metric) {
        this.metric.push(x.threadLength?.metric);
      }
    }
  }

  calc(): void {}

  build(): any {
    return {
      type: 'threadLength',
      length: this.length,
      metric: this.metric,
      name: 'Thread Length',
    };
  }
}
