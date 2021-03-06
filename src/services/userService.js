import axios from "../axios";

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password })
}

const getAllUsers = (id) => {
    return axios.get(`/api/get-all-users?id=${id}`, { id: id })
}

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data)
}

const deleteUserService = (userId) => {
    // return axios.delete('/api/delete-user', { id: userId })
    return axios.delete('/api/delete-user', { data: { id: userId } })
}

const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData)
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}

const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

const getAllDoctorService = () => {
    return axios.get(`/api/get-all-doctors`)
}

const saveDetailDoctorService = (data) => {
    return axios.post(`/api/save-info-doctors`, data)
}

const getDetailDoctorService = (id) => {
    return axios.get(`/api/get-all-info-detail-doctors/?id=${id}`)
}

const saveBulkScheduleDoctor = (data) => {
    return axios.post(`/api/bulk-create-schedule`, data)
}

const getScheduleDoctorByDate = (doctorId, date) => {
    return axios.get(`/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`)
}

const getAllHandBookService = () => {
    return axios.get(`/api/get-all-books`)
}

const saveHanbookService = (data) => {
    return axios.post(`/api/create-one-handbook`, data)
}


export {
    handleLoginApi, getAllUsers,
    createNewUserService, deleteUserService,
    editUserService, getAllCodeService,
    getTopDoctorHomeService, getAllDoctorService,
    saveDetailDoctorService, getDetailDoctorService,
    saveBulkScheduleDoctor, getScheduleDoctorByDate,
    getAllHandBookService, saveHanbookService
}
