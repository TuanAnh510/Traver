import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  
};

const Selectdate: React.FC = () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange}  className='border border-black w-[200px] mt-3' allowClear={false}/>
  </Space>
);

export default Selectdate;