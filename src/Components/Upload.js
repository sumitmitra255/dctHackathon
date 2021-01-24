import '../Css/App.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DisplayUserList } from './DisplayUserList'
import allDataAction from '../Actions/allDataAction'
import { Logout } from './Logout'
function Upload(props) {
	const { setLoginStatus } = props
	const dispatch = useDispatch()
	const [dataToggle, setDataToggle] = useState(false)
	const openFile = function (event) {
		let input = event.target
		let reader = new FileReader()
		reader.onload = function () {
			let text = reader.result
			setDataToggle(true)
			dispatch(allDataAction(text))
		}
		reader.readAsText(input.files[0])
	}

	return (
		<div>
			<Logout setLoginStatus={setLoginStatus} />
			<input type='file' accept='text/plain' onChange={openFile}></input>
			{dataToggle ? <DisplayUserList /> : ''}
		</div>
	)
}

export default Upload
