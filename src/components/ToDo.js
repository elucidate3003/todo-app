import React from 'react';
import { Check } from 'react-feather';
import { X } from 'react-feather';


export const TASK_STATUSES = {
	TO_DO: 'TO_DO',
	DONE: 'DONE'
};

export const ToDo =  (props) => {
	const handleChange = (name, type) => {
		props.remove(name, type)
	};
	const handleDone = (name) => {
		props.complete(name);
	};
	const rlist = props.tasks.map((list, idx) =>
		<div key={idx}>
			<li className="todo">{list}</li>
			<Check className="check" color="white" size={17} onClick={() => handleDone(list)} />
			<X className="cross" color="white" size={17} onClick={() => handleChange(list, TASK_STATUSES.TO_DO)} />
		</div>
	);
	const dlist = props.done.map((done, idx) =>
		<div key={idx}>
			<li className="done">{done}</li>
			<X className="cross" color="white" size={17} onClick={() => handleChange(done, TASK_STATUSES.DONE)} />
		</div>
	);

	return (
		<div>
			<ul>{rlist}</ul>
			<h3>Completed tasks = {props.done.length} </h3>
			<ul>{dlist}</ul>
		</div>
	);
}

export default ToDo