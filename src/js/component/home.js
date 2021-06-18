import React from "react";

import { ToDoList } from "./ToDoList";

export function Home() {
	return (
		<div class="container">
			<div class="row">
				<div class="col-12 text-center">
					<h1 class="text-center">Things to do</h1>
					<ToDoList />
				</div>
			</div>
		</div>
	);
}
