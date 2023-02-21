import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context_API/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
			<span class='badge badge-primary badge-pill mr-3'>£{props.cost}</span>
				<button class='btn btn-danger' onClick={handleDeleteExpense}>
                    <TiDelete size='1.5em' />
                </button>
				
			</div>
		</li>
	);
};

export default ExpenseItem;
