import React, {Component} from 'react';
import simpleformService from './simple-form.service';
import './simple-form.css';

class SimpleForm extends Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            data:'',
            submitFormResponse:''
        };
    }
    onSubmit = ()=>{
        console.log(this.refs.email.value);
        this.setState({
            data:{email:this.refs.email.value}        
        });//end:setState
        var self = this; //to maintain the context of this for Axios         
        simpleformService.sendPostData(this.refs).then(
            function(response){
                (response.data.status)?self.setState({submitFormResponse:response.data.status}):null;
            },
            function(errorResponse){
                console.error('Error Response from the server is: ', errorResponse);
            });//end:then
    };

    render(){
        let successDiv = '';
        if(this.state.submitFormResponse != ''){
            successDiv = 
            <div className="alert alert-dismissible alert-success">                
                <strong>Success!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
            </div>
            ;
        }
        return(
            <div className="simpleForm">
                <div>{successDiv}</div>
                <h2>Mongo DB StandUpMeetingForm</h2>
                <div className="row">
                    <div className="col-lg-6">                        
                            <fieldset>
                                <legend>Standup Meeting</legend>
                                    <div className="form-group">
                                    <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
                                        <div className="col-lg-10">
                                            <input name="inputEmail" ref="email" type="text" className="form-control" id="inputEmail" placeholder="Email"/>      
                                        </div>
                                        <p>&nbsp;</p>
                                        <div className="row col-lg-12 right-align">
                                            <button className="btn btn-info" onClick={this.onSubmit}>Submit</button>
                                        </div>
                                    </div>
                            </fieldset>                        
                    </div>
                </div>
            </div>
        );        
    }
}//end:class-SimpleForm

export default SimpleForm;