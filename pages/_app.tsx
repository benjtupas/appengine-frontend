import Head from "next/head";

function App({ Component, props }) {	
	return (
		<>
			<Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>

			<Component {...props} />
		</>
	)
}

export default App
