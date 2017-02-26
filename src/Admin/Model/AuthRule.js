/**
 * Model
 * @return
 */
export default class extends THINK.Model {
    init(name, config){
        super.init(name, config);

        // 是否开启迁移(migrate方法可用)
        //this.safe = false;
        // 数据表字段信息
        this.fields = {
            name: {
                type: 'string',
                required: true
            },
            desc: {
                type: 'string',
                unique: true
            },
            pid: {
                type: 'integer',
                index: true,
                defaultsTo: 0
            },
            level: {
                type: 'integer',
                defaultsTo: 1,
                index: true
            },
            icon: {
                type: 'string',
                size: 30
            },
            status: {
                type: 'integer',
                defaultsTo: 0,
                index: true
            },
            isshow: {
                type: 'integer',
                defaultsTo: 0,
                index: true
            },
            condition: {
                type: 'string'
            },
            listorders: {
                type: 'integer'
            }
        };
        // 数据验证
        this.validations = {
          desc: {
            valid: ['required', 'length'],
            length_args: [2],
            msg: {
              required: '规则名称不能为空',
              length: '规则名称长度不能小于2'
            }
          }
        };
        // 关联关系
        this.relation = {};
    }

  _beforeAdd (data, options){
    if(data.pid !== undefined){
      if(data.pid.indexOf("-") > -1){
        var pidArr = data.pid.split('-');
        data.pid = pidArr[0];
        data.level = parseInt(pidArr[1])  + 1;
      }else{
        data.level = 1;
      }
    }
    return THINK.getPromise(data);
  }

  _afterAdd(data, options) {
    return THINK.getPromise(data);
  }

  _beforeDelete(options) {
    var id = options.id || options.where.id;
    return this.where({pid:id}).count().then(function (num) {
      if(num > 0){
        return THINK.error("该规则拥有子规则,请先删除子规则");
      }
      return options;
    });
  }

  _afterDelete(options) {
    return THINK.getPromise(options);
  }

  _beforeUpdate(data, options) {
    return this._beforeAdd(data);
  }

  _afterUpdate(data, options) {
    return THINK.getPromise(data);
  }

  _afterFind(result, options) {
    return THINK.getPromise(result);
  }
}
