import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import ReactGA from 'react-ga';

const Home = () => {
	React.useEffect(() => {
		ReactGA.initialize('UA-146175118-3');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<div className="app">
			<Head>
				<title>ShowPath.tech - Path to Learn Programming</title>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:creator" content="@pjijin" />
				<meta property="og:url" content="https://showpath.tech/" />
				<meta property="og:title" content="Path to Learn Programming" />
				<meta property="og:description" content="Start from 0x01." />
				<meta property="og:image" content="https://showpath.tech/static/cover.png" />

				<meta property="og:title" content="ShowPath.Tech - Path to Learn Programming" />
				<meta property="og:type" content="internet" />
				<meta property="og:url" content="https://showpath.tech/" />
				<meta property="og:image" content="https://showpath.tech/static/cover.png" />
			</Head>

			<div className="hero">
				<h1 className="title">Learning Path</h1>
				<p className="description">Start from 0x01</p>

				<div className="tiles">
					<div className="row">
						<Link href="/roadmap/[type]" as="/roadmap/fullstack">
							<a className="card">
								<h3>Fullstack Developer </h3>
								<p>
									A full stack web developer is a person who can develop both client and server
									software.
								</p>
							</a>
						</Link>
						<Link href="/roadmap/[type]" as="/roadmap/machine-learning">
							<a className="card">
								<h3>Machine Learning </h3>
								<p>
									Machine learning is an application of AI that provides systems the ability to
									automatically learn and improve from experience without being explicitly programmed.
								</p>
							</a>
						</Link>
						<Link href="/roadmap/[type]" as="/roadmap/artificial-intelligence">
							<a className="card">
								<h3>Artificial intelligence </h3>
								<p>
									Artificial intelligence (AI) is the simulation of human intelligence processes by
									machines, especially computer systems.
								</p>
							</a>
						</Link>
					</div>
					<div className="row">
						<Link href="/roadmap/[type]" as="/roadmap/virtual-reality">
							<a className="card">
								<h3>Virtual Reality</h3>
								<p>
									Virtual Reality (VR) is the use of computer technology to create a simulated
									environment. Unlike traditional user interfaces, VR places the user inside an
									experience.
								</p>
							</a>
						</Link>
						<Link href="/roadmap/[type]" as="/roadmap/mobile">
							<a className="card">
								<h3>Mobile Apps</h3>
								<p>
									A mobile application is a computer program or software application designed to run
									on a mobile device such as a phone, tablet, or watch.
								</p>
							</a>
						</Link>
						<Link href="/roadmap/[type]" as="/roadmap/web-scrapping">
							<a className="card">
								<h3>Web Scrapping</h3>
								<p>
									Web Scraping is a technique employed to extract large amounts of data from websites
									whereby the data is extracted and saved to a local file or to a database .
								</p>
							</a>
						</Link>
					</div>
				</div>
			</div>
			{/* <div className="row">Contribute to the opensource source project.</div> */}
		</div>
	);
};

export default Home;
