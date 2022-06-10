import dashboard from "../../conponents/DashboardList";

const AdminPage = {
    async render() {
        return `
        ${dashboard.render()}
        `;
    },
};
export default AdminPage;