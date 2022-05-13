import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://192.168.115.170:8080/api/v1/employees';
const SKLAD_BASE_REST_API_URL = 'http://192.168.115.170:8080/api/v1/sklad';
const PERCO_BASE_REST_API_URL = 'http://192.168.115.170:8091/api/v1/perco/userdata?dateto=2022-04-26&datedo=2022-04-27&idstaff=8482';
const AS_BASE_REST_API_URL = 'http://192.168.115.170:8091/api/v1/perco/as';
const GROUP_BASE_REST_API_URL = 'http://192.168.115.170:8091/api/v1/perco/group';
const PERCOV1_BASE_REST_API_URL = 'http://192.168.115.170:8091/api/v1/perco'

class EmployeeService{

    getAllPerco(){
        return axios.get(PERCO_BASE_REST_API_URL)
    }

    getAllGroupder(subid, dateto, datedo){
        return axios.get(PERCOV1_BASE_REST_API_URL + '/usergroup?subid=' + subid + '&dateto=' + dateto + '&datedo=' + datedo)
    }

    getAllUsers(){
        return axios.get(AS_BASE_REST_API_URL)
    }

    getAllGroups(){
        return axios.get(GROUP_BASE_REST_API_URL)
    }

    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee)
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }

    getAllSklads(){
        return axios.get(SKLAD_BASE_REST_API_URL)
    }

    createSklad(sklad){
        return axios.post(SKLAD_BASE_REST_API_URL, sklad)
    }

    getSkladById(skladId){
        return axios.get(SKLAD_BASE_REST_API_URL + '/' + skladId);
    }

    updateSklad(skladId, sklad){
        return axios.put(SKLAD_BASE_REST_API_URL + '/' + skladId, sklad);
    }

    deleteSklad(skladId){
        return axios.delete(SKLAD_BASE_REST_API_URL + '/' + skladId);
    }
}

export default new EmployeeService();