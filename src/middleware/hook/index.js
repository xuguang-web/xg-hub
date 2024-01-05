const {
    DEPARTMENT_NAME_IS_REQUIRED,
    LEADER_IS_REQUIRED,
    PARENTID_IS_REQUIRED,
    DEPARTMENT_IS_EXISTS
} = require("../../constant");

const { getDataByName }  = require("../../service/department.service")


 const handleDepartmentParams = (name,leader,parentId,ctx) => {
    let flag = true
    if(!name) {
        flag = false;
        ctx.app.emit("info", DEPARTMENT_NAME_IS_REQUIRED, ctx);
        return flag
    }
    if(!leader) {
        flag = false;
        ctx.app.emit("info", LEADER_IS_REQUIRED, ctx);
        return flag
    }
    if(!parentId) {
        flag = false;
        ctx.app.emit("info", PARENTID_IS_REQUIRED, ctx);
        return flag
    }
    return flag
}

const handleDepartmentNameRepart = async (name,ctx) => {
    let flag = true;
    const res = await getDataByName(name)
    if(res.length) {
        flag = false
        ctx.app.emit("info",  DEPARTMENT_IS_EXISTS, ctx);
    }
    return flag
}

module.exports = {
    handleDepartmentParams,
    handleDepartmentNameRepart 
}