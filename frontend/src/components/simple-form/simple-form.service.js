import axios from 'axios';

const simpleformService = {
    sendPostData:sendPostData
}

function sendPostData(inputObj){
    return axios({
        method:'POST',
        url:'http://localhost:5000/api/email',
        data:{
            email:inputObj.email.value
        },
    });
}//end:sent

export default simpleformService;