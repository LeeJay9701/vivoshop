import Mock from 'mockjs'
import {
  userLogin
} from './user.js'


Mock.mock('/api/login', userLogin)