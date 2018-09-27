/**
 * https://taylorchen709.github.io/vue-admin/?#/table
 * @type {*[]}
 */
export const MENUDATA = [
  {
    name: '主数据',
    iconCls: 'subway',
    leaf: true, // 是否有子菜单
    children: [
      {
        name: '居民主索引',
        iconCls: 'cab',
        menuUrl: '/masterData/patient'
      },
      {
        name: '机构主数据',
        iconCls: 'plan',
        menuUrl: '/masterData/org'
      },
      {
        name: '科室主数据',
        iconCls: 'car',
        menuUrl: '/masterData/dept'
      },
      {
        name: '疾病主数据',
        iconCls: 'taxi',
        menuUrl: '/masterData/disease'
      },
      {
        name: '药品主数据',
        iconCls: 'bicycle',
        menuUrl: '/masterData/drugs'
      },
      {
        name: '检验、检查主数据',
        iconCls: 'train',
        menuUrl: '/masterData/check'
      }
    ]
  },
  {
    name: '数据资源视图',
    iconCls: 'train',
    leaf: true, // 是否有子菜单
    children: [
      {
        name: '人口资源视图',
        iconCls: 'ship',
        menuUrl: '/DataRes/people'
      },
      {
        name: '机构资源视图',
        iconCls: 'truck',
        menuUrl: '/DataRes/org'
      },
      {
        name: '科室资源视图',
        iconCls: 'bus',
        menuUrl: '/DataRes/dept'
      },
      {
        name: '疾病资源视图',
        iconCls: 'motorcycle',
        menuUrl: '/DataRes/disease'
      }
    ]
  }

]
