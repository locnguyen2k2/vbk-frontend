import { Helmet } from 'react-helmet';
import { Card, Checkbox, Col, Flex, Form, Input, Row } from 'antd';
import { TableLabel } from '../../../Atoms/Label/TableLabel';
import { HomeOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { FormActions } from '../../../Molecules/Actions/FormActions';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import {
  ProductCategoryDetailQuery,
  ProductCategoryModel,
  QueryProductCategoryDetailArgs,
  useUpdateProductCategoryMutation,
} from '../../../../generated/graphql';
import { PROD_CATEGORIES_DETAIL_QUERY } from '../../../../apis/services/productCategories/productCategory.query';

export const MovieCategoryForm = (props: any) => {
  const [form] = Form.useForm();

  const onLoadDataCompleted = (rawData: any) => {
    const data = rawData as ProductCategoryModel;

    form.setFields([
      { name: 'name', value: data.name },
      { name: 'value', value: data.value },
      { name: 'description', value: data.description },
      { name: 'enable', value: data.enable },
    ]);
  };

  const onSubmit = (values: any) => {
    const updateProdCategoryArgs = {
      name: values.name,
      description: values.description,
      value: values.value,
      enable: values.enable,
    };

    if (props?.id)
      updateProdCategory({
        variables: {
          updateProductCategoryArgs: updateProdCategoryArgs,
          productCategoryId: props.id,
        },
      }).then(props.onCompleted);
  };


  const onLoadData = () => {
    prodCategoryDetail({ variables: { productCategoryId: props.id } }).then((res) => {
      if (res.data?.productCategoryDetail)
        onLoadDataCompleted(res.data.productCategoryDetail);
    });
  };

  const [updateProdCategory, { loading: loadingUpdate }] = useUpdateProductCategoryMutation({
    fetchPolicy: 'no-cache',
    onError: props.onError,
  });

  const [prodCategoryDetail, { loading: loadingDetail }]: LazyQueryResultTuple<ProductCategoryDetailQuery, QueryProductCategoryDetailArgs> = useLazyQuery(PROD_CATEGORIES_DETAIL_QUERY, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });

  useEffect(() => {
    onLoadData();
  }, [props.id]);
  return (
    <>
      <Helmet>
        <title>Danh sách lịch chiếu | {`${process.env.REACT_APP_NAME}`}</title>
        <meta name="description" content="Quản lý danh sách phim" />
      </Helmet>

      <Card>
        <Row gutter={[24, 24]}>

          <TableLabel content={'Nghệ sĩ'}
                      items={[
                        { title: <HomeOutlined />, link: '/' },
                        { title: `${props.id ? props.onlyView ? 'Xem' : 'Cập nhật' : 'Tạo'}` },
                      ]}
          />
          <FormActions
            onUpdate={props.onlyView ? undefined : () => form.submit()}
            onCancel={props.onCancel}
          />

          <Col span={24}>
            <Form layout={'vertical'}
                  onFinish={onSubmit} disabled={props?.onlyView}
                  form={form}>
              <Flex>
                <Col className={'left'} span={12}>
                  <Form.Item name={'name'} label={'Họ'}>
                    <Input name={'name'} />
                  </Form.Item>
                </Col>

                <Col className={'right'} span={12}>
                  <Form.Item name={'value'} label={'Tên'}>
                    <Input name={'value'} />
                  </Form.Item>
                </Col>
              </Flex>

              <Flex>
                <Col className={'left'} span={12}>
                  <Form.Item className={'left'} label={'Ngày sinh'} name={'description'}>
                    <Input.TextArea name={'description'} />
                  </Form.Item>
                </Col>

                <Col className={'right'} span={12}>
                  <Form.Item className={'right'} layout={'horizontal'} label={'Còn quản lý'} name={'enable'}
                             valuePropName="checked">
                    <Checkbox name={'enable'} />
                  </Form.Item>
                </Col>
              </Flex>
            </Form>
          </Col>
        </Row>
      </Card>
    </>
  );
};