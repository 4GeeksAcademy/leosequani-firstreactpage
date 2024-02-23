import React from "react";
import Navbar from "./Menu.jsx";
import Greetingcard from "./greetingCard.jsx";
import Shopcards from "./cards.jsx";
import Footer from "./footer.jsx";
//create your first compo from nent
const Home = () => { 
	return (
		<div className="container-fluid">
			<div className="row"><Navbar /></div>
			
			<div className="row d-flex justify-content-evenly mt-5">
					<div className="row">		
						<div className="col-sm"><Greetingcard /></div>
					</div>
				<div className="row d-flex pt-4">
						<div className="col-sm">
							<Shopcards
							title = "hello"
							text = "hello"
							url = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.etsy.com%2Flisting%2F698887822%2Fsoft-grey-digital-background-photo-video&psig=AOvVaw0gm_ttx4_m6X66LwwtT1ym&ust=1708809198658000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIig5LuwwoQDFQAAAAAdAAAAABAE"
							background = "red"
						/></div>
						<div className="col-sm">
							<Shopcards
							title = "hello"
							text = "hello"
							url = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.etsy.com%2Flisting%2F698887822%2Fsoft-grey-digital-background-photo-video&psig=AOvVaw0gm_ttx4_m6X66LwwtT1ym&ust=1708809198658000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIig5LuwwoQDFQAAAAAdAAAAABAE"
							background = "blue"
						/></div>
						<div className="col-sm">
							<Shopcards
							title = "hello"
							text = "hello"
							url = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.etsy.com%2Flisting%2F698887822%2Fsoft-grey-digital-background-photo-video&psig=AOvVaw0gm_ttx4_m6X66LwwtT1ym&ust=1708809198658000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIig5LuwwoQDFQAAAAAdAAAAABAE"
							background = "orange"
						/></div>
						<div className="col-sm">
							<Shopcards
							title = "hello"
							text = "hello"
							url = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.etsy.com%2Flisting%2F698887822%2Fsoft-grey-digital-background-photo-video&psig=AOvVaw0gm_ttx4_m6X66LwwtT1ym&ust=1708809198658000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIig5LuwwoQDFQAAAAAdAAAAABAE"
							background = "fuchsia"
						/></div>
					</div>
				</div>
				<div className="row text-center p-5 bg-dark text-light mt-5">
					<Footer />
				</div>
			</div>

	);
};

export default Home;