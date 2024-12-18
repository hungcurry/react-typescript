import { useState , useEffect} from 'react'


// 練習區塊
function Example() {
  // 宣告 state 變數、加入 handleChange 函式並與 input 綁定
  const [userData, setUserData] = useState({
    account: "白爛貓",
    password: "123"
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log('name',name)
    // console.log('value',value)

    // setUserData((state) => ({ ...state, [name]: value }));
    setUserData((state)=>{
      console.log(`state` , state); // 原本物件無法 監控到變動
      return (
        {
          ...state,
          [name]:value
        }
      )
    })
  };
  useEffect(() => {
    console.log('userData',userData)
  }, [userData]); // 在 userData 更新時觸發 useEffect

  const submit = () => {
    console.log(`帳號：${userData.account}，密碼：${userData.password}`);
  };
  return (
    <div>
      <div>
        <label htmlFor="account">帳號</label>
        <input
          id="account"
          name="account"
          value={userData.account}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="password">密碼</label>
        <input
          id="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
      </div>

      <button type='button' onClick={submit}>送出 </button>
    </div>
  );
}
// 區塊結束

export default Example
