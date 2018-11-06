import { ValidatorFn, AbstractControl } from "@angular/forms";

/*這個函數用來檢測指定名子是否已被禁用，並回傳一個驗證器函數
，forbiddenNameValidator函數會接受一個Angular控制器對象
，並在有效時回傳null或無效時回傳驗證錯誤對象，而在這邊驗證錯誤
對象通常有一個名為驗證密鑰的屬性(在這邊是forbiddenName)
RegExp代表正則表達式
 */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    //判斷forbidden，如果forbidden值是true則回傳 {'forbiddenName': {value: control.value}}，如果為flase時回傳null
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}
