import { DatePicker, Space } from 'antd'

function UserManage() {
  function onChange(date: any, dateString: string) {
    console.log(date, dateString)
  }
  return (
    <div className="user-manage">
      user-manage21111111111
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
        <DatePicker onChange={onChange} picker="week" />
        <DatePicker onChange={onChange} picker="month" />
        <DatePicker onChange={onChange} picker="quarter" />
        <DatePicker onChange={onChange} picker="year" />
      </Space>
      ,
    </div>
  )
}

export default UserManage
