/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { AbstractFilterBuilder } from '~/fake-server/filters/abstract-filter-builder';
import { IProduct } from '~/interfaces/product';
import { attribute_3 } from '~/fake-server/database/attributes';

export class DiameterFilterBuilder extends AbstractFilterBuilder {
  private value: string | null = null;

  private items: any[] = [];

  test(): boolean {
    return true;
  }

  makeItems(products: IProduct[], value: string): void {
    this.value = value === undefined ? null : value;

    const diameter: any[] = [];
    attribute_3.map((x) => {
      if (x?.diameter) {
        return diameter.push(x.diameter);
      }
    });
    this.items = [...diameter];
  }

  calc(): void {}

  build(): any {
    return {
      type: 'diameter',
      items: this.items,
      name: 'Diameter',
    };
  }
}
