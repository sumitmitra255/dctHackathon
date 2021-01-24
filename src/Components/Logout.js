import React, { useEffect } from 'react'
export const Logout = (props) => {
	const { setLoginStatus } = props

	const logoutUser = (e) => {
		localStorage.removeItem('user')
		setLoginStatus(false)
	}
	return (
		<>
			<button onClick={logoutUser}>Logout</button>
		</>
	)
}
