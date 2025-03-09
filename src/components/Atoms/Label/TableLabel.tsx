import { Label } from './Label';
import { Breadcrumb, Col } from 'antd';
import { Link } from 'react-router-dom';

export const TableLabel = (props: any) => {
  return (
    <Col className={'table-label'} span={24}>
      <Label content={props.content} />
      <Breadcrumb
        items={props.items.map((item: any) => {
            return {
              title: item.link ? <Link to={`${item.link}`}>{item.title}</Link> : item.title,
            };
          },
        )}
      />
    </Col>
  );
};