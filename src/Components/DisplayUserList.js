import React from 'react'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import displayAction from '../Actions/displayAction'
import { ChartsDisplay } from './ChartsDisplay'
export const DisplayUserList = (props) => {
	const alltasks = useSelector((state) => state.allTasks)
	console.log(alltasks)
	const dispatch = useDispatch()
	const words = alltasks.words ? alltasks.words : []
	const userName = alltasks.userName ? alltasks.userName : []
	let history = useHistory()

	const liClick = (userelement, words) => {
		dispatch(displayAction(userelement, words, history))
	}
	return (
		<>
			<table>
				<tr>
					<td>
						<ul>
							{userName.map((ele) => {
								return (
									<>
										<li
											onClick={() => {
												liClick(ele, words)
											}}>
											{ele}
										</li>
									</>
								)
							})}
						</ul>
					</td>
					<td> </td>
					<td>
						<ChartsDisplay />
					</td>
				</tr>
			</table>
		</>
	)
}
