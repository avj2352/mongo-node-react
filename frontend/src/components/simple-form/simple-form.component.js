import React, {Component} from 'react';
import simpleformService from './simple-form.service';
import './simple-form.css';

class SimpleForm extends Component{
    constructor(props,context){
        super(props,context);
        this.state = {            
            submitFormResponse:''
        };
    }//end:constructor

    componentDidMount(){
        simpleformService.getAllRecords().then(
            function(response){
                console.log('Success Response: ', response);
            },
            function(errorResponse){
                console.log('Error Response: ', errorResponse);
            }
        );//end:then
    }//end:componentDidMount

    onSubmit = ()=>{
        console.log(this.refs.memberName.value);        
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
                <strong>Success!</strong> Your Record<a href="#" className="alert-link">got saved successfully</a>.
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
                                    <div className="row">
                                    <label htmlFor="memberName" className="col-lg-2 control-label">Member Name: </label>
                                        <div className="col-lg-10">
                                            <input name="memberName" ref="memberName" type="text" className="form-control" id="inputEmail" placeholder="Member Name"/>      
                                        </div>
                                    </div>                                    
                                    <div className="row">
                                    <label htmlFor="projectName" className="col-lg-2 control-label">Project Name: </label>
                                        <div className="col-lg-10">
                                            <input name="projectName" ref="projectName" type="text" className="form-control" id="inputEmail" placeholder="Project Name"/>      
                                        </div>
                                    </div>
                                    <div className="row">
                                    <label htmlFor="workYesterday" className="col-lg-2 control-label">Work Yesterday: </label>
                                        <div className="col-lg-10">
                                            <input name="workYesterday" ref="workYesterday" type="text" className="form-control" id="inputEmail" placeholder="What did you work yesterday"/>      
                                        </div>
                                    </div>
                                    <div className="row">
                                    <label htmlFor="workToday" className="col-lg-2 control-label">Work Today: </label>
                                        <div className="col-lg-10">
                                            <input name="workToday" ref="workToday" type="text" className="form-control" id="inputEmail" placeholder="What did you work today"/>      
                                        </div>
                                    </div>
                                    <div className="row">
                                    <label htmlFor="impediment" className="col-lg-2 control-label">Impediment: </label>
                                        <div className="col-lg-10">
                                            <input name="impediment" ref="impediment" type="text" className="form-control" id="inputEmail" placeholder="Any impediments?"/>      
                                        </div>
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