import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdOrVnd',
})
export class UsdOrVndPipe implements PipeTransform {
  transform(money: string): string {
    let symbolMoney = /USD/gi;
    return money.search(symbolMoney) == -1 ? 'đ' : '$';
  }
}
