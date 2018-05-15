
export const loadJwtToken = () => {
	try {
		const serializedState = localStorage.getItem('jwt')
		if( serializedState === null ) return undefined
		return JSON.parse(serializedState)
	}
	catch (err) {
		return undefined
	}
}

export const saveJwtToken = header => {
	try {
		const serializedState = JSON.stringify(header)
		localStorage.setItem('jwt', serializedState)
	} catch (err) {
		// ignore
	}
}

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state')
		if( serializedState === null ) return undefined
		return JSON.parse(serializedState)
	}
	catch (err) {
		return undefined
	}
}

export const saveState = ({session, router}) => {
	try {
		const serializedState = JSON.stringify({
			session: session,
			router: router,
		})
		localStorage.setItem('state', serializedState)
	} catch (err) {
		// ignore
	}
}
