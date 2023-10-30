// ----------------------------
// 基本型別
// ----------------------------
let str1: string = 'curry' // 正規寫法
let str2 = 'curry' // 簡化專案寫法 會自動推導型別
let str3: string // 宣告一個尚未定義的字串
// !str3 = 999 => 如果設定num,這時候就會出錯警告

let num1: number = 1000
let num2 = 1000
let boo1: boolean = true
let boo2 = true
let n: null = null
let un: undefined = undefined

let any: any = '' // any 任何型別都可,不建議別用
// ----------------------------
// Union 合併|
// ----------------------------
let union: number | string
union = 1000
union = 'str'
// !union = false 改boolean 就會出錯

// ----------------------------
// 陣列
// ----------------------------
// @基本
let ary1: string[] = ['a', 'b']
let ary2: string[][] = [['aa', 'bb']] // 二維陣列

// @元祖
let tuple: [number, string, boolean] = [1, 'a', true]
let tuple2: [string, string][] = [['a', 'b']] // 二維陣列

// ----------------------------
// Enum 枚舉
// ----------------------------
// 開直播api => 獲取直播狀態
// 成功 失敗 直播中
// 0 -1  1

enum LiveStatus {
  SUCCESS = 0,
  FAIL = -1,
  STREAMING = 1,
}
const state = LiveStatus.SUCCESS
// console.log('state', state)

// ----------------------------
// type => 推薦用
// ----------------------------
type A = number | string
type B = boolean | string

let type: A
type = 999
type = 'str'
// !type = false 改boolean 就會出錯

let type2: B
type2 = true
// !type2 = 999 number 就會出錯

type Card = {
  name: string
  desc: string
}
const obj: Card = {
  name: 'curry',
  desc: '...',
}

// ----------------------------
// interface介面 => 跟type很像
// ----------------------------
// *type 和 interface 差異
// *1. = 和 不寫=
// *2. interface 可擴充 , type不可重複使用
// *3. 推薦用type interface因為可以擴充 會容易程式碼混亂

interface User {
  name: string
  desc?: string // 可選desc? =  string| undefind
}
// 可以多在寫一組User擴充 最後會融合再一起
interface User {
  age: number
}
const obj2: User = {
  name: 'curry',
  desc: '...',
  age: 18,
}
// -----------
interface User2 {
  date: string
  name: string
  address: string
}
// User2[]:設定一個陣列裡面有 User2物件
const tableData: User2[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
// ----------------------------
// function
// ----------------------------
// 參數
// (a:string ,b: string):string 最後推導類型可不寫 它對應式return的值
function hello(a: string, b: string): string {
  return a + b
}

function hello2(a: string, b: string): number {
  return 999
}
function hello3(a: number, b: boolean, c: string) {
  return 999
}

// undefined 有問號的要放最後
function hello4(name: string, age?: number) {
  // 狀況1
  // age有可能會是 number | undefined
  // a是 number
  // age 就不能賦值給 a
  let a: number
  // !a = age
  return
}

function child(a: number) {
  // console.log('a', a)
}
function hello5(name: string, age?: number) {
  // 狀況2
  // age有可能會是 number | undefined
  // a是 number
  // age 就不能賦值給 a

  // 這行防呆 防止age = undefined
  // 就不會出錯了
  if (age === undefined) return -1
  child(age)
  return
}

const func = () => {
  return 99
}

// @解構
const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User
  rowIndex: number
}) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}
// *1.{row,rowIndex,}: {row: User ,rowIndex: number}
// ----
// {row, rowIndex,}: {row: User, rowIndex: number}：這種寫法使用了物件解構語法，
// 將 {row: User, rowIndex: number} 中的屬性解構為獨立的變數 row 和 rowIndex。
// 這種寫法通常用於函式參數中，以便更方便地訪問物件的屬性。

// *2.{row: User ,rowIndex: number}
// ----
// {row: User, rowIndex: number}：這種寫法是直接定義了一個物件的形狀，
// 指定了它的屬性名稱和對應的類型。這種寫法通常用於變數或常數的初始化，或者用於指定物件的型別。

// ----------------------------
// as 和 unknown 型別斷言（Type Assertion）
// ----------------------------
// 如果資料原本是這樣
const initdata = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
}
// 就要先把它宣告好 用type 或 interface
// type Data = {
//   userId : number,
//   id: number,
//   title: string,
//   completed:boolean,
// }
// -----------
interface Data {
  userId: number
  id: number
  title: string
  completed: boolean
}
const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const resData = (await res.json()) as Data
  console.log('resData', resData)
}
getData()

const data1: Data = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
}

type Beta = {
  name: string
}
// 假設data1 是動態的
const beta = data1 as unknown as Beta

// -----------
// @在外層宣告 resData 變數
// let resData: Data;
// const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   resData = await res.json();
//   console.log('resData' , resData);
// }
// getData();

// -----------
// 1.變數型別斷言：
let myVariable: any = 'Hello, World'
let strLength = (myVariable as string).length
// 斷言 myVariable 為 string，以訪問 length 屬性

// 2.型別轉換：
let myValue: any = 42
let myNumber: number = myValue as number
// 將 myValue 轉換為 number 型別

// 3.物件型別斷言：
let obj3: any = { name: 'Alice' }
let person = obj3 as { name: string }
// 斷言 obj 是具有 name 屬性的物件

// 這表示您希望 buttons 這個陣列中的
// 每個物件的屬性值都是不可變的（immutable）
const buttons = [
  { type: '', text: 'plain' },
  { type: 'primary', text: 'primary' },
] as const

// 4.接口型別斷言：
interface Person {
  name: string
  age: number
}
let data: any = { name: 'Bob', age: 30 }
let personData = data as Person // 斷言 data 符合 Person 接口的結構

// 5.函數的型別斷言：
function calculateTotal(a: number, b: number): number {
  return a + b
}
const result = (calculateTotal as (x: number, y: number) => number)(5, 3)
// 斷言 calculateTotal 函數的型別

// ----------------------------
// class
// ----------------------------
// * 以下方法 只有開發方式是私有變數
// * 打包後還是看的到 和console.log都看的到
// * 且這3種方法只有typescript才有
// -----------
// public     公開    => 外面都能訪問到
// private    私有    => 只有父層 能訪問到
// protected  受保護  => 繼承子層能訪問到

class Live {
  roomName: string
  private id: string
  protected name: string

  constructor(payRoom: string, payid: string, payName: string) {
    // console.log(`建立直播中...`)
    this.roomName = payRoom
    this.id = payid
    this.name = payName
  }
  start() {
    this.roomName
    this.name
    // 只有自己可以訪問到private
    // this.id
  }
}
class CarLive extends Live {
  constructor(payRoom: string, payid: string, payName: string) {
    super(payRoom, payid, payName)
  }
  start() {
    this.roomName
    // 可以訪問到 受保護參數
    this.name

    // 這裡也是無法訪問id
    // this.id
  }
}
// 外面 => 都只能訪問到 public參數
const live = new Live('1號', '00001', 'curry')
// console.log(`live`, live)
const carLive = new CarLive('car room', '00002', 'curry2')
// console.log(`carLive`, carLive)

// @原生私有變數
// 真正的私有變數 只有原生javascript
class Live2 {
  #name
  constructor(payname: string) {
    this.#name = payname
  }
}
const live2 = new Live2('live2')
// console.log(`live2`, live2)
// 因為屬性 '#name' 具有私人識別碼，所以無法在類別 'Live2' 外存取該屬性
// console.log 也看不到這變數

// @class 結合 interface 寫法
// *這邊不能寫 private 修飾詞
interface CarProps {
  name: string
  age: number
  start: () => void
}
class Car implements CarProps {
  // class 結合 interface
  // 這邊不能寫 private 修飾詞
  name: string
  age: number
  constructor(payname: string, payage: number) {
    this.name = payname
    this.age = payage
  }
  start() {}
}

// ----------------------------
// 泛型<> 動態型別參數
// ----------------------------
// @陣列
interface ListItem {
  imgUrl: string
  name: string
}
const multipleSelection = ref<User[]>([])
const lists = ref<ListItem[]>([])
// <ListItem[]>：這表示 lists是一個泛型變數，
// 允許您指定陣列[]中元素的類型,是一個ListItem 的物件類型

const Ref = ref<Type<typeof ElTable>>()
// - `<T>`: 這部分表示一個泛型參數，通常用來指定型別或類別。
// - `T<typeof ElTable>`: 這個表達式是在指定 `T` 泛型時使用的。`T` 泛型被用來指定變數 `Ref` 的型別，
// - 而`typeof ElTable` 則表示取得 `ElTable` 元件的型別。

// 所以，整個程式碼表示創建一個響應式變數 `Ref`，其型別為 `ElTable` 元件的型別。
// 這將讓您在 `Ref` 中存儲一個 `ElTable` 元件的實例，並且該變數是響應式的，
// 這意味著當 `ElTable` 的實例發生變化時，該變數也會自動反應這些變化。

const checked = ref<boolean | string | number>(false)

// @函式
function print<T>(data: T) {
  // console.log(`泛型:data` , data);
}
print<number>(999)
print<string>('curry')
print<boolean>(true)

// 箭頭函示
const print2 = <T>(data: T) => {
  // console.log(`泛型:data`, data);
}

// @class
class Print<T> {
  data: T
  constructor(payload: T) {
    this.data = payload
  }
}

const payload = new Print<number>(999)
const payload2 = new Print<string>('curry')
// console.log(`泛型:payload` , payload);
// console.log(`泛型:payload2` , payload2);

// ----------------------------
// Utility Types
// https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
// ----------------------------
// @Record => 組物件
// 基本範例
// key: string // value: boolean
const obj1: Record<string, boolean> = {
  // 宣告 string: boolean
  name: true,
  // !age : 123 // 後面是Number 所以報錯
}
//----------------
interface CatInfo {
  age: number
  breed: string
}
type CatName = 'miffy' | 'boris' | 'mordred'

// key: CatName // value: CatInfo
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
}
// console.log(`Record: cats`, cats)

// @Pick => 挑選要的
interface Todo {
  title: string
  description: string
  completed: boolean
}
type TodoPreview = Pick<Todo, 'title' | 'completed'>
const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}

// @Omit => 排除不要的
interface Todo2 {
  title: string
  description: string
  completed: boolean
  createdAt: number
}
type TodoPreview2 = Omit<Todo2, 'description'>
const todo2: TodoPreview2 = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
}

// ----------------------------
// React + typescript
// ----------------------------
// import { useState } from 'react'
// import './App.css'

// // type TitleProps = {
// //   name: string
// // }
// interface TitleProps<T> {
//   name: T
// }
// // 1.先從裡面看<TitleProps<string>
// // 2.再看外層React.FC<>
// const Title: React.FC<TitleProps<string>> = ({ name }) => {
//   return <p>Props:{name}</p>
// }

// const App: React.FC = () => {
//   // 單數類型 會自動推導
//   const [count, setCount] = useState(1000)
//   // 複數類型
//   const [title, settitle] = useState<number | string>('白爛貓')

//   return (
//     <>
//       <p>{title}賣 {count}元</p>
//       <Title name={'curry'}></Title>
//     </>
//   )
// }

// export default App
