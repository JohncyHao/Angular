import { ValidatorFn, FormGroup, ValidationErrors } from "@angular/forms";

/** 英雄名字和別名不相符(跨字段驗證)
 * 此驗證器實現了ValidatoFn的介面，他接收一個Angular表單控件對象作為參數，當表單有效時，他會返回null否則會返回ValidationErrors對象
 * 我們先透過使用ForGroup的get方法來獲取子控件，接著簡單比較一下name和alterEgo控件的值
 * 如果這兩個值不一樣，那們英雄的身分就應該繼續保密，我們就可以安全的回傳null，否則就說明英雄身分已經暴露，我們必須透過回傳一個錯誤對象
 * 來把這個表單標記為無效的
*/
export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const name = control.get('name');
  const alterEgo = control.get('alterEgo');

  return name && alterEgo && name.value === alterEgo.value ? { 'identityRevealed': true } : null;
};
