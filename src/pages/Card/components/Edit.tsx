// 根據你的檔案結構來調整路徑
import { Itemtype } from '@/pages/Card/index'
import { v4 } from 'uuid'
import { useState, Dispatch, SetStateAction } from 'react'
import styles from '@/assets/scss/module/input.module.scss'

interface EditProps {
  addData: Dispatch<SetStateAction<Itemtype[]>>
  submitStatus: {
    current: boolean
  }
}
const Edit: React.FC<EditProps> = ({ addData, submitStatus }) => {
  // input
  const [data, setData] = useState({
    note: '',
    date: '',
    time: '',
  })
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target
    // setData((state) => ({...state, [name]:value}))
    setData((state) => {
      return {
        ...state,
        [name]: value,
      }
    })
  }
  const addItem = () => {
    submitStatus.current = true
    addData((prevData) => {
      // 如果回傳是陣列資料
      // unshift() {} , ...prevData
      // push() : ...prevData , {}
      // console.log(`prevData`, prevData)
      return [
        {
          id: v4(),
          ...data,
        },
        ...prevData,
      ]
    })
  }
  return (
    <div className="form">
      <h1>備忘錄</h1>

      <label htmlFor="note">記事：</label>
      <input
        className={styles.input}
        type="text"
        id="note"
        name="note"
        value={data.note}
        onChange={handleChange}
      />

      <label htmlFor="date">日期：</label>
      <input
        className={styles.input}
        type="date"
        id="date"
        name="date"
        value={data.date}
        onChange={handleChange}
      />

      <label htmlFor="time">時間：</label>
      <input
        className={styles.input}
        type="time"
        id="time"
        name="time"
        value={data.time}
        onChange={handleChange}
      />
      <button onClick={addItem} className={styles.add}>
        新增
      </button>
    </div>
  )
}

export default Edit
