export default {
    debug: true,
    state: {
        // TODO:
        username: "Alex B",
        active_tab: 0,
    },
    setActiveTab(newValue) {
        if (this.debug) console.log("setActiveTab вызвано с ", newValue);
        this.state.active_tab = newValue;
        return this.state.active_tab
    },
}