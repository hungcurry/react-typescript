// 根據你的檔案結構來調整路徑
import { Itemtype } from '@/pages/Card/index'
import { Dispatch, SetStateAction } from 'react'
import styles from '@/assets/scss/module/input.module.scss'

interface ItemProps {
  id: string
  note: string
  date: string
  time: string
  deleteData: Dispatch<SetStateAction<Itemtype[]>>
  submitStatus: {
    current: boolean
  }
}
const Item: React.FC<ItemProps> = ({
  id,
  note,
  date,
  time,
  deleteData,
  submitStatus,
}) => {
  const deleteItem = () => {
    submitStatus.current = true
    deleteData((prev) => {
      // console.log('prev', prev)
      return prev.filter((item) => item.id !== id)
    })
  }

  return (
    <div className={styles.item}>
      <div>
        <p>{id}</p>
        <p>{note}</p>
        <p>{`${date} / ${time}`}</p>
      </div>
      <button onClick={deleteItem} className={styles.remove}>
        刪除
      </button>
    </div>
  )
}

export default Item
