import { DatePicker, Flex, Form, Input } from 'antd';
import dayjs from 'dayjs';

export const Search = (props: any) => {
  const [form] = Form.useForm();
  const { from = false, to = false } = props;

  return (
    <Form className={'searchForm'} form={form}
          initialValues={{
            'fromDate': dayjs(),
            'toDate': dayjs(),
          }}
          onFinish={(values) => props.onSubmit(values)}>
      <Flex justify={'space-between'}>
        {from &&
          <Form.Item style={{ marginBottom: 0 }} name={'fromDate'} label={'Từ ngày'}>
            <DatePicker name={'fromDate'} placeholder={'DD-MM-YYYY'} />
          </Form.Item>
        }
        {to &&
          <Form.Item style={{ marginBottom: 0 }} name={'toDate'} label={'Đến ngày'}>
            <DatePicker name={'toDate'} placeholder={'DD-MM-YYYY'} />
          </Form.Item>
        }
        <Form.Item style={{ marginBottom: 0 }} name={'keyword'}>
          <Input.Search
            name={'keyword'}
            placeholder="Nhập từ khóa tìm kiếm ..."
            size="middle"
            {...props}
            allowClear
            enterButton
            onSearch={form.submit}
          />
        </Form.Item>
      </Flex>
    </Form>
  );
};