
import './employeers-list-item.css'

const EmployeersListItem = (props) => {

        const {name,salary, onDelete, onToggleProp, increase, ready} = props;


        let classNames = "list-group-item d-flex justify-content-between";

        if(increase){
            classNames += ' increase';
        }
        if(ready){
            classNames += ' like';
        }

        return(
            <li className={classNames}>
                <span className="list-group-item-label"
                      onClick = {onToggleProp}
                      data-toggle="ready">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-cookie btn-sm"
                            type="button"
                            onClick = {onToggleProp}
                            data-toggle="increase">
                                <i className="fas fa-cookie"></i>    
                    </button>
                    <button className="btn-trash btn-sm"
                            onClick={onDelete}
                            type="button">
                                <i className="fas fa-trash"></i>    
                    </button>   
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
};

export default EmployeersListItem;

