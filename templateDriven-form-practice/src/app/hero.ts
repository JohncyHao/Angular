export class Hero {
  // 當用戶輸入表單資料時，需要捕捉牠們的變化，並更新到模型的實例當中
  // TypeSctipt會將每個public構造函數的參數產生公共字段，當在建立新
  //英雄的實例時，自動把參數值賦給這些公共字段
  constructor(
    public id: number,
    public name: string,
    public power: string,
    // ?代表可省略
    public alterEgo?: string
  ){}

}
