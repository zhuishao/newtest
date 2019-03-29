export const changeMsg = ({commit},msg) => {
    commit({
        type: 'mutationsMsg',     //对应mutation.js中的mutationsMsg方法
        msg: msg
    });
};