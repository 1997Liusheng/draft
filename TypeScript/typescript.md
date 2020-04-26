TypeScript 基础类型

    任意类型	any
    
    数字类型	number
   
    字符串类型	string
   
    布尔类型	boolean
   
    数组类型	无	声明变量为数组。 let arr: number[] = [1, 2];
   
    元组	无	元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同
  
    枚举	enum	枚举类型用于定义数值集合。
        enum Color {Red, Green, Blue};
        let c: Color = Color.Blue;
        console.log(c);    // 输出 2
        
     void	void	用于标识方法返回值的类型，表示该方法没有返回值。
  
  + TypeScript 变量声明
    - 变量名称可以包含数字和字母。
    
    -  除了下划线 _ 和美元 $ 符号外，不能包含其他特殊字符，包括空格。
      
      变量名不能以数字开头。
      
  + static
    - 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。(class 需要实例化 然后通过实例对象调用)
   
  + 接口（Interfaces）
  
        interface Person {
            name: string;
            age: number;
            man? : string   //  可选属性，不写这个不会报错
            [propName: string]: string;  // 任意属性,一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
        }
        
        let tom: Person = {
            name: 'Tom',
            test: 123,  //  会报错
              //  少了age 会报错
             demo:"haha"    // 任意属性 ，匹配string
        };
    -   定义的变量比接口少了一些 或 多一些 属性 都是不允许的 
   
  + 枚举 
    - 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
    
    
        enum Days {Sun, Mon , Tue, Wed, Thu, Fri, Sat = 6};
        
        console.log(Days["Sun"] === 0); // true
        console.log(Days[0] === "Sun"); // true
        console.log(Days["Sat"] === 6); // true
        
   + 泛型
     -  泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。      
     
     
     function createArray<T>(length: number, value: T): Array<T> {
         let result: T[] = [];
         for (let i = 0; i < length; i++) {
             result[i] = value;
         }
         return result;
     }
     
     createArray<string>(3, 'x'); // ['x', 'x', 'x']
     
   我们在函数名后添加 了<"T">，其中 T 用来指代任意输入的类型，在后面的输入 value: T 和输出 Array<T> 中即可使用了