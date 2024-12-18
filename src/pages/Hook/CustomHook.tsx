import useKeyDown from '@/composables/useKeyDown'
import useLog from '@/composables/useLog'

const CustomHook: React.FC = () => {
  const keyDown = useKeyDown();

  useLog(keyDown);

  return (
    <div>
      <h1>你目前按下的按鈕是：{ keyDown }</h1>
    </div>
  )
}

export default CustomHook
