import React, { useState } from "react";

export const ToDoList = () => {
	const [inputValue, setInputValue] = useState("");
	const [taskList, setTaskList] = useState([]);
	const listaItems = taskList.map((item, index) => {
		return <li class="list-group-item">{item}</li>;
	});
	return (
		<div>
			<input
				type="text"
				onChange={e => setInputValue(e.target.value)}
				value={inputValue}
			/>
			<button onClick={e => setTaskList([...taskList, inputValue])}>
				Add
			</button>
			<ul class="list-group">{listaItems}</ul>
		</div>
	);
};
