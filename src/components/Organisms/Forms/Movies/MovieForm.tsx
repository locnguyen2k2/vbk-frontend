import { Helmet } from 'react-helmet';
import { Card, Checkbox, Col, Flex, Form, Input, notification, Row, Skeleton, Upload } from 'antd';
import { TableLabel } from '../../../Atoms/Label/TableLabel';
import { HomeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { FormActions } from '../../../Molecules/Actions/FormActions';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import {
  CreateMovieArgs,
  MovieDetail,
  MovieDetailQuery,
  QueryMovieDetailArgs,
  useCreateMovieMutation,
  useUpdateMovieMutation,
} from '../../../../generated/graphql';
import { MOVIE_DETAIL_QUERY } from '../../../../apis/services/movies/movie.query';
import { SelectPersons } from '../../../Atoms/Select/SelectPersons';
import { SelectCategories } from '../../../Atoms/Select/SelectCategories';

export const MovieForm = (props: any) => {
  const [form] = Form.useForm();

  const [previewImage, setPreviewImage] = useState<any>(null);
  const [fileThumbnail, setFileThumbnail] = useState<any[]>([]);
  const [, contextHolder] = notification.useNotification();

  const onLoadDataCompleted = (rawData: any) => {
    const data = rawData as MovieDetail;

    if (data.thumbnail && data.thumbnail.path !== '') {
      setFileThumbnail([{
        uid: '-1',
        name: '',
        status: 'done',
        url: process.env.REACT_APP_ASSETS_URL + data.thumbnail.path,
      }]);
      setPreviewImage(process.env.REACT_APP_ASSETS_URL + data.thumbnail.path);
    } else {
      setFileThumbnail([]);
      setPreviewImage(null);
    }

    form.setFields([
      { name: 'name', value: data.name },
      { name: 'durationMin', value: data.durationMin },
      { name: 'language', value: data.language },
      { name: 'directorId', value: data.director.id },
      { name: 'categoryIds', value: data.categories.map((category) => category.id) },
      { name: 'castIds', value: data.casts.map((cast) => cast.id) },
      { name: 'description', value: data.description },
      { name: 'enable', value: data.enable },
    ]);
  };

  const onSubmit = (values: any) => {
    if (fileThumbnail[0] && fileThumbnail[0].uid !== '-1') {
      const file = fileThumbnail[0];
      delete file?.url;
      setFileThumbnail([file]);
    }
    const movieArgs = {
      name: values.name,
      thumbnail: fileThumbnail[0] && fileThumbnail[0].uid !== '-1' ? fileThumbnail[0] : undefined,
      durationMin: values.durationMin,
      language: values.language,
      directorId: values.directorId,
      castIds: values.castIds,
      categoryIds: values.categoryIds,
      description: values.description,
      enable: values.enable,
    } as CreateMovieArgs;

    if (props?.id)
      updateMovie({ variables: { updateMovieArgs: movieArgs, movieId: props.id } }).then((res) => {
        if (res.data?.updateMovie)
          props.onCompleted();
      });
    else
      createMovie({ variables: { createMovieArgs: movieArgs } }).then((res) => {
        if (res.data?.createMovie)
          props.onCompleted();
      });
  };

  const onRemoveFile = (file: any) => {
    const index = fileThumbnail.indexOf(file);
    const newFileList = fileThumbnail.slice();
    newFileList.splice(index, 1);
    setFileThumbnail(newFileList);
    if (previewImage) {
      URL.revokeObjectURL(previewImage);
    }
    setPreviewImage(null);
  };

  const handleBeforeUpload = (file: any) => {
    const previewUrl = URL.createObjectURL(file);
    file['url'] = previewUrl;
    setFileThumbnail([file]);
    setPreviewImage(previewUrl);
  };

  const onLoadData = () => {
    movieDetail({ variables: { movieId: props.id } }).then((res) => {
      if (res.data?.movieDetail)
        onLoadDataCompleted(res.data.movieDetail);
    });
  };
  const [updateMovie, { loading: loadingUpdate }] = useUpdateMovieMutation({
    fetchPolicy: 'no-cache',
    onError: props.onError,
  });

  const [createMovie, { loading: loadingCreate }] = useCreateMovieMutation({
    fetchPolicy: 'no-cache',
    onError: props.onError,
  });

  const [movieDetail, { loading: loadingMovie }]: LazyQueryResultTuple<MovieDetailQuery, QueryMovieDetailArgs> = useLazyQuery(MOVIE_DETAIL_QUERY, {
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
          <TableLabel content={'Phim'}
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
            {
              loadingUpdate || loadingMovie ? <Skeleton /> :
                <Form layout={'vertical'} onFinish={onSubmit} disabled={props?.onlyView} form={form}>
                  <Flex>
                    <Col className={'left'} span={4}>
                      <Form.Item name={'thumbnail'}>
                        <Upload onRemove={onRemoveFile}
                                beforeUpload={handleBeforeUpload}
                                fileList={fileThumbnail}
                                multiple={false}
                                maxCount={1}
                                accept={'image/*'}
                                listType="picture-card"
                        >
                          {fileThumbnail.length < 1 && !previewImage && 'Thumbnail'}
                        </Upload>
                      </Form.Item>
                    </Col>
                    <Col className={'right'} span={20}>
                      <Form.Item name={'name'} label={'Tên phim'}>
                        <Input name={'name'} />
                      </Form.Item>

                      <Flex>
                        <Col className={'left'} span={12}>
                          <Form.Item name={'categoryIds'} label={'Thể loại'}>
                            <SelectCategories name={'categoryIds'} mode={'multiple'} />
                          </Form.Item>
                        </Col>

                        <Col className={'right'} span={12}>
                          <Form.Item name={'durationMin'} label={'Thời lượng'}>
                            <Input name={'durationMin'} />
                          </Form.Item>
                        </Col>
                      </Flex>
                    </Col>
                  </Flex>
                  <Flex>
                    <Col className={'left'} span={12}>
                      <Form.Item name={'directorId'} label={'Đạo diễn'}>
                        <SelectPersons name={'directorId'} />
                      </Form.Item>
                    </Col>

                    <Col className={'right'} span={12}>
                      <Form.Item name={'castIds'} label={'Diễn viên'}>
                        <SelectPersons mode={'multiple'} name={'castIds'} />
                      </Form.Item>
                    </Col>
                  </Flex>
                  <Form.Item label={'Mô tả'} name={'description'}>
                    <Input.TextArea name={'description'} />
                  </Form.Item>

                  <Form.Item layout={'horizontal'} label={'Còn quản lý'} name={'enable'} valuePropName="checked">
                    <Checkbox name={'enable'} />
                  </Form.Item>
                </Form>
            }
          </Col>
        </Row>
        {contextHolder}
      </Card>
    </>
  );
};