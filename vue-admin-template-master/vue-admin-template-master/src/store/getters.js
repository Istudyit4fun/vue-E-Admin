const getters = {
    // 这些就是 快捷访问
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    // 因为 user里面的代码被删干净了 ，这里调用user...会报错
    // token: state => state.user.token,
    // avatar: state => state.user.avatar,
    // name: state => state.user.name
}
export default getters