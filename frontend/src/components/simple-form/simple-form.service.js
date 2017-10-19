import axios from 'axios';

const simpleformService = {
    sendPostData:sendPostData
}

function sendPostData(inputObj){
    return axios({
        method:'POST',
        url:'http://localhost:5000/api/email',
        data:{
            memberName:inputObj.memberName.value,
            projectName:inputObj.projectName.value,
            workYesterday:inputObj.workYesterday.value,
            workToday:inputObj.workToday.value,
            impediment:inputObj.impediment.value,
        },
    });
}//end:sent

export default simpleformService;