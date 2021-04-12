/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { AbstractFilterBuilder } from '~/fake-server/filters/abstract-filter-builder';
import { IProduct } from '~/interfaces/product';
import { attribute_3 } from '~/fake-server/database/attributes';

export class ScrewSizeFilterBuilder extends AbstractFilterBuilder {
  private value: string | null = null;

  private items: any[] = [];

  test(): boolean {
    return true;
  }

  makeItems(products: IProduct[], value: string): void {
    this.value = value === undefined ? null : value;

    for (let x of attribute_3) {
      if (x?.screwSize) {
        this.items.push(x.screwSize);
      }
    }
  }

  calc(): void {}

  build(): any {
    return {
      type: 'screwSize',
      items: this.items,
      name: 'Screw Size',
    };
  }
}
