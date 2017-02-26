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
            desc: {
                type: 'string',
                unique: true,
                required: true
            },
            status: {
                type: 'integer',
                required: true,
                index: true,
                defaultsTo: 0
            },
            rule_ids: {
                type: 'text'
            },
            ext: {
                type: 'json'
            }
        };
        // 数据验证
        this.validations = {
          desc: {
            valid: ['required'],
            msg: {
              required: '名称必填'
            }
          }
        };
        // 关联关系
        this.relation = {};
    }

  _beforeAdd(data, options) {
    return THINK.getPromise(data);
  }

  _afterAdd(data, options) {
    return THINK.getPromise(data);
  }

  _beforeDelete(options) {
    //存在账号数据,则不允许删除
    return THINK.model('Admin/User', {}).where({role: options.id || options.where.id}).count().then(function (num) {
      if (num) {
        return THINK.error('存在账号数据,不允许删除');
      }
      return options;
    });
  }

  _afterDelete(options) {
    return THINK.getPromise(options);
  }

  _beforeUpdate(data, options) {
    return THINK.getPromise(data);
  }

  _afterUpdate(data, options) {
    return THINK.getPromise(options);
  }

  _afterFind(result, options) {
    if (!THINK.isEmpty(result.rule_ids)) {
      result.rule_ids = isString(result.rule_ids) ? result.rule_ids.split(',') : result.rule_ids;
    }
    if (!THINK.isEmpty(result.ext)) {
      result.ext = isString(result.ext) ? JSON.parse(result.ext) : result.ext;
    }
    return THINK.getPromise(result);
  }

  _afterSelect(result, options) {
    if (!THINK.isEmpty(result)) {
      result.forEach(function (v) {
        if (!THINK.isEmpty(v.rule_ids)) {
          v.rule_ids = isString(v.rule_ids) ? v.rule_ids.split(',') : v.rule_ids;
        }
        if (!THINK.isEmpty(v.ext)) {
          v.ext = isString(v.ext) ? JSON.parse(v.ext) : v.ext;
        }
      });
    }
    return THINK.getPromise(result);
  }
}
