import { LogOutService, refreshToken } from "./authService";

export async function HandleApi(api, data = null) {
    try {
        return await api(data);
    } catch (error) {
        if (error.response.status === 401) {
            try {
                // Làm mới token trước
                await refreshToken();

                // Gọi lại API sau khi token được làm mới
                return await api(data);
            } catch (refreshError) {
                // Xử lý lỗi làm mới token
                console.error("Lỗi làm mới token:", refreshError);
                await handleLogout(refreshError);
            }
        } else {
            return Promise.reject(error);
        }
    }
}

async function handleLogout(refreshError) {
    // window.location.href = '/auth/login';
    localStorage.clear();
    await LogOutService();
    return Promise.reject(refreshError);
}
