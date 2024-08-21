import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./App.css";

const imageSets = [
	"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
	"https://images.unsplash.com/photo-1518837695005-2083093ee35b",
	"https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
	"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
	"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
	"https://images.unsplash.com/photo-1518837695005-2083093ee35b",
	"https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
];

function App() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024, // For screens <= 1024px
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600, // For screens <= 600px
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	};

	return (
		<div className="image-grid">
			<div className="heading-container">
				<h1>This is a simple Slider.</h1>
			</div>
			<div className="slider-container">
				<Slider {...settings} className="slider">
					{imageSets.map((image, index) => (
						<div key={index}>
							<img
								className="slider-image"
								src={image}
								alt={`slide ${index}`}
							/>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
}

export default App;
