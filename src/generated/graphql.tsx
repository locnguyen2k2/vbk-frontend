import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type BaseShowTimeDto = {
  /** Mã sản phẩm */
  productId: Scalars['Int']['input'];
  /** Mã lịch chiếu */
  scheduleId: Scalars['Int']['input'];
  /** Mã phòng */
  sectorId: Scalars['Int']['input'];
  /** Thời gian bắt đầu */
  startTime: Scalars['String']['input'];
};

export type ChangePasswordArgs = {
  captcha: Scalars['String']['input'];
  captchaId: Scalars['String']['input'];
  /** Đăng xuất khỏi các thíết bị */
  logout?: Scalars['Boolean']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type ConfirmationArgs = {
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateMovieArgs = {
  castIds: Array<Scalars['Int']['input']>;
  categoryIds: Array<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  directorId: Scalars['Int']['input'];
  durationMin: Scalars['Int']['input'];
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Ngôn ngữ gốc */
  language: ProductLanguages;
  name: Scalars['String']['input'];
  /** Ngôn ngữ thuyết minh */
  narrative?: InputMaybe<ProductLanguages>;
  sellPrice: Scalars['Float']['input'];
  /** Ngôn nữ phụ đề */
  subtitle?: InputMaybe<ProductLanguages>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
};

export type CreatePermissionArgs = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  value: PermissionEnum;
};

export type CreatePersonArgs = {
  birthDay?: InputMaybe<Scalars['DateTime']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type CreateProductCategory = {
  description?: InputMaybe<Scalars['String']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  value: ProductCategoryEnum;
};

export type CreateRole = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  permissionIds: Array<Scalars['Int']['input']>;
  value: RoleEnum;
};

export type CreateRowArgs = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  sectorId: Scalars['Int']['input'];
};

export type CreateScheduleArgs = {
  /** Ngày hiệu lực */
  date: Scalars['DateTime']['input'];
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateSeatArgs = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  rowId: Scalars['Int']['input'];
  status: SeatStatusEnum;
};

export type CreateSectorArgs = {
  description: Scalars['String']['input'];
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  status: SectorStatusEnum;
  theaterId: Scalars['Int']['input'];
};

export type CreateShowTimesArgs = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Danh sách xuất chiều */
  showTimeArgs: Array<BaseShowTimeDto>;
};

export type CreateSystemRole = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  permissionIds: Array<Scalars['Int']['input']>;
  value: SystemRoleEnum;
};

export type CreateTheaterArgs = {
  address: Scalars['String']['input'];
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  name: Scalars['String']['input'];
};

export type CreateUserArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  birthDay?: InputMaybe<Scalars['DateTime']['input']>;
  createBy?: InputMaybe<Scalars['Float']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<GenderEnum>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<UserStatusEnum>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Credential = {
  __typename?: 'Credential';
  accessToken: Scalars['String']['output'];
  profile: UserProfile;
  refreshToken: Scalars['String']['output'];
};

export type CustomerModel = {
  __typename?: 'CustomerModel';
  createBy: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  enable: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  updateBy: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type EmployeeModel = {
  __typename?: 'EmployeeModel';
  createBy: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  enable: Scalars['Boolean']['output'];
  endDateOfWork: Scalars['String']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  startDateOfWork: Scalars['String']['output'];
  updateBy: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type EnableMovieArgs = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnablePersonArgs = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnableProdCategoryArgs = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnableRowArgs = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnableScheduleArgs = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnableSeatArgs = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnableSectorArgs = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnableShowTimeArgs = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnableTheaterArgs = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FileInfo = {
  __typename?: 'FileInfo';
  createBy: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  enable: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updateBy: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ForgotPasswordArgs = {
  email: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export enum GenderEnum {
  Female = 'Female',
  Male = 'Male',
  Other = 'Other'
}

export type ListShowTimes = {
  __typename?: 'ListShowTimes';
  data: Array<ShowTimeDetail>;
  paginated: Pagination;
};

export type LoginArgs = {
  captcha: Scalars['String']['input'];
  captchaId: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type MovieDetail = {
  __typename?: 'MovieDetail';
  casts: Array<PersonModel>;
  categories: Array<ProductCategoryModel>;
  createBy?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  director: PersonModel;
  durationMin?: Maybe<Scalars['Int']['output']>;
  enable?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Ngôn ngữ gốc */
  language?: Maybe<ProductLanguages>;
  name?: Maybe<Scalars['String']['output']>;
  /** Ngôn ngữ thuyết minh */
  narrative?: Maybe<ProductLanguages>;
  sellPrice?: Maybe<Scalars['Float']['output']>;
  /** Ngôn nữ phụ đề */
  subtitle?: Maybe<ProductLanguages>;
  thumbnail?: Maybe<FileInfo>;
  updateBy?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MovieProductModel = {
  __typename?: 'MovieProductModel';
  createBy: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  durationMin: Scalars['Int']['output'];
  enable: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  /** Ngôn ngữ gốc */
  language: ProductLanguages;
  name: Scalars['String']['output'];
  /** Ngôn ngữ thuyết minh */
  narrative?: Maybe<ProductLanguages>;
  sellPrice: Scalars['Float']['output'];
  /** Ngôn nữ phụ đề */
  subtitle?: Maybe<ProductLanguages>;
  updateBy: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MovieProductPageOptions = {
  /** Get all default false */
  all?: InputMaybe<Scalars['Boolean']['input']>;
  /** Lọc theo lịch chiếu phim */
  date?: InputMaybe<Scalars['DateTime']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  fromDate?: Scalars['DateTime']['input'];
  keyword?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** createdAt is set default */
  sort?: InputMaybe<Scalars['String']['input']>;
  /** DESC is set default */
  sorted?: InputMaybe<SortedEnum>;
  take?: InputMaybe<Scalars['Int']['input']>;
  toDate?: Scalars['DateTime']['input'];
};

export type MovieProducts = {
  __typename?: 'MovieProducts';
  data: Array<MovieSchedulesDetail>;
  paginated: Pagination;
};

export type MovieSchedulesDetail = {
  __typename?: 'MovieSchedulesDetail';
  casts?: Maybe<Array<PersonModel>>;
  categories?: Maybe<Array<ProductCategoryModel>>;
  createBy?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  director?: Maybe<PersonModel>;
  durationMin?: Maybe<Scalars['Int']['output']>;
  enable?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Ngôn ngữ gốc */
  language?: Maybe<ProductLanguages>;
  name?: Maybe<Scalars['String']['output']>;
  /** Ngôn ngữ thuyết minh */
  narrative?: Maybe<ProductLanguages>;
  sellPrice?: Maybe<Scalars['Float']['output']>;
  showTimes?: Maybe<Array<MovieShowTime>>;
  /** Ngôn nữ phụ đề */
  subtitle?: Maybe<ProductLanguages>;
  thumbnail?: Maybe<FileInfo>;
  updateBy?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MovieShowTime = {
  __typename?: 'MovieShowTime';
  createBy?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  enable?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  schedule?: Maybe<ScheduleModel>;
  sector?: Maybe<SectorModel>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  theater?: Maybe<TheaterModel>;
  updateBy?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: Scalars['String']['output'];
  confirmToken: Scalars['String']['output'];
  createMovie: MovieSchedulesDetail;
  createPermission: PermissionModel;
  createPerson: PersonModel;
  createProductCategory: ProductCategoryDetail;
  createRole: RoleDetail;
  createRow: RowDetail;
  createSchedule: ScheduleDetail;
  createSeat: SeatDetail;
  createSector: SectorDetail;
  createShowTimes: Array<ShowTimesModel>;
  createSystemRole: RoleDetail;
  createTheater: TheaterDetail;
  createUser: UserModel;
  deleteRoles: Scalars['String']['output'];
  enableMovies: Array<MovieProductModel>;
  enablePersons: Array<PersonModel>;
  enableProdCategories: Array<ProductCategoryModel>;
  enableRows: Array<RowModel>;
  enableSchedules: Array<ScheduleModel>;
  enableSeats: Array<SeatModel>;
  enableSectors: Array<SectorModel>;
  enableShowTimes: Array<ShowTimesModel>;
  enableTheaters: Array<TheaterModel>;
  forgotPassword: Scalars['String']['output'];
  forgotUsername: Scalars['String']['output'];
  login: Credential;
  logout: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  register: Scalars['String']['output'];
  resendConfirmation: Scalars['String']['output'];
  roleDetail: RoleDetail;
  updateMovie: MovieDetail;
  updatePermission: PermissionModel;
  updatePerson: PersonModel;
  updateProductCategory: ProductCategoryDetail;
  updateProfile: UserProfile;
  updateRole: RoleDetail;
  updateRow: RowDetail;
  updateSchedule: ScheduleDetail;
  updateSeat: SeatDetail;
  updateSector: SectorDetail;
  updateShowTimes: Scalars['String']['output'];
  updateTheater: TheaterDetail;
  updateUser: UserProfile;
};


export type MutationChangePasswordArgs = {
  changePasswordArgs: ChangePasswordArgs;
};


export type MutationConfirmTokenArgs = {
  confirmEmailArgs: ConfirmationArgs;
};


export type MutationCreateMovieArgs = {
  createMovieArgs: CreateMovieArgs;
};


export type MutationCreatePermissionArgs = {
  createPermissionArgs: CreatePermissionArgs;
};


export type MutationCreatePersonArgs = {
  createPersonArgs: CreatePersonArgs;
};


export type MutationCreateProductCategoryArgs = {
  createProductCategoryArgs: CreateProductCategory;
};


export type MutationCreateRoleArgs = {
  createRoleArgs: CreateRole;
};


export type MutationCreateRowArgs = {
  createRowArgs: CreateRowArgs;
};


export type MutationCreateScheduleArgs = {
  createScheduleArgs: CreateScheduleArgs;
};


export type MutationCreateSeatArgs = {
  createSeatArgs: CreateSeatArgs;
};


export type MutationCreateSectorArgs = {
  createSectorArgs: CreateSectorArgs;
};


export type MutationCreateShowTimesArgs = {
  createShowTimesArgs: CreateShowTimesArgs;
};


export type MutationCreateSystemRoleArgs = {
  createSystemRoleArgs: CreateSystemRole;
};


export type MutationCreateTheaterArgs = {
  createTheaterArgs: CreateTheaterArgs;
};


export type MutationCreateUserArgs = {
  createUserArgs: CreateUserArgs;
};


export type MutationDeleteRolesArgs = {
  roleIds: Array<Scalars['Int']['input']>;
};


export type MutationEnableMoviesArgs = {
  enableMovieArgs: EnableMovieArgs;
  movieId: Array<Scalars['Int']['input']>;
};


export type MutationEnablePersonsArgs = {
  enablePersonArgs: EnablePersonArgs;
  personId: Array<Scalars['Int']['input']>;
};


export type MutationEnableProdCategoriesArgs = {
  enableProdCategoryArgs: EnableProdCategoryArgs;
  productCategoryId: Array<Scalars['Int']['input']>;
};


export type MutationEnableRowsArgs = {
  enableRowArgs: EnableRowArgs;
  rowId: Array<Scalars['Int']['input']>;
};


export type MutationEnableSchedulesArgs = {
  enableScheduleArgs: EnableScheduleArgs;
  scheduleId: Array<Scalars['Int']['input']>;
};


export type MutationEnableSeatsArgs = {
  enableSeatArgs: EnableSeatArgs;
  seatId: Array<Scalars['Int']['input']>;
};


export type MutationEnableSectorsArgs = {
  enableSectorArgs: EnableSectorArgs;
  sectorId: Array<Scalars['Int']['input']>;
};


export type MutationEnableShowTimesArgs = {
  enableShowTimeArgs: EnableShowTimeArgs;
  showTimesId: Array<Scalars['Int']['input']>;
};


export type MutationEnableTheatersArgs = {
  enableTheaterArgs: EnableTheaterArgs;
  theaterId: Array<Scalars['Int']['input']>;
};


export type MutationForgotPasswordArgs = {
  forgotPasswordArgs: ForgotPasswordArgs;
};


export type MutationForgotUsernameArgs = {
  input: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginArgs: LoginArgs;
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  registerArgs: RegisterArgs;
};


export type MutationResendConfirmationArgs = {
  resendConfirmation: ResendConfirmationArgs;
};


export type MutationRoleDetailArgs = {
  roleId: Scalars['Int']['input'];
};


export type MutationUpdateMovieArgs = {
  movieId: Scalars['Int']['input'];
  updateMovieArgs: UpdateMovieArgs;
};


export type MutationUpdatePermissionArgs = {
  permissionId: Scalars['Int']['input'];
  updatePermissionArgs: UpdatePermission;
};


export type MutationUpdatePersonArgs = {
  personId: Scalars['Int']['input'];
  updatePersonArgs: UpdatePersonArgs;
};


export type MutationUpdateProductCategoryArgs = {
  productCategoryId: Scalars['Int']['input'];
  updateProductCategoryArgs: UpdateProductCategoryArgs;
};


export type MutationUpdateProfileArgs = {
  updateProfileArgs: UpdateProfileArgs;
};


export type MutationUpdateRoleArgs = {
  roleId: Scalars['Float']['input'];
  updateRoleArgs: UpdateRoleArgs;
};


export type MutationUpdateRowArgs = {
  rowId: Scalars['Int']['input'];
  updateRowArgs: UpdateRowArgs;
};


export type MutationUpdateScheduleArgs = {
  scheduleId: Scalars['Int']['input'];
  updateScheduleArgs: UpdateScheduleArgs;
};


export type MutationUpdateSeatArgs = {
  seatId: Scalars['Int']['input'];
  updateSeatArgs: UpdateSeatArgs;
};


export type MutationUpdateSectorArgs = {
  sectorId: Scalars['Int']['input'];
  updateSectorArgs: UpdateSectorArgs;
};


export type MutationUpdateShowTimesArgs = {
  showTimesId: Scalars['Int']['input'];
  updateShowTimesArgs: UpdateShowTimesArgs;
};


export type MutationUpdateTheaterArgs = {
  theaterId: Scalars['Int']['input'];
  updateTheaterArgs: UpdateTheaterArgs;
};


export type MutationUpdateUserArgs = {
  updateUserArgs: UpdateUserArgs;
  userId: Scalars['Int']['input'];
};

export type Pagination = {
  __typename?: 'Pagination';
  fromDate: Scalars['String']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrev: Scalars['Boolean']['output'];
  keyword: Scalars['String']['output'];
  numberRecords: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  pages: Scalars['Int']['output'];
  sort: Scalars['String']['output'];
  sorted: SortedEnum;
  take: Scalars['Int']['output'];
  toDate: Scalars['String']['output'];
};

export enum PermissionEnum {
  AddMovie = 'AddMovie',
  AddPermission = 'AddPermission',
  AddPerson = 'AddPerson',
  AddProductCategory = 'AddProductCategory',
  AddRole = 'AddRole',
  AddRow = 'AddRow',
  AddSchedule = 'AddSchedule',
  AddSeat = 'AddSeat',
  AddSector = 'AddSector',
  AddShowTimes = 'AddShowTimes',
  AddSystemRole = 'AddSystemRole',
  AddTheater = 'AddTheater',
  AddTickets = 'AddTickets',
  AddUser = 'AddUser',
  DeleteAccount = 'DeleteAccount',
  DeleteMovie = 'DeleteMovie',
  DeletePermission = 'DeletePermission',
  DeletePerson = 'DeletePerson',
  DeleteProductCategory = 'DeleteProductCategory',
  DeleteRole = 'DeleteRole',
  DeleteRow = 'DeleteRow',
  DeleteSchedule = 'DeleteSchedule',
  DeleteSeat = 'DeleteSeat',
  DeleteSector = 'DeleteSector',
  DeleteShowTimes = 'DeleteShowTimes',
  DeleteSystemRole = 'DeleteSystemRole',
  DeleteTheater = 'DeleteTheater',
  DeleteTickets = 'DeleteTickets',
  DeleteUser = 'DeleteUser',
  DetailAccount = 'DetailAccount',
  DetailMovie = 'DetailMovie',
  DetailPermission = 'DetailPermission',
  DetailPerson = 'DetailPerson',
  DetailProductCategory = 'DetailProductCategory',
  DetailRole = 'DetailRole',
  DetailRow = 'DetailRow',
  DetailSchedule = 'DetailSchedule',
  DetailSeat = 'DetailSeat',
  DetailSector = 'DetailSector',
  DetailShowTimes = 'DetailShowTimes',
  DetailSystemRole = 'DetailSystemRole',
  DetailTheater = 'DetailTheater',
  DetailTickets = 'DetailTickets',
  DetailUser = 'DetailUser',
  DisabledAccount = 'DisabledAccount',
  DisabledProductCategory = 'DisabledProductCategory',
  DisabledUser = 'DisabledUser',
  ListMovie = 'ListMovie',
  ListPermission = 'ListPermission',
  ListPerson = 'ListPerson',
  ListProductCategory = 'ListProductCategory',
  ListRole = 'ListRole',
  ListRow = 'ListRow',
  ListSchedule = 'ListSchedule',
  ListSeat = 'ListSeat',
  ListSector = 'ListSector',
  ListShowTimes = 'ListShowTimes',
  ListSystemRole = 'ListSystemRole',
  ListTheater = 'ListTheater',
  ListTickets = 'ListTickets',
  ListUser = 'ListUser',
  UpdateAccount = 'UpdateAccount',
  UpdateMovie = 'UpdateMovie',
  UpdatePermission = 'UpdatePermission',
  UpdatePerson = 'UpdatePerson',
  UpdateProductCategory = 'UpdateProductCategory',
  UpdateRole = 'UpdateRole',
  UpdateRow = 'UpdateRow',
  UpdateSchedule = 'UpdateSchedule',
  UpdateSeat = 'UpdateSeat',
  UpdateSector = 'UpdateSector',
  UpdateShowTimes = 'UpdateShowTimes',
  UpdateSystemRole = 'UpdateSystemRole',
  UpdateTheater = 'UpdateTheater',
  UpdateTickets = 'UpdateTickets',
  UpdateUser = 'UpdateUser'
}

export type PermissionModel = {
  __typename?: 'PermissionModel';
  createBy: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  enable: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  updateBy: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value: PermissionEnum;
};

export type PermissionPageOptions = {
  /** Get all default false */
  all?: InputMaybe<Scalars['Boolean']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  fromDate?: Scalars['DateTime']['input'];
  keyword?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  roleIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** createdAt is set default */
  sort?: InputMaybe<Scalars['String']['input']>;
  /** DESC is set default */
  sorted?: InputMaybe<SortedEnum>;
  take?: InputMaybe<Scalars['Int']['input']>;
  toDate?: Scalars['DateTime']['input'];
};

export type Permissions = {
  __typename?: 'Permissions';
  data: Array<PermissionModel>;
  paginated: Pagination;
};

export type PersonModel = {
  __typename?: 'PersonModel';
  birthDay?: Maybe<Scalars['String']['output']>;
  createBy: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  enable: Scalars['Boolean']['output'];
  firstName: Scalars['String']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  lastName: Scalars['String']['output'];
  updateBy: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PersonPageOptions = {
  /** Get all default false */
  all?: InputMaybe<Scalars['Boolean']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  fromDate?: Scalars['DateTime']['input'];
  keyword?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** createdAt is set default */
  sort?: InputMaybe<Scalars['String']['input']>;
  /** DESC is set default */
  sorted?: InputMaybe<SortedEnum>;
  take?: InputMaybe<Scalars['Int']['input']>;
  toDate?: Scalars['DateTime']['input'];
};

export type Persons = {
  __typename?: 'Persons';
  data: Array<PersonModel>;
  paginated: Pagination;
};

export type ProductCategories = {
  __typename?: 'ProductCategories';
  data: Array<ProductCategoryModel>;
  paginated: Pagination;
};

export type ProductCategoryDetail = {
  __typename?: 'ProductCategoryDetail';
  createBy: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  enable: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  updateBy: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value: ProductCategoryEnum;
};

export enum ProductCategoryEnum {
  Action = 'ACTION',
  Comedy = 'COMEDY',
  Drama = 'DRAMA',
  Horror = 'HORROR',
  Romance = 'ROMANCE',
  SciFi = 'SCI_FI',
  Thriller = 'THRILLER'
}

export type ProductCategoryModel = {
  __typename?: 'ProductCategoryModel';
  createBy: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  enable: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  updateBy: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value: ProductCategoryEnum;
};

export type ProductCategoryPageOptions = {
  /** Get all default false */
  all?: InputMaybe<Scalars['Boolean']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  fromDate?: Scalars['DateTime']['input'];
  keyword?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** createdAt is set default */
  sort?: InputMaybe<Scalars['String']['input']>;
  /** DESC is set default */
  sorted?: InputMaybe<SortedEnum>;
  take?: InputMaybe<Scalars['Int']['input']>;
  toDate?: Scalars['DateTime']['input'];
};

export enum ProductLanguages {
  En = 'EN',
  Vn = 'VN'
}

export type Query = {
  __typename?: 'Query';
  movieDetail: MovieDetail;
  movieProducts: MovieProducts;
  permissionDetail: PermissionModel;
  permissions: Permissions;
  personDetail: PersonModel;
  persons: Persons;
  productCategories: ProductCategories;
  productCategoryDetail: ProductCategoryDetail;
  profile: UserProfile;
  reCaptCha: ReCaptCha;
  roles: Roles;
  rowDetail: RowDetail;
  rows: Rows;
  scheduleDetail: ScheduleDetail;
  schedules: Schedules;
  seatDetail: SeatDetail;
  seats: Seats;
  sectorDetail: SectorDetail;
  sectors: Sectors;
  showTimeDetail: ShowTimeDetail;
  showTimes: ListShowTimes;
  systemRoles: Roles;
  theaterDetail: TheaterDetail;
  theaters: Theaters;
};


export type QueryMovieDetailArgs = {
  movieId: Scalars['Int']['input'];
};


export type QueryMovieProductsArgs = {
  pageOptions?: InputMaybe<MovieProductPageOptions>;
};


export type QueryPermissionDetailArgs = {
  permissionId: Scalars['Int']['input'];
};


export type QueryPermissionsArgs = {
  pageOptions?: InputMaybe<PermissionPageOptions>;
};


export type QueryPersonDetailArgs = {
  personId: Scalars['Int']['input'];
};


export type QueryPersonsArgs = {
  pageOptions?: InputMaybe<PersonPageOptions>;
};


export type QueryProductCategoriesArgs = {
  pageOptions?: InputMaybe<ProductCategoryPageOptions>;
};


export type QueryProductCategoryDetailArgs = {
  productCategoryId: Scalars['Int']['input'];
};


export type QueryRolesArgs = {
  pageOptions?: InputMaybe<RolePageOptions>;
};


export type QueryRowDetailArgs = {
  rowId: Scalars['Int']['input'];
};


export type QueryRowsArgs = {
  pageOptions?: InputMaybe<RowPageOptions>;
};


export type QueryScheduleDetailArgs = {
  scheduleId: Scalars['Int']['input'];
};


export type QuerySchedulesArgs = {
  pageOptions?: InputMaybe<SchedulePageOptions>;
};


export type QuerySeatDetailArgs = {
  seatId: Scalars['Int']['input'];
};


export type QuerySeatsArgs = {
  pageOptions?: InputMaybe<SeatPageOptions>;
};


export type QuerySectorDetailArgs = {
  sectorId: Scalars['Int']['input'];
};


export type QuerySectorsArgs = {
  pageOptions?: InputMaybe<SectorPageOptions>;
};


export type QueryShowTimeDetailArgs = {
  showTimesId: Scalars['Int']['input'];
};


export type QueryShowTimesArgs = {
  pageOptions?: InputMaybe<ShowTimePageOptions>;
};


export type QuerySystemRolesArgs = {
  pageOptions?: InputMaybe<RolePageOptions>;
};


export type QueryTheaterDetailArgs = {
  theaterId: Scalars['Int']['input'];
};


export type QueryTheatersArgs = {
  pageOptions?: InputMaybe<TheaterPageOptions>;
};

export type ReCaptCha = {
  __typename?: 'ReCaptCha';
  captcha: Scalars['String']['output'];
  captchaId: Scalars['String']['output'];
};

export type RegisterArgs = {
  email: Scalars['String']['input'];
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  firstName: Scalars['String']['input'];
  gender: GenderEnum;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type ResendConfirmationArgs = {
  email: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type RoleDetail = {
  __typename?: 'RoleDetail';
  createBy?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  enable?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<PermissionModel>>;
  updateBy?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<SystemRoleEnum>;
};

export enum RoleEnum {
  Customer = 'Customer',
  Manager = 'Manager',
  Staff = 'Staff'
}

export type RolePageOptions = {
  /** Get all default false */
  all?: InputMaybe<Scalars['Boolean']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  fromDate?: Scalars['DateTime']['input'];
  keyword?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  permissionIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** createdAt is set default */
  sort?: InputMaybe<Scalars['String']['input']>;
  /** DESC is set default */
  sorted?: InputMaybe<SortedEnum>;
  take?: InputMaybe<Scalars['Int']['input']>;
  toDate?: Scalars['DateTime']['input'];
};

export type Roles = {
  __typename?: 'Roles';
  data: Array<RoleDetail>;
  paginated: Pagination;
};

export type RowDetail = {
  __typename?: 'RowDetail';
  createBy?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  enable?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  seats?: Maybe<Array<SeatDetail>>;
  sector: SectorModel;
  updateBy?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RowModel = {
  __typename?: 'RowModel';
  createBy: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  enable: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  updateBy: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RowPageOptions = {
  /** Get all default false */
  all?: InputMaybe<Scalars['Boolean']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  fromDate?: Scalars['DateTime']['input'];
  keyword?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** createdAt is set default */
  sort?: InputMaybe<Scalars['String']['input']>;
  /** DESC is set default */
  sorted?: InputMaybe<SortedEnum>;
  take?: InputMaybe<Scalars['Int']['input']>;
  toDate?: Scalars['DateTime']['input'];
};

export type Rows = {
  __typename?: 'Rows';
  data: Array<RowModel>;
  paginated: Pagination;
};

export type ScheduleDetail = {
  __typename?: 'ScheduleDetail';
  createBy: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  enable: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  showTimes: Array<ShowTimesModel>;
  status: ScheduleStatusEnum;
  updateBy: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ScheduleModel = {
  __typename?: 'ScheduleModel';
  createBy: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  enable: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  status: ScheduleStatusEnum;
  updateBy: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SchedulePageOptions = {
  /** Get all default false */
  all?: InputMaybe<Scalars['Boolean']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  fromDate?: Scalars['DateTime']['input'];
  keyword?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** createdAt is set default */
  sort?: InputMaybe<Scalars['String']['input']>;
  /** DESC is set default */
  sorted?: InputMaybe<SortedEnum>;
  take?: InputMaybe<Scalars['Int']['input']>;
  theaterIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  toDate?: Scalars['DateTime']['input'];
};

export enum ScheduleStatusEnum {
  Available = 'AVAILABLE',
  Unavailable = 'UNAVAILABLE'
}

export type Schedules = {
  __typename?: 'Schedules';
  data: Array<ScheduleDetail>;
  paginated: Pagination;
};

export type SeatCategoryModel = {
  __typename?: 'SeatCategoryModel';
  createBy: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  enable: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  updateBy: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SeatDetail = {
  __typename?: 'SeatDetail';
  category: SeatCategoryModel;
  createBy?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  enable?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  row: RowModel;
  status?: Maybe<SeatStatusEnum>;
  updateBy?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SeatModel = {
  __typename?: 'SeatModel';
  createBy: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  enable: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  status: SeatStatusEnum;
  updateBy: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SeatPageOptions = {
  /** Get all default false */
  all?: InputMaybe<Scalars['Boolean']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  fromDate?: Scalars['DateTime']['input'];
  keyword?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** createdAt is set default */
  sort?: InputMaybe<Scalars['String']['input']>;
  /** DESC is set default */
  sorted?: InputMaybe<SortedEnum>;
  take?: InputMaybe<Scalars['Int']['input']>;
  toDate?: Scalars['DateTime']['input'];
};

export enum SeatStatusEnum {
  Available = 'AVAILABLE',
  Maintenance = 'MAINTENANCE',
  Unavailable = 'UNAVAILABLE'
}

export type Seats = {
  __typename?: 'Seats';
  data: Array<SeatModel>;
  paginated: Pagination;
};

export type SectorDetail = {
  __typename?: 'SectorDetail';
  createBy?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enable?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rows?: Maybe<Array<RowDetail>>;
  showTimes?: Maybe<Array<SectorShowTime>>;
  status?: Maybe<SectorStatusEnum>;
  theater: TheaterModel;
  updateBy?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SectorModel = {
  __typename?: 'SectorModel';
  createBy: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  enable: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  status: SectorStatusEnum;
  updateBy: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SectorPageOptions = {
  /** Get all default false */
  all?: InputMaybe<Scalars['Boolean']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  fromDate?: Scalars['DateTime']['input'];
  keyword?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** createdAt is set default */
  sort?: InputMaybe<Scalars['String']['input']>;
  /** DESC is set default */
  sorted?: InputMaybe<SortedEnum>;
  take?: InputMaybe<Scalars['Int']['input']>;
  theaterId?: InputMaybe<Scalars['Int']['input']>;
  toDate?: Scalars['DateTime']['input'];
};

export type SectorShowTime = {
  __typename?: 'SectorShowTime';
  createBy?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  enable?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  movie?: Maybe<MovieDetail>;
  schedule?: Maybe<ScheduleModel>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  theater?: Maybe<TheaterModel>;
  updateBy?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum SectorStatusEnum {
  Available = 'AVAILABLE',
  Maintenance = 'MAINTENANCE',
  Showing = 'SHOWING'
}

export type Sectors = {
  __typename?: 'Sectors';
  data: Array<SectorModel>;
  paginated: Pagination;
};

export type ShowTimeDetail = {
  __typename?: 'ShowTimeDetail';
  createBy?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  enable?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  movie?: Maybe<MovieDetail>;
  schedule?: Maybe<ScheduleModel>;
  sector?: Maybe<SectorModel>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  theater?: Maybe<TheaterModel>;
  updateBy?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ShowTimePageOptions = {
  /** Get all default false */
  all?: InputMaybe<Scalars['Boolean']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  fromDate?: Scalars['DateTime']['input'];
  keyword?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** createdAt is set default */
  sort?: InputMaybe<Scalars['String']['input']>;
  /** DESC is set default */
  sorted?: InputMaybe<SortedEnum>;
  take?: InputMaybe<Scalars['Int']['input']>;
  toDate?: Scalars['DateTime']['input'];
};

export type ShowTimesModel = {
  __typename?: 'ShowTimesModel';
  createBy: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  enable: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  startTime: Scalars['DateTime']['output'];
  updateBy: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum SortedEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SystemRoleEnum {
  Admin = 'Admin',
  Customer = 'Customer',
  Manager = 'Manager',
  Publisher = 'Publisher',
  Retailer = 'Retailer',
  Supplier = 'Supplier',
  User = 'User'
}

export type TheaterDetail = {
  __typename?: 'TheaterDetail';
  address?: Maybe<Scalars['String']['output']>;
  createBy?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  enable?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<FileInfo>;
  sectors?: Maybe<Array<SectorDetail>>;
  updateBy?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TheaterModel = {
  __typename?: 'TheaterModel';
  address: Scalars['String']['output'];
  createBy: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  enable: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  updateBy: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TheaterPageOptions = {
  /** Get all default false */
  all?: InputMaybe<Scalars['Boolean']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  fromDate?: Scalars['DateTime']['input'];
  keyword?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** createdAt is set default */
  sort?: InputMaybe<Scalars['String']['input']>;
  /** DESC is set default */
  sorted?: InputMaybe<SortedEnum>;
  take?: InputMaybe<Scalars['Int']['input']>;
  toDate?: Scalars['DateTime']['input'];
};

export type Theaters = {
  __typename?: 'Theaters';
  data: Array<TheaterDetail>;
  paginated: Pagination;
};

export type UpdateMovieArgs = {
  castIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  categoryIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  directorId?: InputMaybe<Scalars['Int']['input']>;
  durationMin?: InputMaybe<Scalars['Int']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Ngôn ngữ gốc */
  language?: InputMaybe<ProductLanguages>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** Ngôn ngữ thuyết minh */
  narrative?: InputMaybe<ProductLanguages>;
  sellPrice?: InputMaybe<Scalars['Float']['input']>;
  /** Ngôn nữ phụ đề */
  subtitle?: InputMaybe<ProductLanguages>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
};

export type UpdatePermission = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<PermissionEnum>;
};

export type UpdatePersonArgs = {
  birthDay?: InputMaybe<Scalars['DateTime']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductCategoryArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<ProductCategoryEnum>;
};

export type UpdateProfileArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['Upload']['input']>;
  birthDay?: InputMaybe<Scalars['DateTime']['input']>;
  createBy?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<GenderEnum>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  roleIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  updateBy?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateRoleArgs = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissionIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  value?: InputMaybe<SystemRoleEnum>;
};

export type UpdateRowArgs = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sectorId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateScheduleArgs = {
  /** Ngày hiệu lực */
  date?: InputMaybe<Scalars['DateTime']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateSeatArgs = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  rowId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<SeatStatusEnum>;
};

export type UpdateSectorArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SectorStatusEnum>;
  theaterId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateShowTimesArgs = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Mã sản phẩm */
  productId?: InputMaybe<Scalars['Int']['input']>;
  /** Mã lịch chiếu */
  scheduleId?: InputMaybe<Scalars['Int']['input']>;
  /** Mã phòng */
  sectorId?: InputMaybe<Scalars['Int']['input']>;
  /** Thời gian bắt đầu */
  startTime?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTheaterArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['Upload']['input']>;
  birthDay?: InputMaybe<Scalars['DateTime']['input']>;
  createBy?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<GenderEnum>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  roleIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  status?: InputMaybe<UserStatusEnum>;
  updateBy?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserModel = {
  __typename?: 'UserModel';
  address?: Maybe<Scalars['String']['output']>;
  birthDay?: Maybe<Scalars['DateTime']['output']>;
  createBy: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  enable: Scalars['Boolean']['output'];
  firstName: Scalars['String']['output'];
  gender: GenderEnum;
  id?: Maybe<Scalars['Int']['output']>;
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  status?: Maybe<UserStatusEnum>;
  updateBy: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  address?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<FileInfo>;
  birthDay?: Maybe<Scalars['DateTime']['output']>;
  createBy?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customer?: Maybe<CustomerModel>;
  email?: Maybe<Scalars['String']['output']>;
  employee?: Maybe<EmployeeModel>;
  enable?: Maybe<Scalars['Boolean']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<GenderEnum>;
  id?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<PermissionEnum>>;
  phone?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<SystemRoleEnum>>;
  status?: Maybe<UserStatusEnum>;
  updateBy?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export enum UserStatusEnum {
  Available = 'Available',
  Disabled = 'Disabled',
  Unavailable = 'Unavailable'
}

export type CaptchaDefaultFieldsFragment = { __typename?: 'ReCaptCha', captchaId: string, captcha: string };

export type ProductCategorySimpleFieldsFragment = { __typename?: 'ProductCategoryModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, value: ProductCategoryEnum, description?: string | null };

export type ProductCategoryDefaultFieldsFragment = { __typename?: 'ProductCategoryDetail', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, value: ProductCategoryEnum, description?: string | null };

export type CustomerDefaultFieldsFragment = { __typename?: 'CustomerModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number };

export type EmployeeDefaultFieldsFragment = { __typename?: 'EmployeeModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, startDateOfWork: string, endDateOfWork: string };

export type FileDefaultFieldsFragment = { __typename?: 'FileInfo', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, path: string, type: string };

export type MovieSimpleFieldsFragment = { __typename?: 'MovieDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, description?: string | null, durationMin?: number | null, language?: ProductLanguages | null, narrative?: ProductLanguages | null, subtitle?: ProductLanguages | null, categories: Array<{ __typename?: 'ProductCategoryModel', id?: number | null, name: string }>, casts: Array<{ __typename?: 'PersonModel', id?: number | null, firstName: string, lastName: string }>, director: { __typename?: 'PersonModel', id?: number | null, firstName: string, lastName: string }, thumbnail?: { __typename?: 'FileInfo', id?: number | null, type: string, path: string } | null };

export type MovieDefaultFieldsFragment = { __typename?: 'MovieSchedulesDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, description?: string | null, durationMin?: number | null, language?: ProductLanguages | null, narrative?: ProductLanguages | null, subtitle?: ProductLanguages | null, categories?: Array<{ __typename?: 'ProductCategoryModel', name: string }> | null, casts?: Array<{ __typename?: 'PersonModel', firstName: string, lastName: string }> | null, director?: { __typename?: 'PersonModel', firstName: string, lastName: string } | null, thumbnail?: { __typename?: 'FileInfo', type: string, path: string } | null, showTimes?: Array<{ __typename?: 'MovieShowTime', startTime?: any | null, sector?: { __typename?: 'SectorModel', name: string, description?: string | null, status: SectorStatusEnum } | null, schedule?: { __typename?: 'ScheduleModel', date: any } | null }> | null };

export type PaginatedDefaultFieldsFragment = { __typename?: 'Pagination', fromDate: string, hasNext: boolean, hasPrev: boolean, keyword: string, numberRecords: number, page: number, pages: number, sort: string, sorted: SortedEnum, take: number, toDate: string };

export type PersonDefaultFieldsFragment = { __typename?: 'PersonModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, firstName: string, lastName: string, birthDay?: string | null };

export type RowSimpleFieldsFragment = { __typename?: 'RowModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string };

export type RowDefaultFieldsFragment = { __typename?: 'RowDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, sector: { __typename?: 'SectorModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, description?: string | null, status: SectorStatusEnum } };

export type ScheduleDefaultFieldsFragment = { __typename?: 'ScheduleDetail', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, date: any, status: ScheduleStatusEnum, showTimes: Array<{ __typename?: 'ShowTimesModel', id?: number | null, startTime: any }> };

export type SeatSimpleFieldsFragment = { __typename?: 'SeatModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, price: number, status: SeatStatusEnum };

export type SeatDefaultFieldsFragment = { __typename?: 'SeatDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, price?: number | null, status?: SeatStatusEnum | null, row: { __typename?: 'RowModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string } };

export type SectorSimpleFieldsFragment = { __typename?: 'SectorModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, description?: string | null, status: SectorStatusEnum };

export type SectorDefaultFieldsFragment = { __typename?: 'SectorDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, description?: string | null, status?: SectorStatusEnum | null, theater: { __typename?: 'TheaterModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, address: string } };

export type ShowTimesSimpleFieldsFragment = { __typename?: 'ShowTimesModel', id?: number | null, enable: boolean, startTime: any };

export type ShowTimesDefaultFieldsFragment = { __typename?: 'ShowTimeDetail', createdAt?: any | null, updatedAt?: any | null, createBy?: number | null, updateBy?: number | null, id?: number | null, enable?: boolean | null, startTime?: any | null, movie?: { __typename?: 'MovieDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, description?: string | null, durationMin?: number | null, language?: ProductLanguages | null, narrative?: ProductLanguages | null, subtitle?: ProductLanguages | null, categories: Array<{ __typename?: 'ProductCategoryModel', id?: number | null, name: string }>, casts: Array<{ __typename?: 'PersonModel', id?: number | null, firstName: string, lastName: string }>, director: { __typename?: 'PersonModel', id?: number | null, firstName: string, lastName: string }, thumbnail?: { __typename?: 'FileInfo', id?: number | null, type: string, path: string } | null } | null, theater?: { __typename?: 'TheaterModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, address: string } | null, schedule?: { __typename?: 'ScheduleModel', id?: number | null } | null };

export type TheaterSimpleFieldsFragment = { __typename?: 'TheaterModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, address: string };

export type TheaterDefaultFieldsFragment = { __typename?: 'TheaterDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, address?: string | null, photo?: { __typename?: 'FileInfo', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, path: string, type: string } | null };

export type UserDefaultFieldsFragment = { __typename?: 'UserProfile', firstName?: string | null, lastName?: string | null, birthDay?: any | null, email?: string | null, username?: string | null, address?: string | null, gender?: GenderEnum | null, phone?: string | null, status?: UserStatusEnum | null, roles?: Array<SystemRoleEnum> | null, permissions?: Array<PermissionEnum> | null, updatedAt?: any | null, avatar?: { __typename?: 'FileInfo', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, path: string, type: string } | null, customer?: { __typename?: 'CustomerModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number } | null, employee?: { __typename?: 'EmployeeModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, startDateOfWork: string, endDateOfWork: string } | null };

export type UpdateProfileMutationVariables = Exact<{
  updateProfileArgs: UpdateProfileArgs;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'UserProfile', firstName?: string | null, lastName?: string | null, birthDay?: any | null, email?: string | null, username?: string | null, address?: string | null, gender?: GenderEnum | null, phone?: string | null, status?: UserStatusEnum | null, roles?: Array<SystemRoleEnum> | null, permissions?: Array<PermissionEnum> | null, updatedAt?: any | null, avatar?: { __typename?: 'FileInfo', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, path: string, type: string } | null, customer?: { __typename?: 'CustomerModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number } | null, employee?: { __typename?: 'EmployeeModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, startDateOfWork: string, endDateOfWork: string } | null } };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile: { __typename?: 'UserProfile', firstName?: string | null, lastName?: string | null, birthDay?: any | null, email?: string | null, username?: string | null, address?: string | null, gender?: GenderEnum | null, phone?: string | null, status?: UserStatusEnum | null, roles?: Array<SystemRoleEnum> | null, permissions?: Array<PermissionEnum> | null, updatedAt?: any | null, avatar?: { __typename?: 'FileInfo', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, path: string, type: string } | null, customer?: { __typename?: 'CustomerModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number } | null, employee?: { __typename?: 'EmployeeModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, startDateOfWork: string, endDateOfWork: string } | null } };

export type LoginMutationVariables = Exact<{
  loginArgs: LoginArgs;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Credential', accessToken: string, refreshToken: string, profile: { __typename?: 'UserProfile', firstName?: string | null, lastName?: string | null, birthDay?: any | null, email?: string | null, username?: string | null, address?: string | null, gender?: GenderEnum | null, phone?: string | null, status?: UserStatusEnum | null, roles?: Array<SystemRoleEnum> | null, permissions?: Array<PermissionEnum> | null, updatedAt?: any | null, avatar?: { __typename?: 'FileInfo', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, path: string, type: string } | null, customer?: { __typename?: 'CustomerModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number } | null, employee?: { __typename?: 'EmployeeModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, startDateOfWork: string, endDateOfWork: string } | null } } };

export type ChangePasswordMutationVariables = Exact<{
  changePasswordArgs: ChangePasswordArgs;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: string };

export type ReCaptChaQueryVariables = Exact<{ [key: string]: never; }>;


export type ReCaptChaQuery = { __typename?: 'Query', reCaptCha: { __typename?: 'ReCaptCha', captchaId: string, captcha: string } };

export type UpdateMovieMutationVariables = Exact<{
  movieId: Scalars['Int']['input'];
  updateMovieArgs: UpdateMovieArgs;
}>;


export type UpdateMovieMutation = { __typename?: 'Mutation', updateMovie: { __typename?: 'MovieDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, description?: string | null, durationMin?: number | null, language?: ProductLanguages | null, narrative?: ProductLanguages | null, subtitle?: ProductLanguages | null, categories: Array<{ __typename?: 'ProductCategoryModel', id?: number | null, name: string }>, casts: Array<{ __typename?: 'PersonModel', id?: number | null, firstName: string, lastName: string }>, director: { __typename?: 'PersonModel', id?: number | null, firstName: string, lastName: string }, thumbnail?: { __typename?: 'FileInfo', id?: number | null, type: string, path: string } | null } };

export type CreateMovieMutationVariables = Exact<{
  createMovieArgs: CreateMovieArgs;
}>;


export type CreateMovieMutation = { __typename?: 'Mutation', createMovie: { __typename?: 'MovieSchedulesDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, description?: string | null, durationMin?: number | null, language?: ProductLanguages | null, narrative?: ProductLanguages | null, subtitle?: ProductLanguages | null, categories?: Array<{ __typename?: 'ProductCategoryModel', name: string }> | null, casts?: Array<{ __typename?: 'PersonModel', firstName: string, lastName: string }> | null, director?: { __typename?: 'PersonModel', firstName: string, lastName: string } | null, thumbnail?: { __typename?: 'FileInfo', type: string, path: string } | null, showTimes?: Array<{ __typename?: 'MovieShowTime', startTime?: any | null, sector?: { __typename?: 'SectorModel', name: string, description?: string | null, status: SectorStatusEnum } | null, schedule?: { __typename?: 'ScheduleModel', date: any } | null }> | null } };

export type EnableMoviesMutationVariables = Exact<{
  movieId: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
  enableMovieArgs: EnableMovieArgs;
}>;


export type EnableMoviesMutation = { __typename?: 'Mutation', enableMovies: Array<{ __typename?: 'MovieProductModel', id?: number | null }> };

export type MovieProductsQueryVariables = Exact<{
  pageOptions?: InputMaybe<MovieProductPageOptions>;
}>;


export type MovieProductsQuery = { __typename?: 'Query', movieProducts: { __typename?: 'MovieProducts', data: Array<{ __typename?: 'MovieSchedulesDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, description?: string | null, durationMin?: number | null, language?: ProductLanguages | null, narrative?: ProductLanguages | null, subtitle?: ProductLanguages | null, categories?: Array<{ __typename?: 'ProductCategoryModel', name: string }> | null, casts?: Array<{ __typename?: 'PersonModel', firstName: string, lastName: string }> | null, director?: { __typename?: 'PersonModel', firstName: string, lastName: string } | null, thumbnail?: { __typename?: 'FileInfo', type: string, path: string } | null, showTimes?: Array<{ __typename?: 'MovieShowTime', startTime?: any | null, sector?: { __typename?: 'SectorModel', name: string, description?: string | null, status: SectorStatusEnum } | null, schedule?: { __typename?: 'ScheduleModel', date: any } | null }> | null }>, paginated: { __typename?: 'Pagination', fromDate: string, hasNext: boolean, hasPrev: boolean, keyword: string, numberRecords: number, page: number, pages: number, sort: string, sorted: SortedEnum, take: number, toDate: string } } };

export type MovieDetailQueryVariables = Exact<{
  movieId: Scalars['Int']['input'];
}>;


export type MovieDetailQuery = { __typename?: 'Query', movieDetail: { __typename?: 'MovieDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, description?: string | null, durationMin?: number | null, language?: ProductLanguages | null, narrative?: ProductLanguages | null, subtitle?: ProductLanguages | null, categories: Array<{ __typename?: 'ProductCategoryModel', id?: number | null, name: string }>, casts: Array<{ __typename?: 'PersonModel', id?: number | null, firstName: string, lastName: string }>, director: { __typename?: 'PersonModel', id?: number | null, firstName: string, lastName: string }, thumbnail?: { __typename?: 'FileInfo', id?: number | null, type: string, path: string } | null } };

export type UpdatePersonMutationVariables = Exact<{
  personId: Scalars['Int']['input'];
  updatePersonArgs: UpdatePersonArgs;
}>;


export type UpdatePersonMutation = { __typename?: 'Mutation', updatePerson: { __typename?: 'PersonModel', id?: number | null } };

export type CreatePersonMutationVariables = Exact<{
  createPersonArgs: CreatePersonArgs;
}>;


export type CreatePersonMutation = { __typename?: 'Mutation', createPerson: { __typename?: 'PersonModel', id?: number | null } };

export type EnablePersonsMutationVariables = Exact<{
  personId: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
  enablePersonArgs: EnablePersonArgs;
}>;


export type EnablePersonsMutation = { __typename?: 'Mutation', enablePersons: Array<{ __typename?: 'PersonModel', id?: number | null }> };

export type PersonsQueryVariables = Exact<{
  pageOptions?: InputMaybe<PersonPageOptions>;
}>;


export type PersonsQuery = { __typename?: 'Query', persons: { __typename?: 'Persons', data: Array<{ __typename?: 'PersonModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, firstName: string, lastName: string, birthDay?: string | null }>, paginated: { __typename?: 'Pagination', fromDate: string, hasNext: boolean, hasPrev: boolean, keyword: string, numberRecords: number, page: number, pages: number, sort: string, sorted: SortedEnum, take: number, toDate: string } } };

export type PersonDetailQueryVariables = Exact<{
  personId: Scalars['Int']['input'];
}>;


export type PersonDetailQuery = { __typename?: 'Query', personDetail: { __typename?: 'PersonModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, firstName: string, lastName: string, birthDay?: string | null } };

export type UpdateProductCategoryMutationVariables = Exact<{
  productCategoryId: Scalars['Int']['input'];
  updateProductCategoryArgs: UpdateProductCategoryArgs;
}>;


export type UpdateProductCategoryMutation = { __typename?: 'Mutation', updateProductCategory: { __typename?: 'ProductCategoryDetail', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, value: ProductCategoryEnum, description?: string | null } };

export type EnableProdCategoriesMutationVariables = Exact<{
  productCategoryId: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
  enableProdCategoryArgs: EnableProdCategoryArgs;
}>;


export type EnableProdCategoriesMutation = { __typename?: 'Mutation', enableProdCategories: Array<{ __typename?: 'ProductCategoryModel', id?: number | null }> };

export type ProductCategoriesQueryVariables = Exact<{
  pageOptions?: InputMaybe<ProductCategoryPageOptions>;
}>;


export type ProductCategoriesQuery = { __typename?: 'Query', productCategories: { __typename?: 'ProductCategories', data: Array<{ __typename?: 'ProductCategoryModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, value: ProductCategoryEnum, description?: string | null }>, paginated: { __typename?: 'Pagination', fromDate: string, hasNext: boolean, hasPrev: boolean, keyword: string, numberRecords: number, page: number, pages: number, sort: string, sorted: SortedEnum, take: number, toDate: string } } };

export type ProductCategoryDetailQueryVariables = Exact<{
  productCategoryId: Scalars['Int']['input'];
}>;


export type ProductCategoryDetailQuery = { __typename?: 'Query', productCategoryDetail: { __typename?: 'ProductCategoryDetail', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, value: ProductCategoryEnum, description?: string | null } };

export type UpdateRowMutationVariables = Exact<{
  rowId: Scalars['Int']['input'];
  updateRowArgs: UpdateRowArgs;
}>;


export type UpdateRowMutation = { __typename?: 'Mutation', updateRow: { __typename?: 'RowDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, sector: { __typename?: 'SectorModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, description?: string | null, status: SectorStatusEnum } } };

export type CreateRowMutationVariables = Exact<{
  createRowArgs: CreateRowArgs;
}>;


export type CreateRowMutation = { __typename?: 'Mutation', createRow: { __typename?: 'RowDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, sector: { __typename?: 'SectorModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, description?: string | null, status: SectorStatusEnum } } };

export type EnableRowsMutationVariables = Exact<{
  rowId: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
  enableRowArgs: EnableRowArgs;
}>;


export type EnableRowsMutation = { __typename?: 'Mutation', enableRows: Array<{ __typename?: 'RowModel', id?: number | null }> };

export type RowsQueryVariables = Exact<{
  pageOptions?: InputMaybe<RowPageOptions>;
}>;


export type RowsQuery = { __typename?: 'Query', rows: { __typename?: 'Rows', data: Array<{ __typename?: 'RowModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string }>, paginated: { __typename?: 'Pagination', fromDate: string, hasNext: boolean, hasPrev: boolean, keyword: string, numberRecords: number, page: number, pages: number, sort: string, sorted: SortedEnum, take: number, toDate: string } } };

export type RowDetailQueryVariables = Exact<{
  rowId: Scalars['Int']['input'];
}>;


export type RowDetailQuery = { __typename?: 'Query', rowDetail: { __typename?: 'RowDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, sector: { __typename?: 'SectorModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, description?: string | null, status: SectorStatusEnum } } };

export type CreateScheduleMutationVariables = Exact<{
  createScheduleArgs: CreateScheduleArgs;
}>;


export type CreateScheduleMutation = { __typename?: 'Mutation', createSchedule: { __typename?: 'ScheduleDetail', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, date: any, status: ScheduleStatusEnum, showTimes: Array<{ __typename?: 'ShowTimesModel', id?: number | null, startTime: any }> } };

export type UpdateScheduleMutationVariables = Exact<{
  scheduleId: Scalars['Int']['input'];
  updateScheduleArgs: UpdateScheduleArgs;
}>;


export type UpdateScheduleMutation = { __typename?: 'Mutation', updateSchedule: { __typename?: 'ScheduleDetail', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, date: any, status: ScheduleStatusEnum, showTimes: Array<{ __typename?: 'ShowTimesModel', id?: number | null, startTime: any }> } };

export type EnableSchedulesMutationVariables = Exact<{
  scheduleId: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
  enableScheduleArgs: EnableScheduleArgs;
}>;


export type EnableSchedulesMutation = { __typename?: 'Mutation', enableSchedules: Array<{ __typename?: 'ScheduleModel', id?: number | null }> };

export type SchedulesQueryVariables = Exact<{
  pageOptions?: InputMaybe<SchedulePageOptions>;
}>;


export type SchedulesQuery = { __typename?: 'Query', schedules: { __typename?: 'Schedules', data: Array<{ __typename?: 'ScheduleDetail', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, date: any, status: ScheduleStatusEnum, showTimes: Array<{ __typename?: 'ShowTimesModel', id?: number | null, startTime: any }> }>, paginated: { __typename?: 'Pagination', fromDate: string, hasNext: boolean, hasPrev: boolean, keyword: string, numberRecords: number, page: number, pages: number, sort: string, sorted: SortedEnum, take: number, toDate: string } } };

export type ScheduleDetailQueryVariables = Exact<{
  scheduleId: Scalars['Int']['input'];
}>;


export type ScheduleDetailQuery = { __typename?: 'Query', scheduleDetail: { __typename?: 'ScheduleDetail', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, date: any, status: ScheduleStatusEnum, showTimes: Array<{ __typename?: 'ShowTimesModel', id?: number | null, startTime: any }> } };

export type UpdateSeatMutationVariables = Exact<{
  seatId: Scalars['Int']['input'];
  updateSeatArgs: UpdateSeatArgs;
}>;


export type UpdateSeatMutation = { __typename?: 'Mutation', updateSeat: { __typename?: 'SeatDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, price?: number | null, status?: SeatStatusEnum | null, row: { __typename?: 'RowModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string } } };

export type CreateSeatMutationVariables = Exact<{
  createSeatArgs: CreateSeatArgs;
}>;


export type CreateSeatMutation = { __typename?: 'Mutation', createSeat: { __typename?: 'SeatDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, price?: number | null, status?: SeatStatusEnum | null, row: { __typename?: 'RowModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string } } };

export type EnableSeatsMutationVariables = Exact<{
  seatId: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
  enableSeatArgs: EnableSeatArgs;
}>;


export type EnableSeatsMutation = { __typename?: 'Mutation', enableSeats: Array<{ __typename?: 'SeatModel', id?: number | null }> };

export type SeatsQueryVariables = Exact<{
  pageOptions?: InputMaybe<SeatPageOptions>;
}>;


export type SeatsQuery = { __typename?: 'Query', seats: { __typename?: 'Seats', data: Array<{ __typename?: 'SeatModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, price: number, status: SeatStatusEnum }>, paginated: { __typename?: 'Pagination', fromDate: string, hasNext: boolean, hasPrev: boolean, keyword: string, numberRecords: number, page: number, pages: number, sort: string, sorted: SortedEnum, take: number, toDate: string } } };

export type SeatDetailQueryVariables = Exact<{
  seatId: Scalars['Int']['input'];
}>;


export type SeatDetailQuery = { __typename?: 'Query', seatDetail: { __typename?: 'SeatDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, price?: number | null, status?: SeatStatusEnum | null, row: { __typename?: 'RowModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string } } };

export type UpdateSectorMutationVariables = Exact<{
  sectorId: Scalars['Int']['input'];
  updateSectorArgs: UpdateSectorArgs;
}>;


export type UpdateSectorMutation = { __typename?: 'Mutation', updateSector: { __typename?: 'SectorDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, description?: string | null, status?: SectorStatusEnum | null, theater: { __typename?: 'TheaterModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, address: string } } };

export type SectorDetailQueryVariables = Exact<{
  sectorId: Scalars['Int']['input'];
}>;


export type SectorDetailQuery = { __typename?: 'Query', sectorDetail: { __typename?: 'SectorDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, description?: string | null, status?: SectorStatusEnum | null, theater: { __typename?: 'TheaterModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, address: string } } };

export type CreateSectorMutationVariables = Exact<{
  createSectorArgs: CreateSectorArgs;
}>;


export type CreateSectorMutation = { __typename?: 'Mutation', createSector: { __typename?: 'SectorDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, description?: string | null, status?: SectorStatusEnum | null, theater: { __typename?: 'TheaterModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, address: string } } };

export type EnableSectorsMutationVariables = Exact<{
  sectorId: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
  enableSectorArgs: EnableSectorArgs;
}>;


export type EnableSectorsMutation = { __typename?: 'Mutation', enableSectors: Array<{ __typename?: 'SectorModel', id?: number | null }> };

export type SectorsQueryVariables = Exact<{
  pageOptions?: InputMaybe<SectorPageOptions>;
}>;


export type SectorsQuery = { __typename?: 'Query', sectors: { __typename?: 'Sectors', data: Array<{ __typename?: 'SectorModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, description?: string | null, status: SectorStatusEnum }>, paginated: { __typename?: 'Pagination', fromDate: string, hasNext: boolean, hasPrev: boolean, keyword: string, numberRecords: number, page: number, pages: number, sort: string, sorted: SortedEnum, take: number, toDate: string } } };

export type CreateShowTimesMutationVariables = Exact<{
  createShowTimesArgs: CreateShowTimesArgs;
}>;


export type CreateShowTimesMutation = { __typename?: 'Mutation', createShowTimes: Array<{ __typename?: 'ShowTimesModel', id?: number | null, enable: boolean, startTime: any }> };

export type EnableShowTimesMutationVariables = Exact<{
  showTimesId: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
  enableShowTimeArgs: EnableShowTimeArgs;
}>;


export type EnableShowTimesMutation = { __typename?: 'Mutation', enableShowTimes: Array<{ __typename?: 'ShowTimesModel', id?: number | null }> };

export type ShowTimesQueryVariables = Exact<{
  pageOptions?: InputMaybe<ShowTimePageOptions>;
}>;


export type ShowTimesQuery = { __typename?: 'Query', showTimes: { __typename?: 'ListShowTimes', data: Array<{ __typename?: 'ShowTimeDetail', createdAt?: any | null, updatedAt?: any | null, createBy?: number | null, updateBy?: number | null, id?: number | null, enable?: boolean | null, startTime?: any | null, movie?: { __typename?: 'MovieDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, description?: string | null, durationMin?: number | null, language?: ProductLanguages | null, narrative?: ProductLanguages | null, subtitle?: ProductLanguages | null, categories: Array<{ __typename?: 'ProductCategoryModel', id?: number | null, name: string }>, casts: Array<{ __typename?: 'PersonModel', id?: number | null, firstName: string, lastName: string }>, director: { __typename?: 'PersonModel', id?: number | null, firstName: string, lastName: string }, thumbnail?: { __typename?: 'FileInfo', id?: number | null, type: string, path: string } | null } | null, theater?: { __typename?: 'TheaterModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, address: string } | null, schedule?: { __typename?: 'ScheduleModel', id?: number | null } | null }>, paginated: { __typename?: 'Pagination', fromDate: string, hasNext: boolean, hasPrev: boolean, keyword: string, numberRecords: number, page: number, pages: number, sort: string, sorted: SortedEnum, take: number, toDate: string } } };

export type ShowTimeDetailQueryVariables = Exact<{
  showTimesId: Scalars['Int']['input'];
}>;


export type ShowTimeDetailQuery = { __typename?: 'Query', showTimeDetail: { __typename?: 'ShowTimeDetail', createdAt?: any | null, updatedAt?: any | null, createBy?: number | null, updateBy?: number | null, id?: number | null, enable?: boolean | null, startTime?: any | null, movie?: { __typename?: 'MovieDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, description?: string | null, durationMin?: number | null, language?: ProductLanguages | null, narrative?: ProductLanguages | null, subtitle?: ProductLanguages | null, categories: Array<{ __typename?: 'ProductCategoryModel', id?: number | null, name: string }>, casts: Array<{ __typename?: 'PersonModel', id?: number | null, firstName: string, lastName: string }>, director: { __typename?: 'PersonModel', id?: number | null, firstName: string, lastName: string }, thumbnail?: { __typename?: 'FileInfo', id?: number | null, type: string, path: string } | null } | null, theater?: { __typename?: 'TheaterModel', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, address: string } | null, schedule?: { __typename?: 'ScheduleModel', id?: number | null } | null } };

export type UpdateTheaterMutationVariables = Exact<{
  theaterId: Scalars['Int']['input'];
  updateTheaterArgs: UpdateTheaterArgs;
}>;


export type UpdateTheaterMutation = { __typename?: 'Mutation', updateTheater: { __typename?: 'TheaterDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, address?: string | null, photo?: { __typename?: 'FileInfo', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, path: string, type: string } | null } };

export type CreateTheaterMutationVariables = Exact<{
  createTheaterArgs: CreateTheaterArgs;
}>;


export type CreateTheaterMutation = { __typename?: 'Mutation', createTheater: { __typename?: 'TheaterDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, address?: string | null, photo?: { __typename?: 'FileInfo', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, path: string, type: string } | null } };

export type EnableTheatersMutationVariables = Exact<{
  theaterId: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
  enableTheaterArgs: EnableTheaterArgs;
}>;


export type EnableTheatersMutation = { __typename?: 'Mutation', enableTheaters: Array<{ __typename?: 'TheaterModel', id?: number | null }> };

export type TheatersQueryVariables = Exact<{
  pageOptions?: InputMaybe<TheaterPageOptions>;
}>;


export type TheatersQuery = { __typename?: 'Query', theaters: { __typename?: 'Theaters', data: Array<{ __typename?: 'TheaterDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, address?: string | null, photo?: { __typename?: 'FileInfo', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, path: string, type: string } | null }>, paginated: { __typename?: 'Pagination', fromDate: string, hasNext: boolean, hasPrev: boolean, keyword: string, numberRecords: number, page: number, pages: number, sort: string, sorted: SortedEnum, take: number, toDate: string } } };

export type TheaterDetailQueryVariables = Exact<{
  theaterId: Scalars['Int']['input'];
}>;


export type TheaterDetailQuery = { __typename?: 'Query', theaterDetail: { __typename?: 'TheaterDetail', id?: number | null, createdAt?: any | null, updatedAt?: any | null, enable?: boolean | null, createBy?: number | null, updateBy?: number | null, name?: string | null, address?: string | null, photo?: { __typename?: 'FileInfo', id?: number | null, createdAt: any, updatedAt: any, enable: boolean, createBy: number, updateBy: number, name: string, path: string, type: string } | null } };

export const CaptchaDefaultFieldsFragmentDoc = gql`
    fragment captchaDefaultFields on ReCaptCha {
  captchaId
  captcha
}
    `;
export const ProductCategorySimpleFieldsFragmentDoc = gql`
    fragment productCategorySimpleFields on ProductCategoryModel {
  id
  createdAt
  updatedAt
  enable
  createBy
  updateBy
  name
  value
  description
}
    `;
export const ProductCategoryDefaultFieldsFragmentDoc = gql`
    fragment productCategoryDefaultFields on ProductCategoryDetail {
  id
  createdAt
  updatedAt
  enable
  createBy
  updateBy
  name
  value
  description
}
    `;
export const MovieDefaultFieldsFragmentDoc = gql`
    fragment movieDefaultFields on MovieSchedulesDetail {
  id
  createdAt
  updatedAt
  enable
  createBy
  updateBy
  name
  description
  durationMin
  language
  narrative
  subtitle
  categories {
    name
  }
  casts {
    firstName
    lastName
  }
  director {
    firstName
    lastName
  }
  thumbnail {
    type
    path
  }
  showTimes {
    startTime
    sector {
      name
      description
      status
    }
    schedule {
      date
    }
  }
}
    `;
export const PaginatedDefaultFieldsFragmentDoc = gql`
    fragment paginatedDefaultFields on Pagination {
  fromDate
  hasNext
  hasPrev
  keyword
  numberRecords
  page
  pages
  sort
  sorted
  take
  toDate
}
    `;
export const PersonDefaultFieldsFragmentDoc = gql`
    fragment personDefaultFields on PersonModel {
  id
  createdAt
  updatedAt
  enable
  createBy
  updateBy
  firstName
  lastName
  birthDay
}
    `;
export const SectorSimpleFieldsFragmentDoc = gql`
    fragment sectorSimpleFields on SectorModel {
  id
  createdAt
  updatedAt
  enable
  createBy
  updateBy
  name
  description
  status
}
    `;
export const RowDefaultFieldsFragmentDoc = gql`
    fragment rowDefaultFields on RowDetail {
  id
  createdAt
  updatedAt
  enable
  createBy
  updateBy
  name
  sector {
    ...sectorSimpleFields
  }
}
    ${SectorSimpleFieldsFragmentDoc}`;
export const ScheduleDefaultFieldsFragmentDoc = gql`
    fragment scheduleDefaultFields on ScheduleDetail {
  id
  createdAt
  updatedAt
  enable
  createBy
  updateBy
  date
  status
  showTimes {
    id
    startTime
  }
}
    `;
export const SeatSimpleFieldsFragmentDoc = gql`
    fragment seatSimpleFields on SeatModel {
  id
  createdAt
  updatedAt
  enable
  createBy
  updateBy
  name
  price
  status
}
    `;
export const RowSimpleFieldsFragmentDoc = gql`
    fragment rowSimpleFields on RowModel {
  id
  createdAt
  updatedAt
  enable
  createBy
  updateBy
  name
}
    `;
export const SeatDefaultFieldsFragmentDoc = gql`
    fragment seatDefaultFields on SeatDetail {
  id
  createdAt
  updatedAt
  enable
  createBy
  updateBy
  name
  price
  status
  row {
    ...rowSimpleFields
  }
}
    ${RowSimpleFieldsFragmentDoc}`;
export const TheaterSimpleFieldsFragmentDoc = gql`
    fragment theaterSimpleFields on TheaterModel {
  id
  createdAt
  updatedAt
  enable
  createBy
  updateBy
  name
  address
}
    `;
export const SectorDefaultFieldsFragmentDoc = gql`
    fragment sectorDefaultFields on SectorDetail {
  id
  createdAt
  updatedAt
  enable
  createBy
  updateBy
  name
  description
  status
  theater {
    ...theaterSimpleFields
  }
}
    ${TheaterSimpleFieldsFragmentDoc}`;
export const ShowTimesSimpleFieldsFragmentDoc = gql`
    fragment showTimesSimpleFields on ShowTimesModel {
  id
  enable
  startTime
}
    `;
export const MovieSimpleFieldsFragmentDoc = gql`
    fragment movieSimpleFields on MovieDetail {
  id
  createdAt
  updatedAt
  enable
  createBy
  updateBy
  name
  description
  durationMin
  language
  narrative
  subtitle
  categories {
    id
    name
  }
  casts {
    id
    firstName
    lastName
  }
  director {
    id
    firstName
    lastName
  }
  thumbnail {
    id
    type
    path
  }
}
    `;
export const ShowTimesDefaultFieldsFragmentDoc = gql`
    fragment showTimesDefaultFields on ShowTimeDetail {
  createdAt
  updatedAt
  createBy
  updateBy
  movie {
    ...movieSimpleFields
  }
  theater {
    ...theaterSimpleFields
  }
  schedule {
    id
  }
  id
  enable
  startTime
}
    ${MovieSimpleFieldsFragmentDoc}
${TheaterSimpleFieldsFragmentDoc}`;
export const FileDefaultFieldsFragmentDoc = gql`
    fragment fileDefaultFields on FileInfo {
  id
  createdAt
  updatedAt
  enable
  createBy
  updateBy
  name
  path
  type
}
    `;
export const TheaterDefaultFieldsFragmentDoc = gql`
    fragment theaterDefaultFields on TheaterDetail {
  id
  createdAt
  updatedAt
  enable
  createBy
  updateBy
  name
  address
  photo {
    ...fileDefaultFields
  }
}
    ${FileDefaultFieldsFragmentDoc}`;
export const CustomerDefaultFieldsFragmentDoc = gql`
    fragment customerDefaultFields on CustomerModel {
  id
  createdAt
  updatedAt
  enable
  createBy
  updateBy
}
    `;
export const EmployeeDefaultFieldsFragmentDoc = gql`
    fragment employeeDefaultFields on EmployeeModel {
  id
  createdAt
  updatedAt
  enable
  createBy
  updateBy
  startDateOfWork
  endDateOfWork
}
    `;
export const UserDefaultFieldsFragmentDoc = gql`
    fragment userDefaultFields on UserProfile {
  firstName
  lastName
  birthDay
  email
  username
  address
  gender
  phone
  status
  roles
  permissions
  updatedAt
  avatar {
    ...fileDefaultFields
  }
  customer {
    ...customerDefaultFields
  }
  employee {
    ...employeeDefaultFields
  }
}
    ${FileDefaultFieldsFragmentDoc}
${CustomerDefaultFieldsFragmentDoc}
${EmployeeDefaultFieldsFragmentDoc}`;
export const UpdateProfileDocument = gql`
    mutation updateProfile($updateProfileArgs: UpdateProfileArgs!) {
  updateProfile(updateProfileArgs: $updateProfileArgs) {
    ...userDefaultFields
  }
}
    ${UserDefaultFieldsFragmentDoc}`;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      updateProfileArgs: // value for 'updateProfileArgs'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const ProfileDocument = gql`
    query profile {
  profile {
    ...userDefaultFields
  }
}
    ${UserDefaultFieldsFragmentDoc}`;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export function useProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileSuspenseQueryHookResult = ReturnType<typeof useProfileSuspenseQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const LoginDocument = gql`
    mutation login($loginArgs: LoginArgs!) {
  login(loginArgs: $loginArgs) {
    profile {
      ...userDefaultFields
    }
    accessToken
    refreshToken
  }
}
    ${UserDefaultFieldsFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginArgs: // value for 'loginArgs'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation changePassword($changePasswordArgs: ChangePasswordArgs!) {
  changePassword(changePasswordArgs: $changePasswordArgs)
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      changePasswordArgs: // value for 'changePasswordArgs'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ReCaptChaDocument = gql`
    query reCaptCha {
  reCaptCha {
    ...captchaDefaultFields
  }
}
    ${CaptchaDefaultFieldsFragmentDoc}`;

/**
 * __useReCaptChaQuery__
 *
 * To run a query within a React component, call `useReCaptChaQuery` and pass it any options that fit your needs.
 * When your component renders, `useReCaptChaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReCaptChaQuery({
 *   variables: {
 *   },
 * });
 */
export function useReCaptChaQuery(baseOptions?: Apollo.QueryHookOptions<ReCaptChaQuery, ReCaptChaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReCaptChaQuery, ReCaptChaQueryVariables>(ReCaptChaDocument, options);
      }
export function useReCaptChaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReCaptChaQuery, ReCaptChaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReCaptChaQuery, ReCaptChaQueryVariables>(ReCaptChaDocument, options);
        }
export function useReCaptChaSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ReCaptChaQuery, ReCaptChaQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ReCaptChaQuery, ReCaptChaQueryVariables>(ReCaptChaDocument, options);
        }
export type ReCaptChaQueryHookResult = ReturnType<typeof useReCaptChaQuery>;
export type ReCaptChaLazyQueryHookResult = ReturnType<typeof useReCaptChaLazyQuery>;
export type ReCaptChaSuspenseQueryHookResult = ReturnType<typeof useReCaptChaSuspenseQuery>;
export type ReCaptChaQueryResult = Apollo.QueryResult<ReCaptChaQuery, ReCaptChaQueryVariables>;
export const UpdateMovieDocument = gql`
    mutation updateMovie($movieId: Int!, $updateMovieArgs: UpdateMovieArgs!) {
  updateMovie(movieId: $movieId, updateMovieArgs: $updateMovieArgs) {
    ...movieSimpleFields
  }
}
    ${MovieSimpleFieldsFragmentDoc}`;
export type UpdateMovieMutationFn = Apollo.MutationFunction<UpdateMovieMutation, UpdateMovieMutationVariables>;

/**
 * __useUpdateMovieMutation__
 *
 * To run a mutation, you first call `useUpdateMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMovieMutation, { data, loading, error }] = useUpdateMovieMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      updateMovieArgs: // value for 'updateMovieArgs'
 *   },
 * });
 */
export function useUpdateMovieMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMovieMutation, UpdateMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMovieMutation, UpdateMovieMutationVariables>(UpdateMovieDocument, options);
      }
export type UpdateMovieMutationHookResult = ReturnType<typeof useUpdateMovieMutation>;
export type UpdateMovieMutationResult = Apollo.MutationResult<UpdateMovieMutation>;
export type UpdateMovieMutationOptions = Apollo.BaseMutationOptions<UpdateMovieMutation, UpdateMovieMutationVariables>;
export const CreateMovieDocument = gql`
    mutation createMovie($createMovieArgs: CreateMovieArgs!) {
  createMovie(createMovieArgs: $createMovieArgs) {
    ...movieDefaultFields
  }
}
    ${MovieDefaultFieldsFragmentDoc}`;
export type CreateMovieMutationFn = Apollo.MutationFunction<CreateMovieMutation, CreateMovieMutationVariables>;

/**
 * __useCreateMovieMutation__
 *
 * To run a mutation, you first call `useCreateMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMovieMutation, { data, loading, error }] = useCreateMovieMutation({
 *   variables: {
 *      createMovieArgs: // value for 'createMovieArgs'
 *   },
 * });
 */
export function useCreateMovieMutation(baseOptions?: Apollo.MutationHookOptions<CreateMovieMutation, CreateMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMovieMutation, CreateMovieMutationVariables>(CreateMovieDocument, options);
      }
export type CreateMovieMutationHookResult = ReturnType<typeof useCreateMovieMutation>;
export type CreateMovieMutationResult = Apollo.MutationResult<CreateMovieMutation>;
export type CreateMovieMutationOptions = Apollo.BaseMutationOptions<CreateMovieMutation, CreateMovieMutationVariables>;
export const EnableMoviesDocument = gql`
    mutation enableMovies($movieId: [Int!]!, $enableMovieArgs: EnableMovieArgs!) {
  enableMovies(movieId: $movieId, enableMovieArgs: $enableMovieArgs) {
    id
  }
}
    `;
export type EnableMoviesMutationFn = Apollo.MutationFunction<EnableMoviesMutation, EnableMoviesMutationVariables>;

/**
 * __useEnableMoviesMutation__
 *
 * To run a mutation, you first call `useEnableMoviesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableMoviesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableMoviesMutation, { data, loading, error }] = useEnableMoviesMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      enableMovieArgs: // value for 'enableMovieArgs'
 *   },
 * });
 */
export function useEnableMoviesMutation(baseOptions?: Apollo.MutationHookOptions<EnableMoviesMutation, EnableMoviesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EnableMoviesMutation, EnableMoviesMutationVariables>(EnableMoviesDocument, options);
      }
export type EnableMoviesMutationHookResult = ReturnType<typeof useEnableMoviesMutation>;
export type EnableMoviesMutationResult = Apollo.MutationResult<EnableMoviesMutation>;
export type EnableMoviesMutationOptions = Apollo.BaseMutationOptions<EnableMoviesMutation, EnableMoviesMutationVariables>;
export const MovieProductsDocument = gql`
    query movieProducts($pageOptions: MovieProductPageOptions) {
  movieProducts(pageOptions: $pageOptions) {
    data {
      ...movieDefaultFields
    }
    paginated {
      ...paginatedDefaultFields
    }
  }
}
    ${MovieDefaultFieldsFragmentDoc}
${PaginatedDefaultFieldsFragmentDoc}`;

/**
 * __useMovieProductsQuery__
 *
 * To run a query within a React component, call `useMovieProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieProductsQuery({
 *   variables: {
 *      pageOptions: // value for 'pageOptions'
 *   },
 * });
 */
export function useMovieProductsQuery(baseOptions?: Apollo.QueryHookOptions<MovieProductsQuery, MovieProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MovieProductsQuery, MovieProductsQueryVariables>(MovieProductsDocument, options);
      }
export function useMovieProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MovieProductsQuery, MovieProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MovieProductsQuery, MovieProductsQueryVariables>(MovieProductsDocument, options);
        }
export function useMovieProductsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MovieProductsQuery, MovieProductsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MovieProductsQuery, MovieProductsQueryVariables>(MovieProductsDocument, options);
        }
export type MovieProductsQueryHookResult = ReturnType<typeof useMovieProductsQuery>;
export type MovieProductsLazyQueryHookResult = ReturnType<typeof useMovieProductsLazyQuery>;
export type MovieProductsSuspenseQueryHookResult = ReturnType<typeof useMovieProductsSuspenseQuery>;
export type MovieProductsQueryResult = Apollo.QueryResult<MovieProductsQuery, MovieProductsQueryVariables>;
export const MovieDetailDocument = gql`
    query movieDetail($movieId: Int!) {
  movieDetail(movieId: $movieId) {
    ...movieSimpleFields
  }
}
    ${MovieSimpleFieldsFragmentDoc}`;

/**
 * __useMovieDetailQuery__
 *
 * To run a query within a React component, call `useMovieDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieDetailQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useMovieDetailQuery(baseOptions: Apollo.QueryHookOptions<MovieDetailQuery, MovieDetailQueryVariables> & ({ variables: MovieDetailQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MovieDetailQuery, MovieDetailQueryVariables>(MovieDetailDocument, options);
      }
export function useMovieDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MovieDetailQuery, MovieDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MovieDetailQuery, MovieDetailQueryVariables>(MovieDetailDocument, options);
        }
export function useMovieDetailSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MovieDetailQuery, MovieDetailQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MovieDetailQuery, MovieDetailQueryVariables>(MovieDetailDocument, options);
        }
export type MovieDetailQueryHookResult = ReturnType<typeof useMovieDetailQuery>;
export type MovieDetailLazyQueryHookResult = ReturnType<typeof useMovieDetailLazyQuery>;
export type MovieDetailSuspenseQueryHookResult = ReturnType<typeof useMovieDetailSuspenseQuery>;
export type MovieDetailQueryResult = Apollo.QueryResult<MovieDetailQuery, MovieDetailQueryVariables>;
export const UpdatePersonDocument = gql`
    mutation updatePerson($personId: Int!, $updatePersonArgs: UpdatePersonArgs!) {
  updatePerson(personId: $personId, updatePersonArgs: $updatePersonArgs) {
    id
  }
}
    `;
export type UpdatePersonMutationFn = Apollo.MutationFunction<UpdatePersonMutation, UpdatePersonMutationVariables>;

/**
 * __useUpdatePersonMutation__
 *
 * To run a mutation, you first call `useUpdatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePersonMutation, { data, loading, error }] = useUpdatePersonMutation({
 *   variables: {
 *      personId: // value for 'personId'
 *      updatePersonArgs: // value for 'updatePersonArgs'
 *   },
 * });
 */
export function useUpdatePersonMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePersonMutation, UpdatePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePersonMutation, UpdatePersonMutationVariables>(UpdatePersonDocument, options);
      }
export type UpdatePersonMutationHookResult = ReturnType<typeof useUpdatePersonMutation>;
export type UpdatePersonMutationResult = Apollo.MutationResult<UpdatePersonMutation>;
export type UpdatePersonMutationOptions = Apollo.BaseMutationOptions<UpdatePersonMutation, UpdatePersonMutationVariables>;
export const CreatePersonDocument = gql`
    mutation createPerson($createPersonArgs: CreatePersonArgs!) {
  createPerson(createPersonArgs: $createPersonArgs) {
    id
  }
}
    `;
export type CreatePersonMutationFn = Apollo.MutationFunction<CreatePersonMutation, CreatePersonMutationVariables>;

/**
 * __useCreatePersonMutation__
 *
 * To run a mutation, you first call `useCreatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPersonMutation, { data, loading, error }] = useCreatePersonMutation({
 *   variables: {
 *      createPersonArgs: // value for 'createPersonArgs'
 *   },
 * });
 */
export function useCreatePersonMutation(baseOptions?: Apollo.MutationHookOptions<CreatePersonMutation, CreatePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePersonMutation, CreatePersonMutationVariables>(CreatePersonDocument, options);
      }
export type CreatePersonMutationHookResult = ReturnType<typeof useCreatePersonMutation>;
export type CreatePersonMutationResult = Apollo.MutationResult<CreatePersonMutation>;
export type CreatePersonMutationOptions = Apollo.BaseMutationOptions<CreatePersonMutation, CreatePersonMutationVariables>;
export const EnablePersonsDocument = gql`
    mutation enablePersons($personId: [Int!]!, $enablePersonArgs: EnablePersonArgs!) {
  enablePersons(personId: $personId, enablePersonArgs: $enablePersonArgs) {
    id
  }
}
    `;
export type EnablePersonsMutationFn = Apollo.MutationFunction<EnablePersonsMutation, EnablePersonsMutationVariables>;

/**
 * __useEnablePersonsMutation__
 *
 * To run a mutation, you first call `useEnablePersonsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnablePersonsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enablePersonsMutation, { data, loading, error }] = useEnablePersonsMutation({
 *   variables: {
 *      personId: // value for 'personId'
 *      enablePersonArgs: // value for 'enablePersonArgs'
 *   },
 * });
 */
export function useEnablePersonsMutation(baseOptions?: Apollo.MutationHookOptions<EnablePersonsMutation, EnablePersonsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EnablePersonsMutation, EnablePersonsMutationVariables>(EnablePersonsDocument, options);
      }
export type EnablePersonsMutationHookResult = ReturnType<typeof useEnablePersonsMutation>;
export type EnablePersonsMutationResult = Apollo.MutationResult<EnablePersonsMutation>;
export type EnablePersonsMutationOptions = Apollo.BaseMutationOptions<EnablePersonsMutation, EnablePersonsMutationVariables>;
export const PersonsDocument = gql`
    query persons($pageOptions: PersonPageOptions) {
  persons(pageOptions: $pageOptions) {
    data {
      ...personDefaultFields
    }
    paginated {
      ...paginatedDefaultFields
    }
  }
}
    ${PersonDefaultFieldsFragmentDoc}
${PaginatedDefaultFieldsFragmentDoc}`;

/**
 * __usePersonsQuery__
 *
 * To run a query within a React component, call `usePersonsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonsQuery({
 *   variables: {
 *      pageOptions: // value for 'pageOptions'
 *   },
 * });
 */
export function usePersonsQuery(baseOptions?: Apollo.QueryHookOptions<PersonsQuery, PersonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PersonsQuery, PersonsQueryVariables>(PersonsDocument, options);
      }
export function usePersonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonsQuery, PersonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PersonsQuery, PersonsQueryVariables>(PersonsDocument, options);
        }
export function usePersonsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PersonsQuery, PersonsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PersonsQuery, PersonsQueryVariables>(PersonsDocument, options);
        }
export type PersonsQueryHookResult = ReturnType<typeof usePersonsQuery>;
export type PersonsLazyQueryHookResult = ReturnType<typeof usePersonsLazyQuery>;
export type PersonsSuspenseQueryHookResult = ReturnType<typeof usePersonsSuspenseQuery>;
export type PersonsQueryResult = Apollo.QueryResult<PersonsQuery, PersonsQueryVariables>;
export const PersonDetailDocument = gql`
    query personDetail($personId: Int!) {
  personDetail(personId: $personId) {
    ...personDefaultFields
  }
}
    ${PersonDefaultFieldsFragmentDoc}`;

/**
 * __usePersonDetailQuery__
 *
 * To run a query within a React component, call `usePersonDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonDetailQuery({
 *   variables: {
 *      personId: // value for 'personId'
 *   },
 * });
 */
export function usePersonDetailQuery(baseOptions: Apollo.QueryHookOptions<PersonDetailQuery, PersonDetailQueryVariables> & ({ variables: PersonDetailQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PersonDetailQuery, PersonDetailQueryVariables>(PersonDetailDocument, options);
      }
export function usePersonDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonDetailQuery, PersonDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PersonDetailQuery, PersonDetailQueryVariables>(PersonDetailDocument, options);
        }
export function usePersonDetailSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PersonDetailQuery, PersonDetailQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PersonDetailQuery, PersonDetailQueryVariables>(PersonDetailDocument, options);
        }
export type PersonDetailQueryHookResult = ReturnType<typeof usePersonDetailQuery>;
export type PersonDetailLazyQueryHookResult = ReturnType<typeof usePersonDetailLazyQuery>;
export type PersonDetailSuspenseQueryHookResult = ReturnType<typeof usePersonDetailSuspenseQuery>;
export type PersonDetailQueryResult = Apollo.QueryResult<PersonDetailQuery, PersonDetailQueryVariables>;
export const UpdateProductCategoryDocument = gql`
    mutation updateProductCategory($productCategoryId: Int!, $updateProductCategoryArgs: UpdateProductCategoryArgs!) {
  updateProductCategory(
    productCategoryId: $productCategoryId
    updateProductCategoryArgs: $updateProductCategoryArgs
  ) {
    ...productCategoryDefaultFields
  }
}
    ${ProductCategoryDefaultFieldsFragmentDoc}`;
export type UpdateProductCategoryMutationFn = Apollo.MutationFunction<UpdateProductCategoryMutation, UpdateProductCategoryMutationVariables>;

/**
 * __useUpdateProductCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateProductCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductCategoryMutation, { data, loading, error }] = useUpdateProductCategoryMutation({
 *   variables: {
 *      productCategoryId: // value for 'productCategoryId'
 *      updateProductCategoryArgs: // value for 'updateProductCategoryArgs'
 *   },
 * });
 */
export function useUpdateProductCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductCategoryMutation, UpdateProductCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductCategoryMutation, UpdateProductCategoryMutationVariables>(UpdateProductCategoryDocument, options);
      }
export type UpdateProductCategoryMutationHookResult = ReturnType<typeof useUpdateProductCategoryMutation>;
export type UpdateProductCategoryMutationResult = Apollo.MutationResult<UpdateProductCategoryMutation>;
export type UpdateProductCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateProductCategoryMutation, UpdateProductCategoryMutationVariables>;
export const EnableProdCategoriesDocument = gql`
    mutation enableProdCategories($productCategoryId: [Int!]!, $enableProdCategoryArgs: EnableProdCategoryArgs!) {
  enableProdCategories(
    productCategoryId: $productCategoryId
    enableProdCategoryArgs: $enableProdCategoryArgs
  ) {
    id
  }
}
    `;
export type EnableProdCategoriesMutationFn = Apollo.MutationFunction<EnableProdCategoriesMutation, EnableProdCategoriesMutationVariables>;

/**
 * __useEnableProdCategoriesMutation__
 *
 * To run a mutation, you first call `useEnableProdCategoriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableProdCategoriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableProdCategoriesMutation, { data, loading, error }] = useEnableProdCategoriesMutation({
 *   variables: {
 *      productCategoryId: // value for 'productCategoryId'
 *      enableProdCategoryArgs: // value for 'enableProdCategoryArgs'
 *   },
 * });
 */
export function useEnableProdCategoriesMutation(baseOptions?: Apollo.MutationHookOptions<EnableProdCategoriesMutation, EnableProdCategoriesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EnableProdCategoriesMutation, EnableProdCategoriesMutationVariables>(EnableProdCategoriesDocument, options);
      }
export type EnableProdCategoriesMutationHookResult = ReturnType<typeof useEnableProdCategoriesMutation>;
export type EnableProdCategoriesMutationResult = Apollo.MutationResult<EnableProdCategoriesMutation>;
export type EnableProdCategoriesMutationOptions = Apollo.BaseMutationOptions<EnableProdCategoriesMutation, EnableProdCategoriesMutationVariables>;
export const ProductCategoriesDocument = gql`
    query productCategories($pageOptions: ProductCategoryPageOptions) {
  productCategories(pageOptions: $pageOptions) {
    data {
      ...productCategorySimpleFields
    }
    paginated {
      ...paginatedDefaultFields
    }
  }
}
    ${ProductCategorySimpleFieldsFragmentDoc}
${PaginatedDefaultFieldsFragmentDoc}`;

/**
 * __useProductCategoriesQuery__
 *
 * To run a query within a React component, call `useProductCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductCategoriesQuery({
 *   variables: {
 *      pageOptions: // value for 'pageOptions'
 *   },
 * });
 */
export function useProductCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<ProductCategoriesQuery, ProductCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductCategoriesQuery, ProductCategoriesQueryVariables>(ProductCategoriesDocument, options);
      }
export function useProductCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductCategoriesQuery, ProductCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductCategoriesQuery, ProductCategoriesQueryVariables>(ProductCategoriesDocument, options);
        }
export function useProductCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductCategoriesQuery, ProductCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductCategoriesQuery, ProductCategoriesQueryVariables>(ProductCategoriesDocument, options);
        }
export type ProductCategoriesQueryHookResult = ReturnType<typeof useProductCategoriesQuery>;
export type ProductCategoriesLazyQueryHookResult = ReturnType<typeof useProductCategoriesLazyQuery>;
export type ProductCategoriesSuspenseQueryHookResult = ReturnType<typeof useProductCategoriesSuspenseQuery>;
export type ProductCategoriesQueryResult = Apollo.QueryResult<ProductCategoriesQuery, ProductCategoriesQueryVariables>;
export const ProductCategoryDetailDocument = gql`
    query productCategoryDetail($productCategoryId: Int!) {
  productCategoryDetail(productCategoryId: $productCategoryId) {
    ...productCategoryDefaultFields
  }
}
    ${ProductCategoryDefaultFieldsFragmentDoc}`;

/**
 * __useProductCategoryDetailQuery__
 *
 * To run a query within a React component, call `useProductCategoryDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductCategoryDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductCategoryDetailQuery({
 *   variables: {
 *      productCategoryId: // value for 'productCategoryId'
 *   },
 * });
 */
export function useProductCategoryDetailQuery(baseOptions: Apollo.QueryHookOptions<ProductCategoryDetailQuery, ProductCategoryDetailQueryVariables> & ({ variables: ProductCategoryDetailQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductCategoryDetailQuery, ProductCategoryDetailQueryVariables>(ProductCategoryDetailDocument, options);
      }
export function useProductCategoryDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductCategoryDetailQuery, ProductCategoryDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductCategoryDetailQuery, ProductCategoryDetailQueryVariables>(ProductCategoryDetailDocument, options);
        }
export function useProductCategoryDetailSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductCategoryDetailQuery, ProductCategoryDetailQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductCategoryDetailQuery, ProductCategoryDetailQueryVariables>(ProductCategoryDetailDocument, options);
        }
export type ProductCategoryDetailQueryHookResult = ReturnType<typeof useProductCategoryDetailQuery>;
export type ProductCategoryDetailLazyQueryHookResult = ReturnType<typeof useProductCategoryDetailLazyQuery>;
export type ProductCategoryDetailSuspenseQueryHookResult = ReturnType<typeof useProductCategoryDetailSuspenseQuery>;
export type ProductCategoryDetailQueryResult = Apollo.QueryResult<ProductCategoryDetailQuery, ProductCategoryDetailQueryVariables>;
export const UpdateRowDocument = gql`
    mutation updateRow($rowId: Int!, $updateRowArgs: UpdateRowArgs!) {
  updateRow(rowId: $rowId, updateRowArgs: $updateRowArgs) {
    ...rowDefaultFields
  }
}
    ${RowDefaultFieldsFragmentDoc}`;
export type UpdateRowMutationFn = Apollo.MutationFunction<UpdateRowMutation, UpdateRowMutationVariables>;

/**
 * __useUpdateRowMutation__
 *
 * To run a mutation, you first call `useUpdateRowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRowMutation, { data, loading, error }] = useUpdateRowMutation({
 *   variables: {
 *      rowId: // value for 'rowId'
 *      updateRowArgs: // value for 'updateRowArgs'
 *   },
 * });
 */
export function useUpdateRowMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRowMutation, UpdateRowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRowMutation, UpdateRowMutationVariables>(UpdateRowDocument, options);
      }
export type UpdateRowMutationHookResult = ReturnType<typeof useUpdateRowMutation>;
export type UpdateRowMutationResult = Apollo.MutationResult<UpdateRowMutation>;
export type UpdateRowMutationOptions = Apollo.BaseMutationOptions<UpdateRowMutation, UpdateRowMutationVariables>;
export const CreateRowDocument = gql`
    mutation createRow($createRowArgs: CreateRowArgs!) {
  createRow(createRowArgs: $createRowArgs) {
    ...rowDefaultFields
  }
}
    ${RowDefaultFieldsFragmentDoc}`;
export type CreateRowMutationFn = Apollo.MutationFunction<CreateRowMutation, CreateRowMutationVariables>;

/**
 * __useCreateRowMutation__
 *
 * To run a mutation, you first call `useCreateRowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRowMutation, { data, loading, error }] = useCreateRowMutation({
 *   variables: {
 *      createRowArgs: // value for 'createRowArgs'
 *   },
 * });
 */
export function useCreateRowMutation(baseOptions?: Apollo.MutationHookOptions<CreateRowMutation, CreateRowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRowMutation, CreateRowMutationVariables>(CreateRowDocument, options);
      }
export type CreateRowMutationHookResult = ReturnType<typeof useCreateRowMutation>;
export type CreateRowMutationResult = Apollo.MutationResult<CreateRowMutation>;
export type CreateRowMutationOptions = Apollo.BaseMutationOptions<CreateRowMutation, CreateRowMutationVariables>;
export const EnableRowsDocument = gql`
    mutation enableRows($rowId: [Int!]!, $enableRowArgs: EnableRowArgs!) {
  enableRows(rowId: $rowId, enableRowArgs: $enableRowArgs) {
    id
  }
}
    `;
export type EnableRowsMutationFn = Apollo.MutationFunction<EnableRowsMutation, EnableRowsMutationVariables>;

/**
 * __useEnableRowsMutation__
 *
 * To run a mutation, you first call `useEnableRowsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableRowsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableRowsMutation, { data, loading, error }] = useEnableRowsMutation({
 *   variables: {
 *      rowId: // value for 'rowId'
 *      enableRowArgs: // value for 'enableRowArgs'
 *   },
 * });
 */
export function useEnableRowsMutation(baseOptions?: Apollo.MutationHookOptions<EnableRowsMutation, EnableRowsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EnableRowsMutation, EnableRowsMutationVariables>(EnableRowsDocument, options);
      }
export type EnableRowsMutationHookResult = ReturnType<typeof useEnableRowsMutation>;
export type EnableRowsMutationResult = Apollo.MutationResult<EnableRowsMutation>;
export type EnableRowsMutationOptions = Apollo.BaseMutationOptions<EnableRowsMutation, EnableRowsMutationVariables>;
export const RowsDocument = gql`
    query rows($pageOptions: RowPageOptions) {
  rows(pageOptions: $pageOptions) {
    data {
      ...rowSimpleFields
    }
    paginated {
      ...paginatedDefaultFields
    }
  }
}
    ${RowSimpleFieldsFragmentDoc}
${PaginatedDefaultFieldsFragmentDoc}`;

/**
 * __useRowsQuery__
 *
 * To run a query within a React component, call `useRowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRowsQuery({
 *   variables: {
 *      pageOptions: // value for 'pageOptions'
 *   },
 * });
 */
export function useRowsQuery(baseOptions?: Apollo.QueryHookOptions<RowsQuery, RowsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RowsQuery, RowsQueryVariables>(RowsDocument, options);
      }
export function useRowsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RowsQuery, RowsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RowsQuery, RowsQueryVariables>(RowsDocument, options);
        }
export function useRowsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<RowsQuery, RowsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RowsQuery, RowsQueryVariables>(RowsDocument, options);
        }
export type RowsQueryHookResult = ReturnType<typeof useRowsQuery>;
export type RowsLazyQueryHookResult = ReturnType<typeof useRowsLazyQuery>;
export type RowsSuspenseQueryHookResult = ReturnType<typeof useRowsSuspenseQuery>;
export type RowsQueryResult = Apollo.QueryResult<RowsQuery, RowsQueryVariables>;
export const RowDetailDocument = gql`
    query rowDetail($rowId: Int!) {
  rowDetail(rowId: $rowId) {
    ...rowDefaultFields
  }
}
    ${RowDefaultFieldsFragmentDoc}`;

/**
 * __useRowDetailQuery__
 *
 * To run a query within a React component, call `useRowDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useRowDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRowDetailQuery({
 *   variables: {
 *      rowId: // value for 'rowId'
 *   },
 * });
 */
export function useRowDetailQuery(baseOptions: Apollo.QueryHookOptions<RowDetailQuery, RowDetailQueryVariables> & ({ variables: RowDetailQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RowDetailQuery, RowDetailQueryVariables>(RowDetailDocument, options);
      }
export function useRowDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RowDetailQuery, RowDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RowDetailQuery, RowDetailQueryVariables>(RowDetailDocument, options);
        }
export function useRowDetailSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<RowDetailQuery, RowDetailQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RowDetailQuery, RowDetailQueryVariables>(RowDetailDocument, options);
        }
export type RowDetailQueryHookResult = ReturnType<typeof useRowDetailQuery>;
export type RowDetailLazyQueryHookResult = ReturnType<typeof useRowDetailLazyQuery>;
export type RowDetailSuspenseQueryHookResult = ReturnType<typeof useRowDetailSuspenseQuery>;
export type RowDetailQueryResult = Apollo.QueryResult<RowDetailQuery, RowDetailQueryVariables>;
export const CreateScheduleDocument = gql`
    mutation createSchedule($createScheduleArgs: CreateScheduleArgs!) {
  createSchedule(createScheduleArgs: $createScheduleArgs) {
    ...scheduleDefaultFields
  }
}
    ${ScheduleDefaultFieldsFragmentDoc}`;
export type CreateScheduleMutationFn = Apollo.MutationFunction<CreateScheduleMutation, CreateScheduleMutationVariables>;

/**
 * __useCreateScheduleMutation__
 *
 * To run a mutation, you first call `useCreateScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createScheduleMutation, { data, loading, error }] = useCreateScheduleMutation({
 *   variables: {
 *      createScheduleArgs: // value for 'createScheduleArgs'
 *   },
 * });
 */
export function useCreateScheduleMutation(baseOptions?: Apollo.MutationHookOptions<CreateScheduleMutation, CreateScheduleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateScheduleMutation, CreateScheduleMutationVariables>(CreateScheduleDocument, options);
      }
export type CreateScheduleMutationHookResult = ReturnType<typeof useCreateScheduleMutation>;
export type CreateScheduleMutationResult = Apollo.MutationResult<CreateScheduleMutation>;
export type CreateScheduleMutationOptions = Apollo.BaseMutationOptions<CreateScheduleMutation, CreateScheduleMutationVariables>;
export const UpdateScheduleDocument = gql`
    mutation updateSchedule($scheduleId: Int!, $updateScheduleArgs: UpdateScheduleArgs!) {
  updateSchedule(scheduleId: $scheduleId, updateScheduleArgs: $updateScheduleArgs) {
    ...scheduleDefaultFields
  }
}
    ${ScheduleDefaultFieldsFragmentDoc}`;
export type UpdateScheduleMutationFn = Apollo.MutationFunction<UpdateScheduleMutation, UpdateScheduleMutationVariables>;

/**
 * __useUpdateScheduleMutation__
 *
 * To run a mutation, you first call `useUpdateScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateScheduleMutation, { data, loading, error }] = useUpdateScheduleMutation({
 *   variables: {
 *      scheduleId: // value for 'scheduleId'
 *      updateScheduleArgs: // value for 'updateScheduleArgs'
 *   },
 * });
 */
export function useUpdateScheduleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateScheduleMutation, UpdateScheduleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateScheduleMutation, UpdateScheduleMutationVariables>(UpdateScheduleDocument, options);
      }
export type UpdateScheduleMutationHookResult = ReturnType<typeof useUpdateScheduleMutation>;
export type UpdateScheduleMutationResult = Apollo.MutationResult<UpdateScheduleMutation>;
export type UpdateScheduleMutationOptions = Apollo.BaseMutationOptions<UpdateScheduleMutation, UpdateScheduleMutationVariables>;
export const EnableSchedulesDocument = gql`
    mutation enableSchedules($scheduleId: [Int!]!, $enableScheduleArgs: EnableScheduleArgs!) {
  enableSchedules(
    scheduleId: $scheduleId
    enableScheduleArgs: $enableScheduleArgs
  ) {
    id
  }
}
    `;
export type EnableSchedulesMutationFn = Apollo.MutationFunction<EnableSchedulesMutation, EnableSchedulesMutationVariables>;

/**
 * __useEnableSchedulesMutation__
 *
 * To run a mutation, you first call `useEnableSchedulesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableSchedulesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableSchedulesMutation, { data, loading, error }] = useEnableSchedulesMutation({
 *   variables: {
 *      scheduleId: // value for 'scheduleId'
 *      enableScheduleArgs: // value for 'enableScheduleArgs'
 *   },
 * });
 */
export function useEnableSchedulesMutation(baseOptions?: Apollo.MutationHookOptions<EnableSchedulesMutation, EnableSchedulesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EnableSchedulesMutation, EnableSchedulesMutationVariables>(EnableSchedulesDocument, options);
      }
export type EnableSchedulesMutationHookResult = ReturnType<typeof useEnableSchedulesMutation>;
export type EnableSchedulesMutationResult = Apollo.MutationResult<EnableSchedulesMutation>;
export type EnableSchedulesMutationOptions = Apollo.BaseMutationOptions<EnableSchedulesMutation, EnableSchedulesMutationVariables>;
export const SchedulesDocument = gql`
    query schedules($pageOptions: SchedulePageOptions) {
  schedules(pageOptions: $pageOptions) {
    data {
      ...scheduleDefaultFields
    }
    paginated {
      ...paginatedDefaultFields
    }
  }
}
    ${ScheduleDefaultFieldsFragmentDoc}
${PaginatedDefaultFieldsFragmentDoc}`;

/**
 * __useSchedulesQuery__
 *
 * To run a query within a React component, call `useSchedulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSchedulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSchedulesQuery({
 *   variables: {
 *      pageOptions: // value for 'pageOptions'
 *   },
 * });
 */
export function useSchedulesQuery(baseOptions?: Apollo.QueryHookOptions<SchedulesQuery, SchedulesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SchedulesQuery, SchedulesQueryVariables>(SchedulesDocument, options);
      }
export function useSchedulesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SchedulesQuery, SchedulesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SchedulesQuery, SchedulesQueryVariables>(SchedulesDocument, options);
        }
export function useSchedulesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SchedulesQuery, SchedulesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SchedulesQuery, SchedulesQueryVariables>(SchedulesDocument, options);
        }
export type SchedulesQueryHookResult = ReturnType<typeof useSchedulesQuery>;
export type SchedulesLazyQueryHookResult = ReturnType<typeof useSchedulesLazyQuery>;
export type SchedulesSuspenseQueryHookResult = ReturnType<typeof useSchedulesSuspenseQuery>;
export type SchedulesQueryResult = Apollo.QueryResult<SchedulesQuery, SchedulesQueryVariables>;
export const ScheduleDetailDocument = gql`
    query scheduleDetail($scheduleId: Int!) {
  scheduleDetail(scheduleId: $scheduleId) {
    ...scheduleDefaultFields
  }
}
    ${ScheduleDefaultFieldsFragmentDoc}`;

/**
 * __useScheduleDetailQuery__
 *
 * To run a query within a React component, call `useScheduleDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useScheduleDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScheduleDetailQuery({
 *   variables: {
 *      scheduleId: // value for 'scheduleId'
 *   },
 * });
 */
export function useScheduleDetailQuery(baseOptions: Apollo.QueryHookOptions<ScheduleDetailQuery, ScheduleDetailQueryVariables> & ({ variables: ScheduleDetailQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScheduleDetailQuery, ScheduleDetailQueryVariables>(ScheduleDetailDocument, options);
      }
export function useScheduleDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScheduleDetailQuery, ScheduleDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScheduleDetailQuery, ScheduleDetailQueryVariables>(ScheduleDetailDocument, options);
        }
export function useScheduleDetailSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ScheduleDetailQuery, ScheduleDetailQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ScheduleDetailQuery, ScheduleDetailQueryVariables>(ScheduleDetailDocument, options);
        }
export type ScheduleDetailQueryHookResult = ReturnType<typeof useScheduleDetailQuery>;
export type ScheduleDetailLazyQueryHookResult = ReturnType<typeof useScheduleDetailLazyQuery>;
export type ScheduleDetailSuspenseQueryHookResult = ReturnType<typeof useScheduleDetailSuspenseQuery>;
export type ScheduleDetailQueryResult = Apollo.QueryResult<ScheduleDetailQuery, ScheduleDetailQueryVariables>;
export const UpdateSeatDocument = gql`
    mutation updateSeat($seatId: Int!, $updateSeatArgs: UpdateSeatArgs!) {
  updateSeat(seatId: $seatId, updateSeatArgs: $updateSeatArgs) {
    ...seatDefaultFields
  }
}
    ${SeatDefaultFieldsFragmentDoc}`;
export type UpdateSeatMutationFn = Apollo.MutationFunction<UpdateSeatMutation, UpdateSeatMutationVariables>;

/**
 * __useUpdateSeatMutation__
 *
 * To run a mutation, you first call `useUpdateSeatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSeatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSeatMutation, { data, loading, error }] = useUpdateSeatMutation({
 *   variables: {
 *      seatId: // value for 'seatId'
 *      updateSeatArgs: // value for 'updateSeatArgs'
 *   },
 * });
 */
export function useUpdateSeatMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSeatMutation, UpdateSeatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSeatMutation, UpdateSeatMutationVariables>(UpdateSeatDocument, options);
      }
export type UpdateSeatMutationHookResult = ReturnType<typeof useUpdateSeatMutation>;
export type UpdateSeatMutationResult = Apollo.MutationResult<UpdateSeatMutation>;
export type UpdateSeatMutationOptions = Apollo.BaseMutationOptions<UpdateSeatMutation, UpdateSeatMutationVariables>;
export const CreateSeatDocument = gql`
    mutation createSeat($createSeatArgs: CreateSeatArgs!) {
  createSeat(createSeatArgs: $createSeatArgs) {
    ...seatDefaultFields
  }
}
    ${SeatDefaultFieldsFragmentDoc}`;
export type CreateSeatMutationFn = Apollo.MutationFunction<CreateSeatMutation, CreateSeatMutationVariables>;

/**
 * __useCreateSeatMutation__
 *
 * To run a mutation, you first call `useCreateSeatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSeatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSeatMutation, { data, loading, error }] = useCreateSeatMutation({
 *   variables: {
 *      createSeatArgs: // value for 'createSeatArgs'
 *   },
 * });
 */
export function useCreateSeatMutation(baseOptions?: Apollo.MutationHookOptions<CreateSeatMutation, CreateSeatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSeatMutation, CreateSeatMutationVariables>(CreateSeatDocument, options);
      }
export type CreateSeatMutationHookResult = ReturnType<typeof useCreateSeatMutation>;
export type CreateSeatMutationResult = Apollo.MutationResult<CreateSeatMutation>;
export type CreateSeatMutationOptions = Apollo.BaseMutationOptions<CreateSeatMutation, CreateSeatMutationVariables>;
export const EnableSeatsDocument = gql`
    mutation enableSeats($seatId: [Int!]!, $enableSeatArgs: EnableSeatArgs!) {
  enableSeats(seatId: $seatId, enableSeatArgs: $enableSeatArgs) {
    id
  }
}
    `;
export type EnableSeatsMutationFn = Apollo.MutationFunction<EnableSeatsMutation, EnableSeatsMutationVariables>;

/**
 * __useEnableSeatsMutation__
 *
 * To run a mutation, you first call `useEnableSeatsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableSeatsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableSeatsMutation, { data, loading, error }] = useEnableSeatsMutation({
 *   variables: {
 *      seatId: // value for 'seatId'
 *      enableSeatArgs: // value for 'enableSeatArgs'
 *   },
 * });
 */
export function useEnableSeatsMutation(baseOptions?: Apollo.MutationHookOptions<EnableSeatsMutation, EnableSeatsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EnableSeatsMutation, EnableSeatsMutationVariables>(EnableSeatsDocument, options);
      }
export type EnableSeatsMutationHookResult = ReturnType<typeof useEnableSeatsMutation>;
export type EnableSeatsMutationResult = Apollo.MutationResult<EnableSeatsMutation>;
export type EnableSeatsMutationOptions = Apollo.BaseMutationOptions<EnableSeatsMutation, EnableSeatsMutationVariables>;
export const SeatsDocument = gql`
    query seats($pageOptions: SeatPageOptions) {
  seats(pageOptions: $pageOptions) {
    data {
      ...seatSimpleFields
    }
    paginated {
      ...paginatedDefaultFields
    }
  }
}
    ${SeatSimpleFieldsFragmentDoc}
${PaginatedDefaultFieldsFragmentDoc}`;

/**
 * __useSeatsQuery__
 *
 * To run a query within a React component, call `useSeatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeatsQuery({
 *   variables: {
 *      pageOptions: // value for 'pageOptions'
 *   },
 * });
 */
export function useSeatsQuery(baseOptions?: Apollo.QueryHookOptions<SeatsQuery, SeatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeatsQuery, SeatsQueryVariables>(SeatsDocument, options);
      }
export function useSeatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeatsQuery, SeatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeatsQuery, SeatsQueryVariables>(SeatsDocument, options);
        }
export function useSeatsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SeatsQuery, SeatsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SeatsQuery, SeatsQueryVariables>(SeatsDocument, options);
        }
export type SeatsQueryHookResult = ReturnType<typeof useSeatsQuery>;
export type SeatsLazyQueryHookResult = ReturnType<typeof useSeatsLazyQuery>;
export type SeatsSuspenseQueryHookResult = ReturnType<typeof useSeatsSuspenseQuery>;
export type SeatsQueryResult = Apollo.QueryResult<SeatsQuery, SeatsQueryVariables>;
export const SeatDetailDocument = gql`
    query seatDetail($seatId: Int!) {
  seatDetail(seatId: $seatId) {
    ...seatDefaultFields
  }
}
    ${SeatDefaultFieldsFragmentDoc}`;

/**
 * __useSeatDetailQuery__
 *
 * To run a query within a React component, call `useSeatDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeatDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeatDetailQuery({
 *   variables: {
 *      seatId: // value for 'seatId'
 *   },
 * });
 */
export function useSeatDetailQuery(baseOptions: Apollo.QueryHookOptions<SeatDetailQuery, SeatDetailQueryVariables> & ({ variables: SeatDetailQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeatDetailQuery, SeatDetailQueryVariables>(SeatDetailDocument, options);
      }
export function useSeatDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeatDetailQuery, SeatDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeatDetailQuery, SeatDetailQueryVariables>(SeatDetailDocument, options);
        }
export function useSeatDetailSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SeatDetailQuery, SeatDetailQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SeatDetailQuery, SeatDetailQueryVariables>(SeatDetailDocument, options);
        }
export type SeatDetailQueryHookResult = ReturnType<typeof useSeatDetailQuery>;
export type SeatDetailLazyQueryHookResult = ReturnType<typeof useSeatDetailLazyQuery>;
export type SeatDetailSuspenseQueryHookResult = ReturnType<typeof useSeatDetailSuspenseQuery>;
export type SeatDetailQueryResult = Apollo.QueryResult<SeatDetailQuery, SeatDetailQueryVariables>;
export const UpdateSectorDocument = gql`
    mutation updateSector($sectorId: Int!, $updateSectorArgs: UpdateSectorArgs!) {
  updateSector(sectorId: $sectorId, updateSectorArgs: $updateSectorArgs) {
    ...sectorDefaultFields
  }
}
    ${SectorDefaultFieldsFragmentDoc}`;
export type UpdateSectorMutationFn = Apollo.MutationFunction<UpdateSectorMutation, UpdateSectorMutationVariables>;

/**
 * __useUpdateSectorMutation__
 *
 * To run a mutation, you first call `useUpdateSectorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSectorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSectorMutation, { data, loading, error }] = useUpdateSectorMutation({
 *   variables: {
 *      sectorId: // value for 'sectorId'
 *      updateSectorArgs: // value for 'updateSectorArgs'
 *   },
 * });
 */
export function useUpdateSectorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSectorMutation, UpdateSectorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSectorMutation, UpdateSectorMutationVariables>(UpdateSectorDocument, options);
      }
export type UpdateSectorMutationHookResult = ReturnType<typeof useUpdateSectorMutation>;
export type UpdateSectorMutationResult = Apollo.MutationResult<UpdateSectorMutation>;
export type UpdateSectorMutationOptions = Apollo.BaseMutationOptions<UpdateSectorMutation, UpdateSectorMutationVariables>;
export const SectorDetailDocument = gql`
    query sectorDetail($sectorId: Int!) {
  sectorDetail(sectorId: $sectorId) {
    ...sectorDefaultFields
  }
}
    ${SectorDefaultFieldsFragmentDoc}`;

/**
 * __useSectorDetailQuery__
 *
 * To run a query within a React component, call `useSectorDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useSectorDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSectorDetailQuery({
 *   variables: {
 *      sectorId: // value for 'sectorId'
 *   },
 * });
 */
export function useSectorDetailQuery(baseOptions: Apollo.QueryHookOptions<SectorDetailQuery, SectorDetailQueryVariables> & ({ variables: SectorDetailQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SectorDetailQuery, SectorDetailQueryVariables>(SectorDetailDocument, options);
      }
export function useSectorDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SectorDetailQuery, SectorDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SectorDetailQuery, SectorDetailQueryVariables>(SectorDetailDocument, options);
        }
export function useSectorDetailSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SectorDetailQuery, SectorDetailQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SectorDetailQuery, SectorDetailQueryVariables>(SectorDetailDocument, options);
        }
export type SectorDetailQueryHookResult = ReturnType<typeof useSectorDetailQuery>;
export type SectorDetailLazyQueryHookResult = ReturnType<typeof useSectorDetailLazyQuery>;
export type SectorDetailSuspenseQueryHookResult = ReturnType<typeof useSectorDetailSuspenseQuery>;
export type SectorDetailQueryResult = Apollo.QueryResult<SectorDetailQuery, SectorDetailQueryVariables>;
export const CreateSectorDocument = gql`
    mutation createSector($createSectorArgs: CreateSectorArgs!) {
  createSector(createSectorArgs: $createSectorArgs) {
    ...sectorDefaultFields
  }
}
    ${SectorDefaultFieldsFragmentDoc}`;
export type CreateSectorMutationFn = Apollo.MutationFunction<CreateSectorMutation, CreateSectorMutationVariables>;

/**
 * __useCreateSectorMutation__
 *
 * To run a mutation, you first call `useCreateSectorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSectorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSectorMutation, { data, loading, error }] = useCreateSectorMutation({
 *   variables: {
 *      createSectorArgs: // value for 'createSectorArgs'
 *   },
 * });
 */
export function useCreateSectorMutation(baseOptions?: Apollo.MutationHookOptions<CreateSectorMutation, CreateSectorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSectorMutation, CreateSectorMutationVariables>(CreateSectorDocument, options);
      }
export type CreateSectorMutationHookResult = ReturnType<typeof useCreateSectorMutation>;
export type CreateSectorMutationResult = Apollo.MutationResult<CreateSectorMutation>;
export type CreateSectorMutationOptions = Apollo.BaseMutationOptions<CreateSectorMutation, CreateSectorMutationVariables>;
export const EnableSectorsDocument = gql`
    mutation enableSectors($sectorId: [Int!]!, $enableSectorArgs: EnableSectorArgs!) {
  enableSectors(sectorId: $sectorId, enableSectorArgs: $enableSectorArgs) {
    id
  }
}
    `;
export type EnableSectorsMutationFn = Apollo.MutationFunction<EnableSectorsMutation, EnableSectorsMutationVariables>;

/**
 * __useEnableSectorsMutation__
 *
 * To run a mutation, you first call `useEnableSectorsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableSectorsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableSectorsMutation, { data, loading, error }] = useEnableSectorsMutation({
 *   variables: {
 *      sectorId: // value for 'sectorId'
 *      enableSectorArgs: // value for 'enableSectorArgs'
 *   },
 * });
 */
export function useEnableSectorsMutation(baseOptions?: Apollo.MutationHookOptions<EnableSectorsMutation, EnableSectorsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EnableSectorsMutation, EnableSectorsMutationVariables>(EnableSectorsDocument, options);
      }
export type EnableSectorsMutationHookResult = ReturnType<typeof useEnableSectorsMutation>;
export type EnableSectorsMutationResult = Apollo.MutationResult<EnableSectorsMutation>;
export type EnableSectorsMutationOptions = Apollo.BaseMutationOptions<EnableSectorsMutation, EnableSectorsMutationVariables>;
export const SectorsDocument = gql`
    query sectors($pageOptions: SectorPageOptions) {
  sectors(pageOptions: $pageOptions) {
    data {
      ...sectorSimpleFields
    }
    paginated {
      ...paginatedDefaultFields
    }
  }
}
    ${SectorSimpleFieldsFragmentDoc}
${PaginatedDefaultFieldsFragmentDoc}`;

/**
 * __useSectorsQuery__
 *
 * To run a query within a React component, call `useSectorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSectorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSectorsQuery({
 *   variables: {
 *      pageOptions: // value for 'pageOptions'
 *   },
 * });
 */
export function useSectorsQuery(baseOptions?: Apollo.QueryHookOptions<SectorsQuery, SectorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SectorsQuery, SectorsQueryVariables>(SectorsDocument, options);
      }
export function useSectorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SectorsQuery, SectorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SectorsQuery, SectorsQueryVariables>(SectorsDocument, options);
        }
export function useSectorsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SectorsQuery, SectorsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SectorsQuery, SectorsQueryVariables>(SectorsDocument, options);
        }
export type SectorsQueryHookResult = ReturnType<typeof useSectorsQuery>;
export type SectorsLazyQueryHookResult = ReturnType<typeof useSectorsLazyQuery>;
export type SectorsSuspenseQueryHookResult = ReturnType<typeof useSectorsSuspenseQuery>;
export type SectorsQueryResult = Apollo.QueryResult<SectorsQuery, SectorsQueryVariables>;
export const CreateShowTimesDocument = gql`
    mutation createShowTimes($createShowTimesArgs: CreateShowTimesArgs!) {
  createShowTimes(createShowTimesArgs: $createShowTimesArgs) {
    ...showTimesSimpleFields
  }
}
    ${ShowTimesSimpleFieldsFragmentDoc}`;
export type CreateShowTimesMutationFn = Apollo.MutationFunction<CreateShowTimesMutation, CreateShowTimesMutationVariables>;

/**
 * __useCreateShowTimesMutation__
 *
 * To run a mutation, you first call `useCreateShowTimesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShowTimesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShowTimesMutation, { data, loading, error }] = useCreateShowTimesMutation({
 *   variables: {
 *      createShowTimesArgs: // value for 'createShowTimesArgs'
 *   },
 * });
 */
export function useCreateShowTimesMutation(baseOptions?: Apollo.MutationHookOptions<CreateShowTimesMutation, CreateShowTimesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateShowTimesMutation, CreateShowTimesMutationVariables>(CreateShowTimesDocument, options);
      }
export type CreateShowTimesMutationHookResult = ReturnType<typeof useCreateShowTimesMutation>;
export type CreateShowTimesMutationResult = Apollo.MutationResult<CreateShowTimesMutation>;
export type CreateShowTimesMutationOptions = Apollo.BaseMutationOptions<CreateShowTimesMutation, CreateShowTimesMutationVariables>;
export const EnableShowTimesDocument = gql`
    mutation enableShowTimes($showTimesId: [Int!]!, $enableShowTimeArgs: EnableShowTimeArgs!) {
  enableShowTimes(
    showTimesId: $showTimesId
    enableShowTimeArgs: $enableShowTimeArgs
  ) {
    id
  }
}
    `;
export type EnableShowTimesMutationFn = Apollo.MutationFunction<EnableShowTimesMutation, EnableShowTimesMutationVariables>;

/**
 * __useEnableShowTimesMutation__
 *
 * To run a mutation, you first call `useEnableShowTimesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableShowTimesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableShowTimesMutation, { data, loading, error }] = useEnableShowTimesMutation({
 *   variables: {
 *      showTimesId: // value for 'showTimesId'
 *      enableShowTimeArgs: // value for 'enableShowTimeArgs'
 *   },
 * });
 */
export function useEnableShowTimesMutation(baseOptions?: Apollo.MutationHookOptions<EnableShowTimesMutation, EnableShowTimesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EnableShowTimesMutation, EnableShowTimesMutationVariables>(EnableShowTimesDocument, options);
      }
export type EnableShowTimesMutationHookResult = ReturnType<typeof useEnableShowTimesMutation>;
export type EnableShowTimesMutationResult = Apollo.MutationResult<EnableShowTimesMutation>;
export type EnableShowTimesMutationOptions = Apollo.BaseMutationOptions<EnableShowTimesMutation, EnableShowTimesMutationVariables>;
export const ShowTimesDocument = gql`
    query showTimes($pageOptions: ShowTimePageOptions) {
  showTimes(pageOptions: $pageOptions) {
    data {
      ...showTimesDefaultFields
    }
    paginated {
      ...paginatedDefaultFields
    }
  }
}
    ${ShowTimesDefaultFieldsFragmentDoc}
${PaginatedDefaultFieldsFragmentDoc}`;

/**
 * __useShowTimesQuery__
 *
 * To run a query within a React component, call `useShowTimesQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowTimesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowTimesQuery({
 *   variables: {
 *      pageOptions: // value for 'pageOptions'
 *   },
 * });
 */
export function useShowTimesQuery(baseOptions?: Apollo.QueryHookOptions<ShowTimesQuery, ShowTimesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShowTimesQuery, ShowTimesQueryVariables>(ShowTimesDocument, options);
      }
export function useShowTimesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShowTimesQuery, ShowTimesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShowTimesQuery, ShowTimesQueryVariables>(ShowTimesDocument, options);
        }
export function useShowTimesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ShowTimesQuery, ShowTimesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ShowTimesQuery, ShowTimesQueryVariables>(ShowTimesDocument, options);
        }
export type ShowTimesQueryHookResult = ReturnType<typeof useShowTimesQuery>;
export type ShowTimesLazyQueryHookResult = ReturnType<typeof useShowTimesLazyQuery>;
export type ShowTimesSuspenseQueryHookResult = ReturnType<typeof useShowTimesSuspenseQuery>;
export type ShowTimesQueryResult = Apollo.QueryResult<ShowTimesQuery, ShowTimesQueryVariables>;
export const ShowTimeDetailDocument = gql`
    query showTimeDetail($showTimesId: Int!) {
  showTimeDetail(showTimesId: $showTimesId) {
    ...showTimesDefaultFields
  }
}
    ${ShowTimesDefaultFieldsFragmentDoc}`;

/**
 * __useShowTimeDetailQuery__
 *
 * To run a query within a React component, call `useShowTimeDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowTimeDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowTimeDetailQuery({
 *   variables: {
 *      showTimesId: // value for 'showTimesId'
 *   },
 * });
 */
export function useShowTimeDetailQuery(baseOptions: Apollo.QueryHookOptions<ShowTimeDetailQuery, ShowTimeDetailQueryVariables> & ({ variables: ShowTimeDetailQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShowTimeDetailQuery, ShowTimeDetailQueryVariables>(ShowTimeDetailDocument, options);
      }
export function useShowTimeDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShowTimeDetailQuery, ShowTimeDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShowTimeDetailQuery, ShowTimeDetailQueryVariables>(ShowTimeDetailDocument, options);
        }
export function useShowTimeDetailSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ShowTimeDetailQuery, ShowTimeDetailQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ShowTimeDetailQuery, ShowTimeDetailQueryVariables>(ShowTimeDetailDocument, options);
        }
export type ShowTimeDetailQueryHookResult = ReturnType<typeof useShowTimeDetailQuery>;
export type ShowTimeDetailLazyQueryHookResult = ReturnType<typeof useShowTimeDetailLazyQuery>;
export type ShowTimeDetailSuspenseQueryHookResult = ReturnType<typeof useShowTimeDetailSuspenseQuery>;
export type ShowTimeDetailQueryResult = Apollo.QueryResult<ShowTimeDetailQuery, ShowTimeDetailQueryVariables>;
export const UpdateTheaterDocument = gql`
    mutation updateTheater($theaterId: Int!, $updateTheaterArgs: UpdateTheaterArgs!) {
  updateTheater(theaterId: $theaterId, updateTheaterArgs: $updateTheaterArgs) {
    ...theaterDefaultFields
  }
}
    ${TheaterDefaultFieldsFragmentDoc}`;
export type UpdateTheaterMutationFn = Apollo.MutationFunction<UpdateTheaterMutation, UpdateTheaterMutationVariables>;

/**
 * __useUpdateTheaterMutation__
 *
 * To run a mutation, you first call `useUpdateTheaterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTheaterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTheaterMutation, { data, loading, error }] = useUpdateTheaterMutation({
 *   variables: {
 *      theaterId: // value for 'theaterId'
 *      updateTheaterArgs: // value for 'updateTheaterArgs'
 *   },
 * });
 */
export function useUpdateTheaterMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTheaterMutation, UpdateTheaterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTheaterMutation, UpdateTheaterMutationVariables>(UpdateTheaterDocument, options);
      }
export type UpdateTheaterMutationHookResult = ReturnType<typeof useUpdateTheaterMutation>;
export type UpdateTheaterMutationResult = Apollo.MutationResult<UpdateTheaterMutation>;
export type UpdateTheaterMutationOptions = Apollo.BaseMutationOptions<UpdateTheaterMutation, UpdateTheaterMutationVariables>;
export const CreateTheaterDocument = gql`
    mutation createTheater($createTheaterArgs: CreateTheaterArgs!) {
  createTheater(createTheaterArgs: $createTheaterArgs) {
    ...theaterDefaultFields
  }
}
    ${TheaterDefaultFieldsFragmentDoc}`;
export type CreateTheaterMutationFn = Apollo.MutationFunction<CreateTheaterMutation, CreateTheaterMutationVariables>;

/**
 * __useCreateTheaterMutation__
 *
 * To run a mutation, you first call `useCreateTheaterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTheaterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTheaterMutation, { data, loading, error }] = useCreateTheaterMutation({
 *   variables: {
 *      createTheaterArgs: // value for 'createTheaterArgs'
 *   },
 * });
 */
export function useCreateTheaterMutation(baseOptions?: Apollo.MutationHookOptions<CreateTheaterMutation, CreateTheaterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTheaterMutation, CreateTheaterMutationVariables>(CreateTheaterDocument, options);
      }
export type CreateTheaterMutationHookResult = ReturnType<typeof useCreateTheaterMutation>;
export type CreateTheaterMutationResult = Apollo.MutationResult<CreateTheaterMutation>;
export type CreateTheaterMutationOptions = Apollo.BaseMutationOptions<CreateTheaterMutation, CreateTheaterMutationVariables>;
export const EnableTheatersDocument = gql`
    mutation enableTheaters($theaterId: [Int!]!, $enableTheaterArgs: EnableTheaterArgs!) {
  enableTheaters(theaterId: $theaterId, enableTheaterArgs: $enableTheaterArgs) {
    id
  }
}
    `;
export type EnableTheatersMutationFn = Apollo.MutationFunction<EnableTheatersMutation, EnableTheatersMutationVariables>;

/**
 * __useEnableTheatersMutation__
 *
 * To run a mutation, you first call `useEnableTheatersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableTheatersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableTheatersMutation, { data, loading, error }] = useEnableTheatersMutation({
 *   variables: {
 *      theaterId: // value for 'theaterId'
 *      enableTheaterArgs: // value for 'enableTheaterArgs'
 *   },
 * });
 */
export function useEnableTheatersMutation(baseOptions?: Apollo.MutationHookOptions<EnableTheatersMutation, EnableTheatersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EnableTheatersMutation, EnableTheatersMutationVariables>(EnableTheatersDocument, options);
      }
export type EnableTheatersMutationHookResult = ReturnType<typeof useEnableTheatersMutation>;
export type EnableTheatersMutationResult = Apollo.MutationResult<EnableTheatersMutation>;
export type EnableTheatersMutationOptions = Apollo.BaseMutationOptions<EnableTheatersMutation, EnableTheatersMutationVariables>;
export const TheatersDocument = gql`
    query theaters($pageOptions: TheaterPageOptions) {
  theaters(pageOptions: $pageOptions) {
    data {
      ...theaterDefaultFields
    }
    paginated {
      ...paginatedDefaultFields
    }
  }
}
    ${TheaterDefaultFieldsFragmentDoc}
${PaginatedDefaultFieldsFragmentDoc}`;

/**
 * __useTheatersQuery__
 *
 * To run a query within a React component, call `useTheatersQuery` and pass it any options that fit your needs.
 * When your component renders, `useTheatersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTheatersQuery({
 *   variables: {
 *      pageOptions: // value for 'pageOptions'
 *   },
 * });
 */
export function useTheatersQuery(baseOptions?: Apollo.QueryHookOptions<TheatersQuery, TheatersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TheatersQuery, TheatersQueryVariables>(TheatersDocument, options);
      }
export function useTheatersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TheatersQuery, TheatersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TheatersQuery, TheatersQueryVariables>(TheatersDocument, options);
        }
export function useTheatersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TheatersQuery, TheatersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TheatersQuery, TheatersQueryVariables>(TheatersDocument, options);
        }
export type TheatersQueryHookResult = ReturnType<typeof useTheatersQuery>;
export type TheatersLazyQueryHookResult = ReturnType<typeof useTheatersLazyQuery>;
export type TheatersSuspenseQueryHookResult = ReturnType<typeof useTheatersSuspenseQuery>;
export type TheatersQueryResult = Apollo.QueryResult<TheatersQuery, TheatersQueryVariables>;
export const TheaterDetailDocument = gql`
    query theaterDetail($theaterId: Int!) {
  theaterDetail(theaterId: $theaterId) {
    ...theaterDefaultFields
  }
}
    ${TheaterDefaultFieldsFragmentDoc}`;

/**
 * __useTheaterDetailQuery__
 *
 * To run a query within a React component, call `useTheaterDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useTheaterDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTheaterDetailQuery({
 *   variables: {
 *      theaterId: // value for 'theaterId'
 *   },
 * });
 */
export function useTheaterDetailQuery(baseOptions: Apollo.QueryHookOptions<TheaterDetailQuery, TheaterDetailQueryVariables> & ({ variables: TheaterDetailQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TheaterDetailQuery, TheaterDetailQueryVariables>(TheaterDetailDocument, options);
      }
export function useTheaterDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TheaterDetailQuery, TheaterDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TheaterDetailQuery, TheaterDetailQueryVariables>(TheaterDetailDocument, options);
        }
export function useTheaterDetailSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TheaterDetailQuery, TheaterDetailQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TheaterDetailQuery, TheaterDetailQueryVariables>(TheaterDetailDocument, options);
        }
export type TheaterDetailQueryHookResult = ReturnType<typeof useTheaterDetailQuery>;
export type TheaterDetailLazyQueryHookResult = ReturnType<typeof useTheaterDetailLazyQuery>;
export type TheaterDetailSuspenseQueryHookResult = ReturnType<typeof useTheaterDetailSuspenseQuery>;
export type TheaterDetailQueryResult = Apollo.QueryResult<TheaterDetailQuery, TheaterDetailQueryVariables>;