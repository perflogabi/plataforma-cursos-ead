import AdminJs from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import AdminJSSequelize from '@adminjs/sequelize'
import { adminJsResources } from './resources'
import sequelize  from '../database'

AdminJs.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJs({
  databases: [sequelize],
  rootPath: '/admin',
  resources: adminJsResources,
  branding: {
    companyName: 'Educa+',
    logo: '/logo2.png',
    theme: {
      colors: {
        primary100: '#ff0043',
	      primary80: '#ff1a57',
	      primary60: '#ff3369',
	      primary40: '#ff4d7c',
		    primary20: '#ff668f',
	      grey100: '#151515',
	      grey80: '#333333',
	      grey60: '#4d4d4d',
	      grey40: '#666666',
	      grey20: '#dddddd',
	      filterBg: '#333333',
	      accent: '#151515',
	      hoverBg: '#151515',
      }
    }
  }
})

export const adminJsRouter = AdminJSExpress.buildRouter(adminJs)