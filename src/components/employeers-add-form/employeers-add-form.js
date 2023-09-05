import {Component} from 'react';

import './employeers-add-form.css';

class EmployeersAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render(){
        const {name,salary} = this.state;

        return(
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Name?"
                        name="name"
                        value={name}
                        onChange = {this.onValueChange}
                        required
                        minLength={3} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary?"
                        name="salary"
                        value={salary}
                        onChange = {this.onValueChange}
                        required
                        minLength={2} />
    
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        );
    }
};

export default EmployeersAddForm;