import Item from './Item'
// 根據你的檔案結構來調整路徑
import { Itemtype } from '@/pages/Card/index'
import { Dispatch, SetStateAction } from 'react'
import styles from '@/assets/scss/module/input.module.scss'

interface ListProps {
  listData: Itemtype[]
  deleteData:  Dispatch<SetStateAction<Itemtype[]>>
  submitStatus: {
    current: boolean
  }
}
const List: React.FC<ListProps> = ({ listData, deleteData, submitStatus }) => {
  return (
    <div className={styles.list}>
      {listData.map((item) => {
        const { note, date, time, id } = item
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submitStatus={submitStatus}
          />
        )
      })}
    </div>
  )
}

export default List
