import { Button, Select, Space } from 'antd';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import {
  PermissionEnum,
  PersonModel,
  PersonsQuery,
  QueryPersonsArgs,
  SystemRoleEnum,
} from '../../../generated/graphql';
import { PERSONS_PAGINATED_QUERY } from '../../../apis/services/persons/person.query';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks';
import { PlusOutlined } from '@ant-design/icons';
import { PersonForm } from '../../Organisms/Forms/Persons/PersonForm';
import { DraggableForm } from '../../Molecules/Form/DraggableForm';

export const SelectPersons = (props: any) => {
  const user = useAppSelector((state) => state.user);
  const userPermissions = user?.userPermissions || [];
  const roles = user.roles;
  const [data, setData] = useState<any[]>([]);
  const [modalUpdate, setModalUpdate] = useState<boolean>(false);
  const [modalCreate, setModalCreate] = useState<boolean>(false);

  const permissions = {
    add: roles.includes(SystemRoleEnum.Admin as never) || userPermissions.includes(PermissionEnum.AddPerson as never),
    update: roles.includes(SystemRoleEnum.Admin as never) || userPermissions.includes(PermissionEnum.UpdatePerson as never),
  };

  const toggleModalCreate = () => setModalCreate(!modalCreate);
  const toggleModalUpdate = () => setModalUpdate(!modalUpdate);

  const onLoadCompleted = (data: PersonModel[]) => {
    setData(data.map((item, index) => ({
      label: `${item.lastName} ${item.firstName}`,
      value: item.id,
      key: index,
    })));
  };

  const onLoadData = () => {
    getPersons({
      variables: {
        pageOptions: {
          all: true,
        },
      },
    }).then((res) => {
      if (res.data && res.data.persons) {
        onLoadCompleted(res.data.persons.data as PersonModel[]);
      }

    });
  };

  const [getPersons, { loading: loadingSchedules }]: LazyQueryResultTuple<PersonsQuery, QueryPersonsArgs> = useLazyQuery(PERSONS_PAGINATED_QUERY, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });

  useEffect(() => {
    onLoadData();
  }, []);
  return (
    <Space.Compact block>
      <Select {...props}
              options={data}
              allowClear={true}
              loading={loadingSchedules}
              style={{ minWidth: '150px' }}
      />

      {
        permissions.add && <Button type="primary" tabIndex={-1}
                                   title="Tạo mới chi nhánh"
                                   className={'rad-r-primary'}
                                   onClick={() => toggleModalCreate()}
                                   icon={<PlusOutlined />}
        />
      }

      <DraggableForm
        open={modalCreate}
        onCancel={toggleModalCreate}
        footer={null}
        width={1200}
        modal={<PersonForm
          onCompleted={() => {
            onLoadData();
            toggleModalCreate();
          }}
          onGoHome={toggleModalCreate}
          onCancel={toggleModalCreate}
        />}
      />
    </Space.Compact>
  );
};