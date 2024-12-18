import { useState, createContext, useContext } from 'react'

// 定義資料的型別
interface ProductData {
  title: string
  price: number
}

const UseContext: React.FC = () => {
  // 宣告Context 要放在全域
  const DataContext = createContext<ProductData | undefined>(undefined)

  // 父元件=> Provider DataContext
  const Products: React.FC = () => {
    const [data] = useState<ProductData>({
      title: 'PlayStation5',
      price: 75000,
    })

    return (
      // Provider傳遞資料用，會搭配一個 value 屬性。
      <DataContext.Provider value={data}>
        <ul>
          <li key={data.title}>
            <Card data={data} />
          </li>
        </ul>
      </DataContext.Provider>
    )
  }

  // 子元件
  const Card: React.FC<{ data: ProductData }> = ({ data }) => {
    return (
      <div>
        <h5>產品名稱：{data.title}</h5>
        <hr />
        <Button />
      </div>
    )
  }

  // 孫子元件=> 取useContext
  const Button: React.FC = () => {
    const getData = useContext(DataContext)

    if (!getData) {
      return null // 處理 getData 為 undefined 的情況
    }

    const pay = () => {
      window.alert(`你已成功購買 ${getData.title}`)
    }

    return (
      <button type="button" className="bg-blue-400 p-2" onClick={pay}>
        點我購買({getData.price} $)
      </button>
    )
  }

  return (
    <div>
      <Products />
    </div>
  )

  // ===================
  // ... themes ...
  // ===================
  // const themes = {
  //   light: {
  //     foreground: '#000000',
  //     background: '#eeeeee',
  //   },
  //   dark: {
  //     foreground: '#ffffff',
  //     background: 'yellow',
  //   },
  // }
  // //宣告Context 要放在全域
  // const ThemeContext = createContext(themes.dark)

  // function Toolbar() {
  //   return (
  //     <div>
  //       <ThemedButton />
  //     </div>
  //   )
  // }

  // function ThemedButton() {
  //   const { background, foreground } = useContext(ThemeContext)
  //   return (
  //     <button style={{ background, color: foreground }}>
  //       I am styled by theme context!
  //     </button>
  //   )
  // }

  // return (
  //   <ThemeContext.Provider value={themes.dark}>
  //     <Toolbar />
  //   </ThemeContext.Provider>
  // )
}

export default UseContext
