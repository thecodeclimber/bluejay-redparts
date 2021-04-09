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

    const threadLength: any[] = [];
    const metric: any[] = [];
    attribute_3.map((x) => {
      if (x?.threadLength) {
        return (
          threadLength.push(x.threadLength?.threadlength),
          metric.push(x.threadLength?.metric)
        );
      }
    });
    this.length = [...threadLength];
    this.metric = [...metric];
  }

  calc(): void {}

  build(): any {
    return {
      type: 'threadLength',
      length: this.length,
      name: 'Thread Length',
    };
  }
}
