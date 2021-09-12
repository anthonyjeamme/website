import React, { useEffect, useRef } from 'react'

const test = () => {
	const recognitionRef = useRef(null)

	const nameRef = useRef(null)

	const talk = (sentence) => {
		const utterance = new SpeechSynthesisUtterance(sentence)

		utterance.onend = () => {
			try {
				recognitionRef.current.start()
			} catch {}
		}

		speechSynthesis.speak(utterance)
	}

	useEffect(() => {
		const SpeechRecognition =
			window.SpeechRecognition || window.webkitSpeechRecognition
		recognitionRef.current = new SpeechRecognition()

		recognitionRef.current.onstart = function () {
			console.log('START')
			// instructions.text('Voice recognition activated. Try speaking into the microphone.');
		}

		recognitionRef.current.onspeechend = function (e) {
			console.log('END', e)

			// setTimeout(() => {
			// }, 500)

			// instructions.text('You were quiet for a while so voice recognition turned itself off.');
		}

		recognitionRef.current.onerror = function (event) {
			if (event.error == 'no-speech') {
				console.log('ERROR')
				//   instructions.text('No speech was detected. Try again.');
			}

			setTimeout(() => {
				recognitionRef.current.start()
			}, 500)
		}

		recognitionRef.current.onresult = function (event) {
			// event is a SpeechRecognitionEvent object.
			// It holds all the lines we have captured so far.
			// We only need the current one.
			const current = event.resultIndex

			// // Get a transcript of what was said.
			const transcript = event.results[current][0].transcript

			const intent = getIntent(transcript)

			console.log('ICI')

			console.log(intent)

			if (intent.value) {
				talk(intent.value)
			} else {
				talk('Je ne comprends pas')
			}

			// if (intent.type === 'MY_NAME') talk(`hello ${intent.value}`)
			// else if (intent.type === 'GIRLFRIEND_NAME')
			// 	talk(`elle s'appelle ${intent.value}`)
			// else {
			// 	talk('Je ne comprends pas')
			// }
		}

		recognitionRef.current.start()
	}, [])

	const startRecognition = () => {
		recognitionRef.current.start()
	}

	return (
		<div className="test">
			<button
				onClick={() => {
					// talk()
				}}
			>
				Hello
			</button>
			<button
				onClick={() => {
					startRecognition()
				}}
			>
				START
			</button>
		</div>
	)
}
export default test

const getIntent = (sentence: string) => {
	console.log(sentence)

	if (sentence === 'hablas espanol') {
		return {
			value: 'oui je parle portugais'
		}
	}

	if (sentence === "qu'est-ce que je dois faire aujourd'hui") {
		return {
			value: 'plein de choses'
		}
	}

	if (sentence === 'do you speak english') {
		return {
			value: 'je ne parle pas cette langue'
		}
	}

	if (sentence === 'avec qui je travaille') {
		return {
			value: 'Avec Yannick'
		}
	}

	if (sentence.includes(`je m'appelle`))
		return {
			type: 'MY_NAME',
			value: `Salut ` + sentence.replace(`je m'appelle`, '')
		}

	if (sentence === `comment s'appelle ma copine`) {
		return {
			type: 'GIRLFRIEND_NAME',
			value: `elle s'appelle mélina`
		}
	}

	return {
		type: 'UNKNOWN'
	}
}
