/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/models/user.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-08-25 15:27:47
 * :last editor: 张德志
 * :date last edited: 2023-10-02 16:32:55
 */
import type { Effect, Reducer } from 'umi';
import { history } from 'umi';
import { getUserCurrentAuth } from '@/services/index';

export interface CurrentUser {
  avatar?: string;
  name?: string;
  title?: string;
  group?: string;
  signature?: string;
  tags?: {
    key: string;
    label: string;
  }[];
  userid?: string;
  unreadCount?: number;
}

export interface OperationPermissions {
  1: string[];
  11: string[];
  2: any[];
  3: string[];
  4: string[];
  5: string[];
  9: string[];
}

export interface Company {
  _id: string;
  name: string;
}

export interface Person {
  _id: string;
  avatar_url: string;
  data_permission: number;
  email: string;
  first_login: number;
  gender: number;
  level_one_department_id: string[];
  name: string;
  operation_permissions: string[];
  phone: string;
  role_name: string;
  role_type: number;
}

export interface PaasProfile {
  company: Company;
  person: Person;
  stat: number;
}

export interface Product {
  is_visible: boolean;
  product_status: number;
  product_type: number;
  product_name: string;
}

export interface Role {
  _id: string;
  data_permission: number;
  name: string;
  role_type: number;
}

export interface SendMessageVerify {
  open_message_verify: number;
  products_type: any[];
}

export interface FxiaokeConfig {
  triggerWorkflow: number;
}
export interface FeatureConfig {
  contact_info?: number;
  contract?: number;
  electronic_contract?: number;
  electronic_invoice?: number;
  eshop?: number;
  payment?: number;
  payment_bill?: number;
  pool_advanced_search?: number;
  project_management?: number;
  sign_management?: number;
  smart_assign?: number;
  smart_monitor?: number;
  smart_ranking?: number;
  sop?: number;
  statistical_analysis?: number;
  sync_doncus_data?: number;
  target_management?: number;
}
export interface CrmProfile {
  feature_config?: FeatureConfig;
}
export interface Profile {
  _id: string;
  agent_id: string;
  avatar_url: string;
  company_id: string;
  is_first_enter: boolean;
  name: string;
  operation_permissions: OperationPermissions;
  paas_profile: PaasProfile;
  phone: string;
  products: Product[];
  role: Role;
  send_message_verify: SendMessageVerify;
  service_error_product_types: any[];
  show_product_types: number[];
  weekly_report_visible: boolean;
  crm_profile?: CrmProfile;
}

export interface MenuProfileData {
  key: string;
  name: string;
  update_user: string;
  show_value: string;
  is_show: number;
  update_time: number;
  children: MenuProfileData[];
}

export interface MenuProfile {
  data: MenuProfileData[];
  app: MenuProfileData[];
}

export interface UserType {
  name: string;
  company_user_id: string;
  company_id: string;
}

export interface UserModelState {
  profile: Partial<Profile>;
  userInfo: Partial<UserType>;
  menuProfile?: Partial<any>;
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    getCurrentAuth: Effect;
  };
  reducers: {
    saveCurrentAuth: Reducer<UserModelState>;
  };
}

const UserModel: UserModelType = {
  namespace: 'user',
  state: {
    userInfo: {},
    profile: {},
    menuProfile: {},
  },

  effects: {
    *getCurrentAuth(action, { call, put }) {
      //@ts-ignore
      const response = yield call(getUserCurrentAuth, action.payload);

      //  用户是否有权限
      if (!response.user_id) {
        history.push('/user/login');
        return;
      }

      // 当前权限继续下执行
      if (!(response instanceof Error) && response.user_id) {
        yield put({
          type: 'saveCurrentAuth',
          payload: response,
        });
      }
    },
  },

  reducers: {
    saveCurrentAuth(state, action) {
      console.log('action', action);
      return {
        ...state,
        userInfo: action.payload,
      };
    },
  },
};

export default UserModel;
